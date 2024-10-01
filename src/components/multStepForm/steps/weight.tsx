import { SelectList } from "@/components/selectList";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from "react-native";
import { useFormContext } from "react-hook-form";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "@/theme/colors";

const startWeight = 30;
const endWeight = 350;
const numberOfWeights = endWeight - startWeight + 1;
const weights = [...Array(numberOfWeights).keys()].map((i) => startWeight + i);

export function Weight() {
  const { register, setValue, watch } = useFormContext();
  const [selectWeight, setSelectWeight] = useState("");

  useEffect(() => {
    register("weight");
  }, [register]);

  useEffect(() => {
    setValue("weight", selectWeight);
  }, [selectWeight, setValue]);

  const onChangeValue = (text) => {
    // Permite apenas números e ponto
    const formattedValue = text.replace(/[^0-9,.]/g, "");
    setSelectWeight(formattedValue);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Define o comportamento do teclado
    >
      <View style={styles.containerWeight}>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              paddingBottom: 100,
              justifyContent: "flex-end",
              alignItems: "center",
            },
          ]}
        ></View>

        <View style={styles.textContainerWeight}>
          <Text style={styles.titleWeight}>Qual o seu peso?</Text>

          <Text style={styles.descriptionWeight}>
            Peso em kg. Não se preocupe, você sempre poderá alterá-lo mais tarde.
          </Text>
        </View>

        <View
          style={{
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
            width: 180,
          }}
        >
          <Text style={styles.selectedText}>KG</Text>
          <TextInput
            //keyboardType="numeric"
            maxLength={6}
            placeholderTextColor={colors.blue_700}
            placeholder="0.00"
            style={[styles.selectedText, { textAlign: "center", fontSize: 40 }]}
            value={selectWeight}
            onChangeText={onChangeValue} // Adiciona o filtro no input
          />
          <Text style={styles.arrow}>▲</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
