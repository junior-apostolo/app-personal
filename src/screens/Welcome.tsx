import { Button } from "@/components/button";
import { SafeAreaWrapper } from "@/components/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/routes/types";
import theme, { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function Welcome() {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();

  // const navigateToSignUp = () => {
  //   navigation.navigate("SignIn");
  // };

  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} justifyContent="center" mb="3">
        <Text textAlign="center" variant="textXl" fontWeight="700">
          Bem-vindo ao melhor app fitness
        </Text>
        <Box my="4" mx="10">
          <Button
            label="Iniciar jornada"
            onPress={navigateToSignIn}
          />
        </Box>
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
