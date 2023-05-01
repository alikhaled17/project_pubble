/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
// components/SettingsPanel.js
import { AppState } from "@/core/interfaces/AppState";
import { useEditor } from "@craftjs/core";
import { Checkbox, InputAdornment, Slider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { useSelector } from "react-redux";
import { Button as MaterialButton } from "@material-ui/core";
import {
  AlignBottom,
  AlignHorizontally,
  AlignLeft,
  AlignRight,
  AlignTop,
  AlignVertically,
  ArrowDown,
  ArrowRight,
  TextalignLeft,
  TextalignRight,
} from "iconsax-react";
import hexToRgbA from "@/core/helpers/hex-to-rgba";
import ControlNumStyle from "./ControlNumStyle";

export function SettingsPanel(Props) {
  const { activeElement } = useSelector((state: AppState) => state.DesignedPage);

  const {
    selectedNodeId,
    actions: { setProp },
  } = useEditor((state) => ({
    selectedNodeId: state.events.selected,
  }));

  const { query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains([...selectedNodeId][0]),
  }));

  const [EditableElement, setEditableElement] = useState<any>(null);
  useEffect(() => {
    console.log(EditableElement);
    setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
  }, [selectedNodeId]);

  const changeStylePropValue = (e, propKey) => {
    setProp([...selectedNodeId][0], (props: any) => {
      props.style = { ...props.style, [propKey]: `${e.target.value}px` };
    });
    setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
  };

  useEffect(() => {
    console.log("eDitable", EditableElement);
  }, [EditableElement]);

  const TypeOfElement = () => {
    if (EditableElement && EditableElement.data.type.craft.displayName !== "Container") return "Normal";
    if (EditableElement && EditableElement.data.type.craft.displayName === "Container") {
      if (EditableElement.data.props.imageSource) return "Image";
      if (EditableElement.data.custom.displayName !== "App") return "Box";
      if (EditableElement.data.custom.displayName === "App") return "App";
    }
    return "";
  };

  return (
    <div>
      {TypeOfElement() === "Normal" && (
        <>
          <div className="d-flex justify-content-between align-items-center w-100 mt-3">
            <span className="fw-bold ">Background color</span>
            <input
              style={{
                display: "block",
                cursor: "pointer",
                width: "20px",
                height: "20px",
              }}
              type="color"
              value={EditableElement.data?.props?.style?.background || "#ffffff"}
              onChange={(e) => {
                setProp([...selectedNodeId][0], (props: any) => {
                  props.style = { ...props.style, background: e.target.value };
                });
                setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
              }}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center w-100 mt-3">
            <span className="fw-bold">Text color</span>
            <input
              style={{
                display: "block",
                cursor: "pointer",
                width: "20px",
                height: "20px",
              }}
              type="color"
              value={EditableElement.data?.props?.style?.color || "#000000"}
              onChange={(e) => {
                setProp([...selectedNodeId][0], (props: any) => {
                  props.style = { ...props.style, color: e.target.value };
                });
                setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
              }}
            />
          </div>
          <div>
            <span className="fw-bold mt-4">Padding</span>
            <div style={{ gap: "10%" }} className="d-flex justify-content-center w-100 mt-2 flex-wrap">
              {["Top", "Bottom", "Left", "Right"].map((k, i) => (
                <div style={{ width: "40%" }} key={i}>
                  {k}
                  <Slider
                    defaultValue={
                      EditableElement.data?.props?.style && EditableElement.data?.props?.style[`padding${k}`]
                        ? EditableElement.data?.props?.style[`padding${k}`].replace("px", "")
                        : 0
                    }
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    onChange={(e: any) => {
                      changeStylePropValue(e, `padding${k}`);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <small className="fw-bold">Margin</small>
            <div style={{ gap: "10%" }} className="d-flex justify-content-center w-100 mt-2 flex-wrap">
              {["Top", "Bottom", "Left", "Right"].map((k, i) => (
                <div style={{ width: "40%" }} key={i}>
                  {k}
                  <Slider
                    defaultValue={
                      EditableElement.data?.props?.style && EditableElement.data?.props?.style[`margin${k}`]
                        ? EditableElement.data?.props?.style[`margin${k}`].replace("px", "")
                        : 0
                    }
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    onChange={(e: any) => {
                      changeStylePropValue(e, `margin${k}`);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="width">
            <small className="fw-bold">Width</small>
            <br />
            <small className="d-flex align-items-center">
              <Checkbox
                checked={EditableElement.data?.props?.style?.width && EditableElement.data?.props?.style?.width === "100%"}
                onChange={(e) => {
                  setProp([...selectedNodeId][0], (props: any) => {
                    props.style = { ...props.style, width: `${e.target.checked ? "100%" : ""}` };
                  });
                  setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
                }}
              />
              <span className="fw-bold"> Full width</span>
            </small>
          </div>
        </>
      )}

      {TypeOfElement() === "Box" && (
        <>
          <div>
            <span className="fw-bold mt-3">Direction</span>
            <div className="direction d-flex justify-content-between">
              <MaterialButton
                style={{ width: "48%" }}
                variant={EditableElement.data.props.flexDirection === "row" ? "outlined" : "text"}
                onClick={() => {
                  setProp([...selectedNodeId][0], (props: any) => {
                    props.flexDirection = "row";
                  });
                  setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
                }}
              >
                <ArrowRight />
              </MaterialButton>
              <MaterialButton
                style={{ width: "48%" }}
                variant={EditableElement.data.props.flexDirection === "column" ? "outlined" : "text"}
                onClick={() => {
                  setProp([...selectedNodeId][0], (props: any) => {
                    props.flexDirection = "column";
                  });
                  setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
                }}
              >
                <ArrowDown />
              </MaterialButton>
            </div>
          </div>
          <div>
            <span className="fw-bold mt-3">Alignment</span>
            <div className="direction d-flex justify-content-between">
              <MaterialButton
                style={{ width: "25%", marginTop: "2px" }}
                variant={EditableElement.data.props.alignItems === "flex-start" ? "outlined" : "text"}
                onClick={() => {
                  setProp([...selectedNodeId][0], (props: any) => {
                    props.alignItems = "flex-start";
                  });
                  setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
                }}
              >
                <AlignTop />
              </MaterialButton>
              <MaterialButton
                style={{ width: "25%", marginTop: "2px" }}
                variant={EditableElement.data.props.alignItems === "center" ? "outlined" : "text"}
                onClick={() => {
                  setProp([...selectedNodeId][0], (props: any) => {
                    props.alignItems = "center";
                  });
                  setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
                }}
              >
                <AlignHorizontally />
              </MaterialButton>
              <MaterialButton
                style={{ width: "25%", marginTop: "2px" }}
                variant={EditableElement.data.props.alignItems === "flex-end" ? "outlined" : "text"}
                onClick={() => {
                  setProp([...selectedNodeId][0], (props: any) => {
                    props.alignItems = "flex-end";
                  });
                  setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
                }}
              >
                <AlignBottom />
              </MaterialButton>
            </div>
            <div className="direction d-flex justify-content-between">
              <MaterialButton
                style={{ width: "25%", marginTop: "2px" }}
                variant={EditableElement.data.props.justifyContent === "flex-start" ? "outlined" : "text"}
                onClick={() => {
                  setProp([...selectedNodeId][0], (props: any) => {
                    props.justifyContent = "flex-start";
                  });
                  setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
                }}
              >
                <AlignLeft />
              </MaterialButton>
              <MaterialButton
                style={{ width: "25%", marginTop: "2px" }}
                variant={EditableElement.data.props.justifyContent === "center" ? "outlined" : "text"}
                onClick={() => {
                  setProp([...selectedNodeId][0], (props: any) => {
                    props.justifyContent = "center";
                  });
                  setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
                }}
              >
                <AlignVertically />
              </MaterialButton>
              <MaterialButton
                style={{ width: "25%", marginTop: "2px" }}
                variant={EditableElement.data.props.justifyContent === "flex-end" ? "outlined" : "text"}
                onClick={() => {
                  setProp([...selectedNodeId][0], (props: any) => {
                    props.justifyContent = "flex-start";
                  });
                  setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
                }}
              >
                <AlignRight />
              </MaterialButton>
            </div>
          </div>
        </>
      )}

      {TypeOfElement() === "Image" && (
        <div>
          <small className="fw-bold">Image source link</small>
          <TextField
            size="small"
            fullWidth
            className="me-2"
            type="text"
            value={EditableElement.data?.props?.imageSource || ""}
            onChange={(e) => {
              setProp([...selectedNodeId][0], (props: any) => {
                props.imageSource = e.target.value;
              });
              setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
            }}
          />
        </div>
      )}
      {TypeOfElement() === "Image" || TypeOfElement() === "Box" ? (
        <>
          <div className="d-flex justify-content-between align-items-center w-100 mt-2">
            <span className="fw-bold mt-3">Background color</span>
            <input
              style={{
                display: "block",
                cursor: "pointer",
                width: "20px",
                height: "20px",
              }}
              type="color"
              value={
                EditableElement.data?.props?.background ? `rgba(${Object.values(EditableElement.data?.props?.background)})` : "#ffffff"
              }
              onChange={(e) => {
                setProp([...selectedNodeId][0], (props: any) => {
                  props.background = hexToRgbA(e.target.value);
                });
                setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
              }}
            />
          </div>
          <div className=" w-100 mt-2">
            <span className="fw-bold mt-3">Decoration</span>
            <div>
              <small className="fw-bold">- Shadow</small>
              <div style={{ width: "90%", margin: "0 auto" }}>
                <Slider
                  defaultValue={EditableElement.data?.props?.shadow || 0}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  onChange={(e: any) => {
                    setProp([...selectedNodeId][0], (props: any) => {
                      props.shadow = e.target.value || 0;
                    });
                    setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
                  }}
                />
              </div>
            </div>{" "}
            <div>
              <small className="fw-bold">- Radius</small>
              <div style={{ width: "90%", margin: "0 auto" }}>
                <Slider
                  defaultValue={EditableElement.data?.props?.radius || 0}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  onChange={(e: any) => {
                    setProp([...selectedNodeId][0], (props: any) => {
                      props.radius = e.target.value || 0;
                    });
                    setEditableElement(query.getNodes()[[...selectedNodeId][0]]);
                  }}
                />
              </div>
            </div>{" "}
          </div>
        </>
      ) : null}
    </div>
  );
}

export function GenerateSettings({ props }) {
  return (
    <>
      <SettingsPanel Props={props} />
    </>
  );
}
