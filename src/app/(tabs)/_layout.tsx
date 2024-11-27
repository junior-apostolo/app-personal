import { BarbellNormal, BarbellSelected, CalendarIcon, CalendarSelectedIcon, HomeSelected, Home, Logo, UserIcon, UserSelected } from '@/assets/icon'; // Supondo que você tenha o logo como um ícone
import { theme } from '@/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.white, 
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: theme.colors.tabBar, 
          borderColor: theme.colors.blue_750, 
          elevation: 0, 
          shadowOpacity: 0, 
          borderTopWidth: 0, 
        },
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              {focused ? <Home /> : <HomeSelected />}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="checkIn"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              {focused ? <BarbellSelected /> : <BarbellNormal />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="logo" 
        options={{
          tabBarButton: () => (
            <Logo />
          ), 
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              {focused ? <CalendarSelectedIcon /> : <CalendarIcon />}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="workout"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              {focused ? <UserSelected /> : <UserIcon />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="exercise/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          href: null,

        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
  },
  activeIcon: {
    borderBottomColor: theme.colors.white,
    borderBottomWidth: 1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60, // Ajuste o tamanho do logo conforme necessário
    height: 60,
    marginBottom: 10,
  },
});
