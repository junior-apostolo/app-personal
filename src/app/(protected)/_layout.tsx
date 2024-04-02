import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Role, useAuth } from "../../context/AuthContext";
import { Header } from "@/components/Header";
import { theme } from "@/theme";
import { View } from "react-native";

const TabLayout = () => {
  const { authState } = useAuth();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "index") {
              iconName = focused
                ? "home"
                : "home-outline";
            } else if (route.name === "admin") {
              iconName = focused ? "cog" : "cog-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.blue_600,
          tabBarInactiveTintColor: theme.colors.gray[200],
          tabBarStyle: {
            backgroundColor: theme.colors.white,
          },
          tabBarLabelStyle: {
            fontFamily: theme.fonts.regular,
          },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            header: () =>
              authState?.role === Role.ADMIN ? (
                <Header userName="Admin" />
              ) : (
                <Header userName="User" />
              ),
            tabBarLabel: "início",
            // tabBarIcon: ({ size, color, focused }) => (
            //   <Ionicons name="home" size={size} color={color} />
            // ),
          }}
          redirect={authState?.authenticated === null}
        />

        <Tabs.Screen
          name="news"
          options={{
            headerTitle: "Newsfeed",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
          redirect={authState?.role !== Role.USER}
        />
        <Tabs.Screen
          name="admin"
          options={{
            headerShown: false,
            // tabBarIcon: ({ size, color }) => (
            //   <Ionicons name="cog-outline" size={size} color={color} />
            // ),
          }}
          redirect={authState?.role !== Role.ADMIN}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default TabLayout;
