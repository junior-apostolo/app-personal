import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { SafeAreaWrapper } from "@/components/safe-area-wrapper";
import { useAuth } from "@/context/AuthContext";
import { AuthScreenNavigationType, SignInNavigationType } from "@/routes/types";
import theme, { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, View } from "react-native";

export default function SignIn() {
  const { isAdmin, user } = useAuth();
  const navigation = useNavigation<SignInNavigationType>();

  const handleLogin = () => {
    isAdmin
      ? navigation.navigate("AdminStack", { screen: "HomeAdmin" })
      : navigation.navigate("AppStack", {
          screen: "Root",
          params: { screen: "Home" },
        });
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="5.5" mt="13">
        <Text mb="6">Sign in Screen</Text>

        <Input label="E-mail" placeholder="E-mail" />
        <Input label="Senha" placeholder="Senha" />
        <Pressable>
          <Text color="primary" textAlign="right">
            Esqueci minha senha
          </Text>
        </Pressable>
        <Box mb="5.5" />

        <Button label="Entrar" onPress={handleLogin} uppercase />
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
