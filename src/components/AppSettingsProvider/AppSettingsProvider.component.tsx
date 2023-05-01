import * as locales from "@mui/material/locale";
import React from "react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import styled, { ThemeProvider as StyledThemeProvider } from "styled-components";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

import { prefixer } from "stylis";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/core/interfaces/AppState";
import { AppDispatch } from "@/core/store/store";
import MUITheme from "@/core/theme-config/MUITheme";
import { StyledTheme } from "@/core/theme-config/StyledTheme";

// Change MUI components language
const muiEnTheme = createTheme(MUITheme);
// Create ltr cache
const cacheLtr = createCache({
  key: "muiltr",
});

type Props = {
  children: React.ReactNode;
};

function AppSettingsProvider({ children }: Props): JSX.Element {
  // const { appSettings } = useSelector((state: AppState) => state.AppSettings);
  const dispatch = useDispatch<AppDispatch>();

  const Container = styled.main`
    direction: ${() => "ltr"};
    text-align: ${() => "left"};
  `;

  document.getElementsByTagName("html")[0].setAttribute("lang", "en");
  document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");

  return (
    <Container>
      <CacheProvider value={cacheLtr}>
        <MUIThemeProvider theme={muiEnTheme}>
          <StyledThemeProvider theme={StyledTheme}>{children}</StyledThemeProvider>
        </MUIThemeProvider>
      </CacheProvider>
    </Container>
  );
}

export default AppSettingsProvider;
