import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/fontface.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { AuthProvider } from "../contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  //reactQuery client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
