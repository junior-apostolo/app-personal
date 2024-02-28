import { Button } from "@/components/button";
import theme, { Text } from "@/utils/theme";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function HomeAdmin() {
  return (
      <View style={styles.container}>
        <Text variant="text3Xl">Home Admin</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
