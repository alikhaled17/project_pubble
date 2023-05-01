import React, { useCallback, useState } from "react";
import { Bezier, RulerPen, ArrowDown2, ArrowUp2, Convert3DCube } from "iconsax-react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { AppState } from "@/core/interfaces/AppState";
import { useDispatch, useSelector } from "react-redux";
import { Element, useEditor } from "@craftjs/core";
import uuid from "@/core/helpers/unique-Id-genrator";

import StylesContainer from "./CustomComponents.style";
import Text from "../DesignedPageComponents/Text.component";
import Container from "../DesignedPageComponents/Container.component";

type CustomComponentsProps = {};

const ToolsComponents = [
  {
    id: "NAVBAR",
    createdElemnt: (
      <Element
        is={Container}
        width="100%"
        height="auto"
        custom={{ displayName: `container-${uuid()}` }}
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="row"
        shadow={10}
        canvas
      >
        <Element
          is={Container}
          width="85%"
          height="auto"
          custom={{ displayName: `container-${uuid()}` }}
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="row"
          padding={["20", "20", "20", "20"]}
          canvas
        >
          <Element
            is={Container}
            width="25%"
            padding={["0", "20", "0", "0"]}
            height="auto"
            justifyContent="flex-start"
            alignItems="center"
            flexDirection="row"
            canvas
          >
            <Text text="CoFounderLab" style={{ fontWeight: "bold" }} />
          </Element>
          <Element is={Container} width="12%" height="auto" justifyContent="flex-start" alignItems="center" flexDirection="row" canvas>
            <Text text="Home" />
          </Element>
          <Element is={Container} width="12%" height="auto" justifyContent="flex-start" alignItems="center" flexDirection="row" canvas>
            <Text text="About" style={{ color: "#268095", textDecoration: "underline" }} />
          </Element>
          <Element is={Container} width="12%" height="auto" justifyContent="flex-start" alignItems="center" flexDirection="row" canvas>
            <Text text="Contact" />
          </Element>
        </Element>
        <Element
          is={Container}
          width="15%"
          height="auto"
          custom={{ displayName: `container-${uuid()}` }}
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="row"
          canvas
        >
          <Text text="Sign up" style={{ fontWeight: "bold" }} />
        </Element>
      </Element>
    ),
    name: "nav",
  },
];

function CustomComponents(props: CustomComponentsProps): JSX.Element {
  const [isActiveMenue, setisActiveMenue] = useState<boolean>(false);

  const toggleActiveMenue = () => {
    setisActiveMenue((old) => !old);
  };

  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <StylesContainer>
      <div className={`menu_head p-3 ${isActiveMenue ? "active" : ""}`}>
        <span className="menu_head--title">
          <Convert3DCube className="icon" variant={isActiveMenue ? "Bold" : "Outline"} color={isActiveMenue ? "orange" : "black"} />
          <small className="fw-bold">Custom Components</small>
        </span>
        {isActiveMenue ? <ArrowUp2 onClick={toggleActiveMenue} role="button" /> : <ArrowDown2 onClick={toggleActiveMenue} role="button" />}
      </div>
      <div className="menu_body">
        <div className="tool_list">
          {ToolsComponents.map((item, index) => (
            <div ref={(ref: any) => create(ref, item?.createdElemnt)} key={index} draggable className="tool_list--item ">
              <RulerPen />
              <small className="tool_list--item__name">{item.name}</small>
            </div>
          ))}
        </div>
      </div>
    </StylesContainer>
  );
}

export default CustomComponents;
