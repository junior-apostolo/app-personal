import { SelectList } from "@/components/selectList";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from "react-native";
import { useFormContext } from "react-hook-form";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "@/theme/colors";
import { PageRegister } from "@/components/pageRegister";

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

  const onChangeValue = (text: string) => {
    // Permite apenas números e ponto
    const formattedValue = text.replace(/[^0-9,.]/g, "");
    setSelectWeight(formattedValue);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Define o comportamento do teclado
    >
      <PageRegister
        title="Qual o seu peso?"
        description="Peso em kg. Não se preocupe, você sempre poderá alterá-lo mais tarde."
      >
        <View style={{height: "90%"}}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "auto",
              marginBottom: "auto",
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
      </PageRegister>
    </KeyboardAvoidingView>
  );
}
