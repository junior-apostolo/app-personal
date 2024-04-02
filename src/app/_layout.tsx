import "@/theme/global.css";

import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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

// SplashScreen.preventAutoHideAsync();

// export default function LayoutRoot() {
//   const [fontsLoaded, fontError] = useFonts({
//     Poppins_400Regular,
//     Poppins_500Medium,
//     Poppins_700Bold,
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded || fontError) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded, fontError]);

//   if (!fontsLoaded && !fontError) {
//     return null;
//   }

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       <AuthProvider>
//         <BottomSheetProvider>
//           <StatusBar barStyle={"light-content"} />
//           <Slot />
//         </BottomSheetProvider>
//       </AuthProvider>
//     </GestureHandlerRootView>
//   );
// }

const StackLayout = () => {
  const { authState } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(protected)";

    if (!authState?.authenticated && inAuthGroup) {
      router.replace("/");
    } else if (authState?.authenticated === true) {
      router.replace("/(protected)");
    }
  }, [authState]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
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
          <StatusBar barStyle={'default'}/>
          <StackLayout />
        </BottomSheetProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
