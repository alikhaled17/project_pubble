import { StyledTheme } from "./StyledTheme";

const MUITheme = {
  spacing: [0, 2, 3, 5, 8, 12, 20],
  palette: {
    primary: {
      light: StyledTheme.colors.light.primaryLight,
      main: StyledTheme.colors.light.primary,
    },
    // secondary: {
    //   main: '#ddd'
    // }
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Cairo"].join(","),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        // root: ({ ownerState }: any) => ({
        //   ...(ownerState.variant === "standard" &&
        //     ownerState.color === "primary" && {
        //       backgroundColor: "#F5F8FA",
        //       color: StyledTheme.colors.light.primary,
        //       padding: "10px 10px 0 10px",
        //       borderRadius: "8px",
        //     }),
        //   ...(ownerState.variant === "standard" &&
        //     ownerState.color === "error" && {
        //       backgroundColor: "#ffebeb",
        //       color: "#7c0202",
        //       padding: "10px 10px 0 10px",
        //       borderRadius: "8px",
        //     }),
        // }),
      },
    },
    MuiButton: {
      styleOverrides: {
        // root: ({ ownerState }: any) => ({
        //   ...(ownerState.variant === "outlined" &&
        //     ownerState.color === "primary" && {
        //       backgroundColor: "#92babe",
        //       color: "#026C7C",
        //     }),
        //   ...(ownerState.variant === "text" &&
        //     ownerState.color === "primary" && {
        //       backgroundColor: "#dbe6e7",
        //       color: "#026C7C",
        //     }),
        //   ...(ownerState.variant === "text" &&
        //     ownerState.color === "error" && {
        //       backgroundColor: "#e4c8c8",
        //       color: "#bb0707",
        //     }),
        //   ...(ownerState.variant === "text" &&
        //     ownerState.color === "secondary" && {
        //       backgroundColor: "#fff",
        //       color: "#000",
        //     }),
        // }),
      },
    },
  },
};

export default MUITheme;
