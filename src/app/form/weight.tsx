import { SelectList } from "@/components/selectList";
import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const startWeight = 30;
const endWeight = 350;
const numberOfWeights = endWeight - startWeight + 1;
const weights = [...Array(numberOfWeights).keys()].map((i) => startWeight + i);

export default function Weight() {
  const [selectWeight, setSelectWeight] = useState(weights[0]);

  return (
    <View style={styles.container}>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            paddingBottom: 100,
            justifyContent: "flex-end",
            alignItems: "center",
          },
        ]}
      >
        <TouchableOpacity style={styles.button}>
          <AntDesign name="arrowright" size={32} color={theme.colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Qual o seu peso?</Text>

        <Text style={styles.description}>
          Peso em kg. Não se preocupe, você sempre poderá alterá-lo mais tarde.
        </Text>
      </View>

      <SelectList data={weights} setState={setSelectWeight} info="Kg"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_color,
  },
  textContainer: {
    marginTop: "18%",
    gap: 10,
    paddingHorizontal: "15%",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: theme.fontFamily.bold,
    color: colors.white,
  },
  description: {
    fontSize: 18,
    fontFamily: theme.fontFamily.regular,
    color: colors.white,
  },
  button: {
    backgroundColor: theme.colors.blue_700,
    borderRadius: 100,
    padding: 20,
  },
});
