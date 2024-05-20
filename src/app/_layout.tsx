import "@/theme/global.css";

import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useCallback, useEffect } from "react";
import { BottomSheetProvider } from "@/context/MenuSheetRefContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

const StackLayout = () => {
  const { authState } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(protected)";
    if (!authState?.authenticated && inAuthGroup) {
      router.replace("/welcome/");
    } else if (authState?.authenticated === true) {
      router.replace("/(protected)/(admin)/home");
    }
  }, [authState]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="welcome/index"
        options={{ headerShown: false, headerTitle: "Onboarding" }}
      />
      <Stack.Screen
        name="(protected)/(admin)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(protected)/(views)/(register)/exercises/index"
        options={{ headerShown: true, headerTitle: "Cadastro de Exercicio" }}
      />
      <Stack.Screen
        name="(protected)/(views)/(register)/training/index"
        options={{ headerShown: true, headerTitle: "Cadastro de treino" }}
      />
       <Stack.Screen
        name="(protected)/(views)/(register)/trainingExercise/index"
        options={{ headerShown: true, headerTitle: "Cadastro de treino com exercicio" }}
      />
      <Stack.Screen
        name="(protected)/(views)/(register)/users/index"
        options={{ headerShown: true, headerTitle: "Cadastro de Usuarios" }}
      />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayoutNav() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <BottomSheetProvider>
          <StatusBar barStyle={"default"} />
          <StackLayout />
        </BottomSheetProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
