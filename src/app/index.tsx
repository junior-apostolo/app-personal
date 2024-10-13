
import { StatusBar } from "expo-status-bar";
import Welcome from "./welcome";
// import {Age} from "../components/multStepForm/steps/age";
// import Weight from "../components/multStepForm/steps/weight";
import Intro from "./intro";
import { useEffect, useState } from "react";
import { Loading } from "@/components/loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProgressBar } from "@/components/progressBar";
import { View } from "react-native-animatable";
import Form from "./form";

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {/* <Form/> */}
       <Welcome /> 
      {/* <Age /> */}
      {/* <Weight/> */}
      {/* <View style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      }}>
        <ProgressBar currentStep={3} steps={10} height={20} />
      </View> */}
      {/* {loading ? <Loading /> : viewedOnboarding ? <Welcome /> : <Intro />} */}
    </>
  );
}