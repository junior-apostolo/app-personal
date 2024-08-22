import { Slot, Stack } from "expo-router";
import { useFonts, Ubuntu_700Bold, Ubuntu_500Medium, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu'
// import { Loading } from '@/components/loading';
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StatusBar } from "react-native";
import { Loading } from "@/components/loading";

// mantém na tela de splashScreen do aplicativo, garantindo que as fonts carreguem
// SplashScreen.preventAutoHideAsync()

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
    return <Loading/>
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Slot />
    </GestureHandlerRootView>
  )
}
