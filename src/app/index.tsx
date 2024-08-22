import { StatusBar } from "expo-status-bar";
import Welcome from "./welcome";
import Age from "./form/age";
import Weight from "./form/weight";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Welcome />
      {/* <Age /> */}
      {/* <Weight/> */}
    </>
  );
}
