import { Tabs } from "expo-router";
import { Foundation, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "@/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.blue_600,
        tabBarInactiveTintColor: theme.colors.gray[200],
        tabBarStyle: {
          backgroundColor: theme.colors.white_200,
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation size={size} color={color} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="fitness-center" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 size={size} color={color} name="user" />
          ),
        }}
      />
    </Tabs>
  );
}
