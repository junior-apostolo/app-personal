import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { AdminStackParamList } from "./types";
import HomeAdmin from "@/screens/Admin/HomeAdmin";
import SignUp from "@/screens/Admin/SignUp";

const Tab = createBottomTabNavigator<AdminStackParamList>();

export default function AdminRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeAdmin"
        component={HomeAdmin}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={SignUp}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
