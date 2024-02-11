import { SafeAreaWrapper } from "@/components/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/routes/types";
import theme, { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";

export default function Welcome() {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Welcome Screen</Text>
        <Button title="Navigate to Sign Up" onPress={navigateToSignUp}/>
        <Button title="Navigate to Sign In" onPress={navigateToSignIn}/>
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
