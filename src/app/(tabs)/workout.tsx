import { View, Text } from 'react-native'
import { StyleSheet } from "react-native";


export default function Workout() {
  return (
    <View style={styles.container}>
      <Text>Workout</Text>
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