import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import ContentEditable from "react-contenteditable";
import { GenerateSettings } from "../ElementSetting/ElementSetting.component";

export type TextProps = {
  text: string;
  style: any;
};

export default function Text({ text, style }: Partial<TextProps>) {
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <>
      <ContentEditable
        innerRef={connect}
        style={{ ...style }}
        html={text as string} // innerHTML of the editable div
        disabled={!enabled}
        onChange={(e: any) => {
          // eslint-disable-next-line no-param-reassign
          setProp((prop: any) => (prop.text = e.target.value), 500);
        }} // use true to disable editing
      />
    </>
  );
}

Text.craft = {
  displayName: "Text",
  related: {
    toolbar: () => <GenerateSettings props={{ text: "Text", color: "red", fontSize: "12px" }} />,
  },
  props: {
    text: "Text",
  },
};
