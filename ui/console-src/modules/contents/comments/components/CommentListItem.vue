<script lang="ts" setup>
import EntityDropdownItems from "@/components/entity/EntityDropdownItems.vue";
import { usePluginModuleStore } from "@/stores/plugin";
import { formatDatetime } from "@/utils/date";
import { usePermission } from "@/utils/permission";
import { useOperationItemExtensionPoint } from "@console/composables/use-operation-extension-points";
import type {
  Extension,
  ListedComment,
  ListedReply,
  Post,
  SinglePage,
} from "@halo-dev/api-client";
import { consoleApiClient, coreApiClient } from "@halo-dev/api-client";
import {
  Dialog,
  IconAddCircle,
  IconExternalLinkLine,
  Toast,
  VAvatar,
  VButton,
  VDropdownItem,
  VEmpty,
  VEntity,
  VEntityContainer,
  VEntityField,
  VLoading,
  VSpace,
  VStatusDot,
  VTag,
} from "@halo-dev/components";
import type {
  CommentSubjectRefProvider,
  CommentSubjectRefResult,
  OperationItem,
} from "@halo-dev/console-shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import {
  computed,
  markRaw,
  onMounted,
  provide,
  ref,
  type Ref,
  toRefs,
} from "vue";
import { useI18n } from "vue-i18n";
import ReplyCreationModal from "./ReplyCreationModal.vue";
import ReplyListItem from "./ReplyListItem.vue";

const { currentUserHasPermission } = usePermission();
const { t } = useI18n();
const queryClient = useQueryClient();

const props = withDefaults(
  defineProps<{
    comment: ListedComment;
    isSelected?: boolean;
  }>(),
  {
    isSelected: false,
  }
);

const { comment } = toRefs(props);

const hoveredReply = ref<ListedReply>();
const showReplies = ref(false);
const replyModal = ref(false);

provide<Ref<ListedReply | undefined>>("hoveredReply", hoveredReply);

const handleDelete = async () => {
  Dialog.warning({
    title: t("core.comment.operations.delete_comment.title"),
    description: t("core.comment.operations.delete_comment.description"),
    confirmType: "danger",
    confirmText: t("core.common.buttons.confirm"),
    cancelText: t("core.common.buttons.cancel"),
    onConfirm: async () => {
      try {
        await coreApiClient.content.comment.deleteComment({
          name: props.comment?.comment?.metadata.name as string,
        });

        Toast.success(t("core.common.toast.delete_success"));
      } catch (error) {
        console.error("Failed to delete comment", error);
      } finally {
        queryClient.invalidateQueries({ queryKey: ["comments"] });
      }
    },
  });
};

const handleApproveReplyInBatch = async () => {
  Dialog.warning({
    title: t("core.comment.operations.approve_applies_in_batch.title"),
    confirmText: t("core.common.buttons.confirm"),
    cancelText: t("core.common.buttons.cancel"),
    onConfirm: async () => {
      try {
        const repliesToUpdate = replies.value?.filter((reply) => {
          return !reply.reply.spec.approved;
        });
        const promises = repliesToUpdate?.map((reply) => {
          return coreApiClient.content.reply.patchReply({
            name: reply.reply.metadata.name,
            jsonPatchInner: [
              {
                op: "add",
                path: "/spec/approved",
                value: true,
              },
              {
                op: "add",
                path: "/spec/approvedTime",
                // TODO: 暂时由前端设置发布时间。see https://github.com/halo-dev/halo/pull/2746
                value: new Date().toISOString(),
              },
            ],
          });
        });
        await Promise.all(promises || []);

        Toast.success(t("core.common.toast.operation_success"));
      } catch (e) {
        console.error("Failed to approve comment replies in batch", e);
      } finally {
        await refetch();
      }
    },
  });
};

const handleApprove = async () => {
  try {
    await coreApiClient.content.comment.patchComment({
      name: props.comment.comment.metadata.name,
      jsonPatchInner: [
        {
          op: "add",
          path: "/spec/approved",
          value: true,
        },
        {
          op: "add",
          path: "/spec/approvedTime",
          // TODO: 暂时由前端设置发布时间。see https://github.com/halo-dev/halo/pull/2746
          value: new Date().toISOString(),
        },
      ],
    });

    Toast.success(t("core.common.toast.operation_success"));
  } catch (error) {
    console.error("Failed to approve comment", error);
  } finally {
    queryClient.invalidateQueries({ queryKey: ["comments"] });
  }
};

const {
  data: replies,
  isLoading,
  refetch,
} = useQuery<ListedReply[]>({
  queryKey: [
    "comment-replies",
    props.comment.comment.metadata.name,
    showReplies,
  ],
  queryFn: async () => {
    const { data } = await consoleApiClient.content.reply.listReplies({
      commentName: props.comment.comment.metadata.name,
      page: 0,
      size: 0,
    });
    return data.items;
  },
  refetchInterval(data) {
    const deletingReplies = data?.filter(
      (reply) => !!reply.reply.metadata.deletionTimestamp
    );
    return deletingReplies?.length ? 1000 : false;
  },
  enabled: computed(() => showReplies.value),
});

const { mutateAsync: updateCommentLastReadTimeMutate } = useMutation({
  mutationKey: ["update-comment-last-read-time"],
  mutationFn: async () => {
    return coreApiClient.content.comment.patchComment(
      {
        name: props.comment.comment.metadata.name,
        jsonPatchInner: [
          {
            op: "add",
            path: "/spec/lastReadTime",
            value: new Date().toISOString(),
          },
        ],
      },
      {
        mute: true,
      }
    );
  },
  retry: 3,
});

const handleToggleShowReplies = async () => {
  showReplies.value = !showReplies.value;

  if (props.comment.comment.status?.unreadReplyCount) {
    await updateCommentLastReadTimeMutate();
  }

  queryClient.invalidateQueries({ queryKey: ["comments"] });
};

const onReplyCreationModalClose = () => {
  queryClient.invalidateQueries({ queryKey: ["comments"] });

  if (showReplies.value) {
    refetch();
  }

  replyModal.value = false;
};

// Subject ref processing
const SubjectRefProviders = ref<CommentSubjectRefProvider[]>([
  {
    kind: "Post",
    group: "content.halo.run",
    resolve: (subject: Extension): CommentSubjectRefResult => {
      const post = subject as Post;
      return {
        label: t("core.comment.subject_refs.post"),
        title: post.spec.title,
        externalUrl: post.status?.permalink,
        route: {
          name: "PostEditor",
          query: {
            name: post.metadata.name,
          },
        },
      };
    },
  },
  {
    kind: "SinglePage",
    group: "content.halo.run",
    resolve: (subject: Extension): CommentSubjectRefResult => {
      const singlePage = subject as SinglePage;
      return {
        label: t("core.comment.subject_refs.page"),
        title: singlePage.spec.title,
        externalUrl: singlePage.status?.permalink,
        route: {
          name: "SinglePageEditor",
          query: {
            name: singlePage.metadata.name,
          },
        },
      };
    },
  },
]);

const { pluginModules } = usePluginModuleStore();

onMounted(() => {
  for (const pluginModule of pluginModules) {
    const callbackFunction =
      pluginModule?.extensionPoints?.["comment:subject-ref:create"];

    if (typeof callbackFunction !== "function") {
      continue;
    }

    const providers = callbackFunction();

    SubjectRefProviders.value.push(...providers);
  }
});

const subjectRefResult = computed(() => {
  const { subject } = props.comment;
  if (!subject) {
    return {
      label: t("core.comment.subject_refs.unknown"),
      title: t("core.comment.subject_refs.unknown"),
    };
  }
  const subjectRef = SubjectRefProviders.value.find(
    (provider) =>
      provider.kind === subject.kind &&
      subject.apiVersion.startsWith(provider.group)
  );
  if (!subjectRef) {
    return {
      label: t("core.comment.subject_refs.unknown"),
      title: t("core.comment.subject_refs.unknown"),
    };
  }
  return subjectRef.resolve(subject);
});

const { operationItems } = useOperationItemExtensionPoint<ListedComment>(
  "comment:list-item:operation:create",
  comment,
  computed((): OperationItem<ListedComment>[] => [
    {
      priority: 0,
      component: markRaw(VDropdownItem),
      label: t("core.comment.operations.approve_comment_in_batch.button"),
      action: handleApprove,
      hidden: props.comment?.comment.spec.approved,
    },
    {
      priority: 10,
      component: markRaw(VDropdownItem),
      label: t("core.comment.operations.approve_applies_in_batch.button"),
      action: handleApproveReplyInBatch,
    },
    {
      priority: 20,
      component: markRaw(VDropdownItem),
      props: {
        type: "danger",
      },
      label: t("core.common.buttons.delete"),
      action: handleDelete,
    },
  ])
);
</script>

<template>
  <ReplyCreationModal
    v-if="replyModal"
    :comment="comment"
    @close="onReplyCreationModalClose"
  />
  <VEntity :is-selected="isSelected">
    <template
      v-if="currentUserHasPermission(['system:comments:manage'])"
      #checkbox
    >
      <slot name="checkbox" />
    </template>
    <template #start>
      <VEntityField>
        <template #description>
          <VAvatar
            circle
            :src="comment?.owner.avatar"
            :alt="comment?.owner.displayName"
            size="md"
          ></VAvatar>
        </template>
      </VEntityField>
      <VEntityField
        class="w-28 min-w-[7rem]"
        :title="comment?.owner?.displayName"
        :description="comment?.owner?.email"
      ></VEntityField>
      <VEntityField width="100%">
        <template #description>
          <div class="flex flex-col gap-2">
            <div class="mb-1 flex items-center gap-2">
              <VTag>{{ subjectRefResult.label }}</VTag>
              <RouterLink
                :to="subjectRefResult.route || $route"
                class="line-clamp-2 inline-block text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                {{ subjectRefResult.title }}
              </RouterLink>
              <a
                v-if="subjectRefResult.externalUrl"
                :href="subjectRefResult.externalUrl"
                target="_blank"
                class="hidden text-gray-600 hover:text-gray-900 group-hover:block"
              >
                <IconExternalLinkLine class="h-3.5 w-3.5" />
              </a>
            </div>
            <div class="break-all text-sm text-gray-900">
              {{ comment?.comment?.spec.content }}
            </div>
            <div class="flex items-center gap-3 text-xs">
              <span
                class="select-none text-gray-700 hover:text-gray-900"
                @click="handleToggleShowReplies"
              >
                {{
                  $t("core.comment.list.fields.reply_count", {
                    count: comment?.comment?.status?.replyCount || 0,
                  })
                }}
              </span>
              <VStatusDot
                v-show="(comment?.comment?.status?.unreadReplyCount || 0) > 0"
                v-tooltip="$t('core.comment.list.fields.has_new_replies')"
                state="success"
                animate
              />
              <span
                class="select-none text-gray-700 hover:text-gray-900"
                @click="replyModal = true"
              >
                {{ $t("core.comment.operations.reply.button") }}
              </span>
            </div>
          </div>
        </template>
      </VEntityField>
    </template>
    <template #end>
      <VEntityField v-if="!comment?.comment.spec.approved">
        <template #description>
          <VStatusDot
            state="warning"
            animate
            :text="$t('core.comment.list.fields.pending_review')"
          />
        </template>
      </VEntityField>
      <VEntityField v-if="comment?.comment?.metadata.deletionTimestamp">
        <template #description>
          <VStatusDot
            v-tooltip="$t('core.common.status.deleting')"
            state="warning"
            animate
          />
        </template>
      </VEntityField>
      <VEntityField>
        <template #description>
          <span class="truncate text-xs tabular-nums text-gray-500">
            {{
              formatDatetime(
                comment?.comment.spec.creationTime ||
                  comment?.comment.metadata.creationTimestamp
              )
            }}
          </span>
        </template>
      </VEntityField>
    </template>
    <template
      v-if="currentUserHasPermission(['system:comments:manage'])"
      #dropdownItems
    >
      <EntityDropdownItems :dropdown-items="operationItems" :item="comment" />
    </template>

    <template v-if="showReplies" #footer>
      <div class="pl-8">
        <VLoading v-if="isLoading" />
        <Transition v-else-if="!replies?.length" appear name="fade">
          <VEmpty
            :message="$t('core.comment.reply_empty.message')"
            :title="$t('core.comment.reply_empty.title')"
          >
            <template #actions>
              <VSpace>
                <VButton @click="refetch()">
                  {{ $t("core.common.buttons.refresh") }}
                </VButton>
                <VButton type="secondary" @click="replyModal = true">
                  <template #icon>
                    <IconAddCircle class="h-full w-full" />
                  </template>
                  {{ $t("core.comment.reply_empty.new") }}
                </VButton>
              </VSpace>
            </template>
          </VEmpty>
        </Transition>
        <Transition v-else appear name="fade">
          <VEntityContainer>
            <ReplyListItem
              v-for="reply in replies"
              :key="reply.reply.metadata.name"
              :reply="reply"
              :comment="comment"
              :replies="replies"
            ></ReplyListItem>
          </VEntityContainer>
        </Transition>
      </div>
    </template>
  </VEntity>
</template>
