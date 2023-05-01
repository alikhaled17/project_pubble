import React, { useEffect } from "react";
import { Element, useNode } from "@craftjs/core";
import { Button as MaterialButton } from "@material-ui/core";
import Text from "./Text.component";
import ButtonProps from "./button.json";
import { GenerateSettings } from "../ElementSetting/ElementSetting.component";

type DraggedButtonProps = {};

function Button({ style, children, ...props }: any) {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return (
    <button ref={connect} {...props} style={{ ...style }}>
      <Element is={Text} id="buttonText" />
    </button>
  );
}

const defaultBrops: any = {
  color: "brown",
  fontWeight: "bold",
  props: { borderRadius: "5px" },
  style: {},
};

Button.craft = {
  displayName: "Button",
  related: {
    toolbar: () => GenerateSettings(defaultBrops),
  },
};

export default Button;
