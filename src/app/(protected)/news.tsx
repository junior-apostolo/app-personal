import { View, StyleSheet, Text } from "react-native";

import {theme} from '@/theme'

export default function News() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>News</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fonts.regular
  },
});
