import { Tabs } from "expo-router";
import { Foundation, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "@/theme";
import React from "react";
import { Header } from "@/components/Header";

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        header: () => <Header userName="User" />,
        tabBarActiveTintColor: theme.colors.blue_600,
        tabBarInactiveTintColor: theme.colors.gray[200],
        tabBarStyle: {
          backgroundColor: theme.colors.white,
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
        },
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
        name="settings"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="settings" />
          ),
        }}
      />
    </Tabs>
  );
}