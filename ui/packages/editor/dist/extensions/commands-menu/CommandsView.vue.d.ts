import { PropType } from "vue";
import { CommandMenuItemType } from "../../types";
declare function onKeyDown({ event }: { event: KeyboardEvent }): boolean;
declare const _default: import("vue").DefineComponent<
  import("vue").ExtractPropTypes<{
    items: {
      type: PropType<CommandMenuItemType[]>;
      required: true;
    };
    command: {
      type: PropType<(item: CommandMenuItemType) => void>;
      required: true;
    };
  }>,
  {
    onKeyDown: typeof onKeyDown;
  },
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
      items: {
        type: PropType<CommandMenuItemType[]>;
        required: true;
      };
      command: {
        type: PropType<(item: CommandMenuItemType) => void>;
        required: true;
      };
    }>
  > &
    Readonly<{}>,
  {},
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  true,
  {},
  HTMLDivElement
>;
export default _default;
