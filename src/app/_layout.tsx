import { Slot, Stack } from "expo-router";
import { useFonts, Ubuntu_700Bold, Ubuntu_500Medium, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu'
// import { Loading } from '@/components/loading';
import * as SplashScreen from "expo-splash-screen";
// import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StatusBar } from "react-native";

// mantém na tela de splashScreen do aplicativo, garantindo que as fonts carreguem
SplashScreen.preventAutoHideAsync()

export default function Layout() {

  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold, Ubuntu_500Medium, Ubuntu_400Regular
  })

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    SplashScreen.hideAsync()
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Slot />

      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack> */}
    </GestureHandlerRootView>
  )
}