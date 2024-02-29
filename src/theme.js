import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const orangePrimary = {
  50: "#fff7e2",
  100: "#ffe9b5",
  200: "#ffdc86",
  300: "#ffcf58",
  400: "#fec43a",
  500: "#feba27",
  600: "#fdad23",
  700: "#fb9a22",
  800: "#fa8a20",
  900: "#f96b1d",
};

const errorOrangeRed = {
  50: "#faebe9",
  100: "#fed0c2",
  200: "#feb19b",
  300: "#ff9473",
  400: "#ff7c54",
  500: "#ff6739",
  600: "#f56135",
  700: "#e65a30",
  800: "#d8532c",
  900: "#bf4724",
};

const theme = createTheme({
  palette: {
    primary: orangePrimary,
    secondary: purple,
    error: errorOrangeRed,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightregular: 500,
    fontWeightmedium: 600,
    fontWeightBold: 700,
  },
});

export default theme;
