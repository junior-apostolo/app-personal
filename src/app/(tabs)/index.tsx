import { Link } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home() {

  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clearOnboarding}>
        <Text>Clear Onboarding</Text>
      </TouchableOpacity>
      <Text>Home</Text>
      <Link href="welcome">Voltar para Welcome!</Link>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})