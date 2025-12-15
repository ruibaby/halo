import { PropType } from "vue";
import { Editor } from "../../tiptap";
import { PluginKey } from "../../tiptap/pm";
import { SearchAndReplacePluginState } from "./SearchAndReplacePlugin";
declare const _default: import("vue").DefineComponent<
  import("vue").ExtractPropTypes<{
    editor: {
      type: PropType<Editor>;
      required: true;
    };
    pluginKey: {
      type: PropType<PluginKey<SearchAndReplacePluginState>>;
      required: true;
    };
    visible: {
      type: BooleanConstructor;
      default: boolean;
    };
  }>,
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {},
  string,
  import("vue").PublicProps,
  Readonly<
    import("vue").ExtractPropTypes<{
      editor: {
        type: PropType<Editor>;
        required: true;
      };
      pluginKey: {
        type: PropType<PluginKey<SearchAndReplacePluginState>>;
        required: true;
      };
      visible: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    visible: boolean;
  },
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  true,
  {
    searchInput: HTMLInputElement;
  },
  any
>;
export default _default;
