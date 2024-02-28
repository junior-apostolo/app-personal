import { SafeAreaWrapper } from "@/components/safe-area-wrapper";
import { AdminScreenNavigationType } from "@/routes/types";
import theme, { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";

export default function SignUp() {
  const navigation = useNavigation<AdminScreenNavigationType<"Register">>();

  const navigateToSignIn = () => {
    navigation.navigate("HomeAdmin");
  };
  
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign Up Screen</Text>
        <Button title="Navigate to Sign In" onPress={navigateToSignIn} />
      </Box>
    </SafeAreaWrapper>
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
