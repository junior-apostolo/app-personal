import { View, Text } from 'react-native'
import { StyleSheet } from "react-native";


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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