import React, { useContext, useEffect, useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { colors } from "@/theme/colors";
import { PageRegister } from "@/components/pageRegister";
import { FormContext } from "@/contexts/FormContext";
import { styles } from "./styles";

export function Weight() {
  const [selectWeight, setSelectWeight] = useState("");
  const { updateFormData } = useContext(FormContext);

  useEffect(() => {
    if (selectWeight) {
      updateFormData(
        {
          question: "Qual o seu peso?",
          answer: `${selectWeight} kg`,
        },
        2 
      );
    }
  }, [selectWeight]);

  const onChangeValue = (text: string) => {
    const formattedValue = text.replace(/[^0-9,.]/g, "");
    setSelectWeight(formattedValue);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <PageRegister
        title="Qual o seu peso?"
        description="Peso em kg. Não se preocupe, você sempre poderá alterá-lo mais tarde."
      >
        <View style={{ height: "90%" }}>
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
              maxLength={6}
              placeholderTextColor={colors.blue_700}
              placeholder="0.00"
              style={[styles.selectedText, { textAlign: "center", fontSize: 40 }]}
              value={selectWeight}
              onChangeText={onChangeValue}
            />
            <Text style={styles.arrow}>▲</Text>
          </View>
        </View>
      </PageRegister>
    </KeyboardAvoidingView>
  );
}
