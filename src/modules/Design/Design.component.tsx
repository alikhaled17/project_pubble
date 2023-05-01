import { Button as MaterialButton, Tooltip } from "@material-ui/core";
import React from "react";

import { Element, Frame, useEditor } from "@craftjs/core";

import Container from "@/components/DesignedPageComponents/Container.component";
import useOnInit from "@/core/hooks/useOnInit";

import { ArrowForwardSquare, BackSquare } from "iconsax-react";
import Styles from "./Design.style";

function Example() {
  const { hoveredNodeId } = useEditor((state) => ({
    hoveredNodeId: state.events.hovered,
  }));

  return <div>The ID of the node currently being hovered is: {hoveredNodeId}</div>;
}

function Viewport(): JSX.Element {
  const {
    enabled,
    connectors,
    actions: { setOptions, deserialize, history },
    query,
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const { active, related, canUndo, canRedo } = useEditor((state, query) => {
    // TODO: handle multiple selected elements
    const currentlySelectedNodeId = query.getEvent("selected").first();
    return {
      active: currentlySelectedNodeId,
      related: currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    };
  });

  const saveChangesHandler = () => {
    const allNodes = query.getSerializedNodes();
    localStorage.setItem("designed_page", JSON.stringify(allNodes));
  };

  useOnInit(() => {
    const loadedData = localStorage.getItem("designed_page");
    loadedData && deserialize(JSON.parse(loadedData));
  });

  return (
    <Styles>
      <div className="grid_area">
        <div className="dropping_area">
          <div className="primary_card dropping_area--container">
            <div className="page-container">
              <div className="craftjs-renderer">
                <Frame>
                  <Element
                    canvas
                    is={Container}
                    width="100%"
                    height="100vh"
                    background={{ r: 255, g: 255, b: 255, a: 1 }}
                    padding={["0", "0", "0", "0"]}
                    custom={{ displayName: "App" }}
                  >
                    {" "}
                  </Element>
                </Frame>
              </div>
            </div>
          </div>
        </div>
        <div className="dropping_sidebar">
          <div className="primary_card ">
            <div style={{ backgroundColor: "#00000020", padding: "10px", marginBottom: "20px", borderRadius: "8px" }}>
              <h6 className="fw-bold">Control panel</h6>
              <div style={{ display: "flex", justifyContent: "flex-start", padding: "4px", gap: "4px" }}>
                <Tooltip title="Undo" placement="top">
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    disabled={!canUndo}
                    onClick={() => canUndo && history.undo()}
                  >
                    <BackSquare />
                  </button>
                </Tooltip>
                <Tooltip title="Redo" placement="top">
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    disabled={!canRedo}
                    onClick={() => canRedo && history.redo()}
                  >
                    <ArrowForwardSquare />
                  </button>
                </Tooltip>
                <Tooltip className="flex-grow-1" title="Save page design" placement="top">
                  <MaterialButton
                    variant="contained"
                    style={{ backgroundColor: "#2680EB", color: "#fff", textTransform: "none" }}
                    onClick={saveChangesHandler}
                  >
                    Finish editing
                  </MaterialButton>
                </Tooltip>
              </div>
            </div>
            {active && related.toolbar && React.createElement(related.toolbar)}
          </div>
        </div>
      </div>
    </Styles>
  );
}

export default Viewport;
