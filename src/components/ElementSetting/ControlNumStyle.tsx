import { InputAdornment, TextField } from "@mui/material";
import React from "react";

function ControlNumStyle({ val, label, propKey, element, onChange }) {
  return (
    <TextField
      sx={{ width: "100%", marginTop: "4px" }}
      type="number"
      size="small"
      value={val}
      onChange={(e) => onChange(e, propKey)}
      InputProps={{
        startAdornment: <InputAdornment position="start">{label}</InputAdornment>,
      }}
    />
  );
}

export default ControlNumStyle;
