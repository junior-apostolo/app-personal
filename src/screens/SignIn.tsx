import { SafeAreaWrapper } from "@/components/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/routes/types";
import theme, { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, View } from "react-native";

export default function SignIn() {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign in Screen</Text>
        <Button title="Navigate to Sign Up" onPress={navigateToSignUp}/>
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
