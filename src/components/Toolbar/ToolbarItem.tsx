/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable radix */
import { useNode } from "@craftjs/core";
import { Grid, Slider, RadioGroup, ToggleButtonGroup, Switch, Typography, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { ToolbarDropdown } from "./ToolbarDropdown";
import { ToolbarTextInput } from "./ToolbarTextInput";

const iOSBoxShadow = "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const SliderStyled = makeStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "5px 0",
    width: "100%",
  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -7,
    marginLeft: -7,
    "&:focus,&:hover,&$active": {
      boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 11px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);

export type ToolbarItemProps = {
  prefix?: string;
  label?: string;
  full?: boolean;
  propKey?: string;
  index?: number;
  children?: React.ReactNode;
  type: string;
  onChange?: (value: any) => any;
};
export function ToolbarItem({ full = false, propKey, type, onChange, index, ...props }: ToolbarItemProps) {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props[propKey],
  }));
  const value = Array.isArray(propValue) ? propValue[index] : propValue;

  return (
    <Grid item xs={full ? 12 : 6}>
      <div>
        {["text", "color", "bg", "number"].includes(type) ? (
          <ToolbarTextInput
            {...props}
            type={type}
            value={value}
            onChange={(value) => {
              setProp((props: any) => {
                if (Array.isArray(propValue)) {
                  props[propKey][index] = onChange ? onChange(value) : value;
                } else {
                  props[propKey] = onChange ? onChange(value) : value;
                }
              }, 500);
            }}
          />
        ) : type === "slider" ? (
          <>
            {props.label ? (
              <h4
                style={{
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  color: "rgb(128,128,128)",
                }}
              >
                {props.label}
              </h4>
            ) : null}
            {/* @ts-ignore */}
            <SliderStyled
              value={parseInt(value) || 0}
              onChange={
                ((_, value: number) => {
                  setProp((props: any) => {
                    if (Array.isArray(propValue)) {
                      props[propKey][index] = onChange ? onChange(value) : value;
                    } else {
                      props[propKey] = onChange ? onChange(value) : value;
                    }
                  }, 1000);
                }) as any
              }
            />
          </>
        ) : type === "radio" ? (
          <>
            {props.label ? (
              <h4
                style={{
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  color: "rgb(128,128,128)",
                }}
              >
                {props.label}
              </h4>
            ) : null}
            <RadioGroup
              value={value || "default"}
              onChange={(e) => {
                const { value } = e.target;
                setProp((props: any) => {
                  if (value === "default") {
                    delete props[propKey];
                  } else {
                    props[propKey] = onChange ? onChange(value) : value;
                  }
                });
              }}
            >
              {props.children}
            </RadioGroup>
          </>
        ) : type === "select" ? (
          <ToolbarDropdown
            value={value || ""}
            onChange={(value) => setProp((props: any) => (props[propKey] = onChange ? onChange(value) : value))}
            {...props}
          />
        ) : type === "ToggleButtonGroup" ? (
          <>
            {props.label && (
              <h4
                style={{
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  color: "rgb(128,128,128)",
                }}
              >
                {props.label}
              </h4>
            )}
            <ToggleButtonGroup
              color="primary"
              value={value || "default"}
              exclusive
              onChange={(_e, value) => {
                if (value) {
                  setProp((props: any) => {
                    if (value === "default") {
                      delete props[propKey];
                    } else {
                      props[propKey] = onChange ? onChange(value) : value;
                    }
                  });
                }
              }}
            >
              {props.children}
            </ToggleButtonGroup>
          </>
        ) : type === "switch" ? (
          <Box display="flex" m={2} justifyContent="space-between">
            <Typography>{props.label}</Typography>
            <Switch
              value={value || false}
              onChange={(_e, value) => {
                if (typeof value === "boolean") {
                  setProp((props: any) => {
                    if (value === false) {
                      delete props[propKey];
                    } else {
                      props[propKey] = onChange ? onChange(value) : value;
                    }
                  });
                }
              }}
              color="primary"
            />
          </Box>
        ) : null}
      </div>
    </Grid>
  );
}
