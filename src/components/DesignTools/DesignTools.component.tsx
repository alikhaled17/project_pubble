import Button from "@/components/DesignedPageComponents/Button.component";
import Container from "@/components/DesignedPageComponents/Container.component";
import Text from "@/components/DesignedPageComponents/Text.component";
import uuid from "@/core/helpers/unique-Id-genrator";
import { Element, useEditor } from "@craftjs/core";
import { ArrowDown2, ArrowUp2, Bezier, RulerPen } from "iconsax-react";
import { useState } from "react";
import StylesContainer from "./DesignTools.style";

type DesignToolsProps = {};

const ToolsComponents = [
  {
    id: "BUTTON",
    createdElemnt: (
      <Element
        is={Container}
        width="100%"
        height="auto"
        custom={{ displayName: `btn-${uuid()}` }}
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="row"
        canvas
      >
        <Button
          size="small"
          style={{
            outline: "none",
            borderWidth: 0,
            borderRadius: "5px",
            paddingRight: "10px",
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
            background: "#2680eb",
            color: "#ffffff",
          }}
        >
          New Button
        </Button>
      </Element>
    ),
    name: "Button",
  },
  {
    id: "TEXT",
    createdElemnt: (
      <Element
        is={Container}
        width="100%"
        height="auto"
        custom={{ displayName: `text-${uuid()}` }}
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="row"
        canvas
      >
        <Text text="New Text" />
      </Element>
    ),
    name: "Text",
  },
  {
    id: "IMAGE",
    createdElemnt: (
      <Container
        width="50%"
        height="auto"
        padding={["2px", "2px", "2px", "2px"]}
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="row"
        shadow={4}
        background={{ r: 0, g: 0, b: 0, a: 0.1 }}
        imageSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDjM-xaOJR7H_sCm578UGp0EGGbo3Dp80HcvqxWrvDQdbFDJ1FVt_Z3p9TLrN28fTCIs"
      />
    ),
    name: "Image",
  },
  {
    id: "CONTAINER",
    createdElemnt: (
      <Element
        is={Container}
        width="100%"
        height="auto"
        custom={{ displayName: `container-${uuid()}` }}
        justifyContent="flex-start"
        alignItems="center"
        canvas
      >
        <Text text="New Container!" />
      </Element>
    ),
    name: "Container",
  },
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
        canvas
      >
        <Element is={Container} width="20%" height="auto" justifyContent="flex-start" alignItems="center" flexDirection="row" canvas>
          <Text text="Home" />
        </Element>
        <Element is={Container} width="20%" height="auto" justifyContent="flex-start" alignItems="center" flexDirection="row" canvas>
          <Text text="About" />
        </Element>
        <Element is={Container} width="20%" height="auto" justifyContent="flex-start" alignItems="center" flexDirection="row" canvas>
          <Text text="Contact" />
        </Element>
      </Element>
    ),
    name: "nav",
  },
];

function DesignTools(props: DesignToolsProps): JSX.Element {
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
          <Bezier className="icon" variant={isActiveMenue ? "Bold" : "Outline"} color={isActiveMenue ? "orange" : "black"} />
          <small className="fw-bold">Tools</small>
        </span>
        {isActiveMenue ? <ArrowUp2 onClick={toggleActiveMenue} role="button" /> : <ArrowDown2 onClick={toggleActiveMenue} role="button" />}
      </div>
      <div className="menu_body">
        {isActiveMenue && (
          <div className="tool_list">
            {ToolsComponents.map((item, index) => (
              <div ref={(ref: any) => create(ref, item?.createdElemnt)} key={index} draggable className="tool_list--item ">
                <RulerPen />
                <small className="tool_list--item__name">{item.name}</small>
              </div>
            ))}
          </div>
        )}
      </div>
    </StylesContainer>
  );
}

export default DesignTools;
