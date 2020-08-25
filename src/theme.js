import { createMuiTheme } from "@material-ui/core/styles";
import muiShadows from "@material-ui/core/styles/shadows";

const shadows = [...muiShadows];
shadows[1] = `0px 1px 3px 0px #e6e6e6`;

const textSecondary = "rgba(0, 0, 0, 0.54)";
const primary = "rgb(139, 195, 74)";

export default createMuiTheme({
  typography: {
    button: {
      textTransform: "capitalize",
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
    MuiTextField: {
      fullWidth: true,
      variant: "outlined",
    },
    MuiMenu: {
      getContentAnchorEl: null,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left",
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "left",
      },
    },
  },
  shadows,
  overrides: {
    MuiButton: {
      containedPrimary: {
        "&:hover": {
          color: "white",
        },
      },
    },
    MuiDialog: {
      container: {
        width: "100%",
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 12px) scale(1)",
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "10px 14px",
      },
    },
    MuiTypography: {
      h1: {
        fontSize: 32,
        lineHeight: "normal",
        letterSpacing: -0.8,
      },
      h2: {
        fontSize: 22,
        lineHeight: "normal",
        letterSpacing: -0.2,
      },
      h3: {
        fontSize: 18,
        lineHeight: "24px",
      },
      h4: {
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "normal",
        letterSpacing: 0.8,
        textTransform: "uppercase",
        color: textSecondary,
      },
    },
    MuiExpansionPanel: {
      root: {
        borderRadius: 4,
        "&:before": {
          content: "none",
        },
        "&$expanded": {
          margin: 0,
        },
      },
    },
    MuiExpansionPanelSummary: {
      expandIcon: {
        order: -1,
        transform: "rotate(-90deg)",
        position: "relative",
        right: "auto",
        top: "auto",
        "&$expanded": {
          transform: "rotate(0deg)",
        },
      },
      root: {
        padding: 0,
        minHeight: 48,
        userSelect: "auto",
        "&$expanded": {
          minHeight: 48,
        },
        "&$focused": {
          backgroundColor: "transparent",
          "& > $expandIcon": {
            // backgroundColor: color.secondaryHover
          },
        },
      },
      content: {
        margin: 0,
        "&$expanded": {
          margin: 0,
        },
        "& > :last-child": {
          paddingRight: "inherit",
        },
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        flexDirection: "column",
        padding: "0px 16px 12px",
      },
    },
    MuiExpansionPanelActions: {
      root: {
        padding: "0px 16px 12px",
      },
    },
  },
  palette: {
    primary: {
      main: primary,
    },
  },
});
