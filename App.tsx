import Routes from "@/routes";
import theme, { Text } from "@/utils/theme";
import { ThemeProvider } from "@shopify/restyle";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
 