import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import AuthStackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthStackRoutes/>
    </NavigationContainer>
  );
}