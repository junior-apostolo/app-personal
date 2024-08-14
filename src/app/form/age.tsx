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

const startAge = 18;
const endAge = 70;
const numberOfAges = endAge - startAge + 1;
const ages = [...Array(numberOfAges).keys()].map((i) => startAge + i);

export default function Age() {
  const [selectAge, setSelectAge] = useState(ages[0]);

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
        <Text style={styles.title}>Qual a sua idade?</Text>

        <Text style={styles.description}>
          Isso nos ajuda a criar seu plano de personalização
        </Text>
      </View>

      <SelectList data={ages} setState={setSelectAge} />
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
    paddingHorizontal: "15%",
    gap: 10,
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
