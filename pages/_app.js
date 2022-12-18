import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/fontface.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
