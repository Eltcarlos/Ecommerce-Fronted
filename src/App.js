import { useSelector } from "react-redux";
import RouterPages from "./router/RouterPage";
import { useMemo } from "react";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import ToastContainer from "./components/validation/ToastContainer";

const App = () => {
  const mode = useSelector((state) => state.globalState.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)));
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <RouterPages />
    </ThemeProvider>
  );
};

export default App;
