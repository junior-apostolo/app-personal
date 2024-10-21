import { StatusBar } from "expo-status-bar";
import Welcome from "./welcome";
import Intro from "./intro";
import { useEffect, useState } from "react";
import { Loading } from "@/components/loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { getData } from "@/utils/tokenSave";
import { TokenStorageAsync } from "@/constants/global";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");

      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (err) {
      console.log("Error @checkOnboarding: ", err);
    }
  };

  const checkToken = async () => {
    try {
      const tokenData: any = await getData(TokenStorageAsync);
      if (tokenData) {
        const { isFirstAccess, planExpirationDate } = tokenData;
        if (!isFirstAccess && new Date(planExpirationDate) < new Date()) {
          router.push("(tabs)");
        }
      }
    } catch (err) {
      console.log("Error @checkToken: ", err);
    }
  };
  const initialize = async () => {
    await AsyncStorage.clear()
    await checkOnboarding();
    await checkToken();
    setLoading(false); 
  };

  useEffect(() => {
    initialize(); 
  }, [viewedOnboarding]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {viewedOnboarding ? <Welcome /> : <Intro setViewedOnboarding={setViewedOnboarding} />}
    </>
  );
}
