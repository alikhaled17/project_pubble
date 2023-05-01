import { setActiveElemnts as setActiveElements } from "@/core/store/reducers/page-reducer/designed-page";
import { useEditor, useNode } from "@craftjs/core";
import { Edit, Menu, Trash } from "iconsax-react";
import React, { RefObject, useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 12px;
  line-height: 12px;
  svg {
    width: 15px;
    height: 15px;
  }
`;

const OptionItem = styled.span`
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export default function RenderNode({ render }) {
  const { id } = useNode();
  const dispatch = useDispatch();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom ? dom.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom as HTMLElement);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document.querySelector(".craftjs-renderer")?.addEventListener("scroll", scroll);

    return () => {
      try {
        document.querySelector(".craftjs-renderer")?.removeEventListener("scroll", scroll);
      } catch (error) {
        console.log("cannot get craftjs-renderer element");
      }
    };
  }, [scroll]);

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
            <IndicatorDiv
              ref={currentRef as RefObject<HTMLDivElement>}
              style={{
                left: getPos(dom as HTMLElement).left,
                top: getPos(dom as HTMLElement).top,
                zIndex: 9999,
                display: "flex",
                position: "fixed",
                padding: "0.5rem",
                color: "#ffffff",
                gap: "4px",
                alignItems: "center",
                backgroundColor: "#2680eb",
              }}
            >
              <small>{name}</small>
              {moveable ? (
                <OptionItem style={{ cursor: "move" }} ref={drag as unknown as RefObject<HTMLSpanElement>}>
                  <Menu />
                </OptionItem>
              ) : null}
              {deletable ? (
                <OptionItem
                  style={{ cursor: "pointer" }}
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                    console.log(id);
                  }}
                >
                  <Trash />
                </OptionItem>
              ) : null}
              {/* <OptionItem
                onMouseDown={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  dispatch(setActiveElements(id));
                }}
                style={{ cursor: "pointer" }}
              >
                <Edit />
              </OptionItem> */}
            </IndicatorDiv>,
            document.querySelector(".page-container") as HTMLElement
          )
        : null}
      {render}
    </>
  );
}
