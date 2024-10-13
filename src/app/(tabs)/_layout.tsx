import { BarbellNormal, BarbellSelected, CalendarIcon, CalendarSelectedIcon, HomeSelected, Home, Logo, UserIcon, UserSelected } from '@/assets/icon'; // Supondo que você tenha o logo como um ícone
import { theme } from '@/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.white, // Cor das guias ativas
        headerShown: false, // Ocultar header
        tabBarStyle: {
          backgroundColor: theme.colors.tabBar, // Fundo da Tab Bar
          borderColor: theme.colors.blue_750, // Cor da borda
          elevation: 0, // Remove sombra no Android
          shadowOpacity: 0, // Remove sombra no iOS
          borderTopWidth: 0, // Remove a linha superior
        },
        tabBarLabel: () => null, // Remove o nome do componente embaixo do ícone
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

      {/* Ícone de logo sem funcionalidade */}

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
        name="logo" // Nome que não interfere na navegação
        options={{
          tabBarButton: () => (
            <Logo />
          ), // Apenas exibe o logo, sem funcionalidade
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

      {/* Ocultando as abas desnecessárias */}
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
        name="exercise"
        options={{
          tabBarButton: () => null, // Oculta a aba 'training'
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          tabBarButton: () => null, // Oculta a aba 'training'
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
