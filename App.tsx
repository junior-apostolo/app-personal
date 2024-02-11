import { AuthProvider } from "@/context/AuthContext";
import Routes from "@/routes";
import theme, { Text } from "@/utils/theme";
import { ThemeProvider } from "@shopify/restyle";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}
