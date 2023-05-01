import { useNode } from "@craftjs/core";
import { Accordion, AccordionDetails, AccordionSummary, Stack, Box, Typography } from "@mui/material";
import React from "react";

export function ToolbarSection({ title, props, summary, children }: any) {
  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res: any, key: any) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));
  return (
    <Accordion defaultExpanded>
      <AccordionSummary>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography>{title}</Typography>
          <Typography>
            {summary &&
              props &&
              summary(
                props.reduce((acc: any, key: any) => {
                  acc[key] = nodeProps[key];
                  return acc;
                }, {})
              )}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Stack>{children}</Stack>
      </AccordionDetails>
    </Accordion>
  );
}
