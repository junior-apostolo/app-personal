import { Link } from 'expo-router';
import { View, Text } from 'react-native'
import { StyleSheet } from "react-native";


export function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>

        <Link href="(tabs)">Ir para Tabs</Link>

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