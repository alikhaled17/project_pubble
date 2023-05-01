import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

import { Element, useEditor } from "@craftjs/core";
import { Tooltip } from "@mui/material";
import Button from "@/components/DesignedPageComponents/Button.component";

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export default function Toolbox() {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <Box px={2} py={2}>
      <div ref={(ref) => create(ref, <Button />)}>
        <MaterialButton draggable variant="contained">
          Button
        </MaterialButton>
      </div>
    </Box>
  );
}
