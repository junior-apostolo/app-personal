import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { View, Text, TextInput, ScrollView } from "react-native";
import { styles } from "./styles";
import { ButtonDay } from "@/components/buttonDay";
import { ButtonSelectMulti } from "@/components/buttonSelect";
import { PageRegister } from "@/components/pageRegister";
import { colors } from "@/theme/colors";

// Lista de níveis de atividade
const activityLevels = [
  "Iniciante", // Pouco ou nenhum exercício
  "Intermediário", // Exercício leve, 1-3 dias/semana
  "Avançado", // Exercício moderado, 3-5 dias/semana
];

export function DaysHours() {
  const { register, setValue } = useFormContext();
  const [selectedActivityLevel, setSelectedActivityLevel] = useState(activityLevels[0]);
  const [isFocus, setIsFocus] = useState(false);
  const [other, setOther] = useState("");

  useEffect(() => {
    register("activityLevel");
    setValue("activityLevel", selectedActivityLevel);
  }, [register, selectedActivityLevel, setValue]);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);

  return (
    <PageRegister
      title="Dias e Horas"
      description="Escolha o dia e quantas horas pretende treinar."
      titleStyle={{ textAlign: "center" }}
      containerStyle={{ marginTop: 40 }}
    >
      <ScrollView style={{ marginTop: 20, width: "70%" }}>
        <View style={styles.row}>
          <Text style={[styles.subtitle, { marginRight: 10 }]}>Dias:</Text>
          <ButtonDay text="Segunda" isSelect onPress={() => {}} />
          <ButtonDay text="Terça" isSelect onPress={() => {}} />
        </View>

        <View style={[styles.row, { justifyContent: "center" }]}>
          {["Quarta", "Quinta", "Sexta"].map((day) => (
            <ButtonDay key={day} text={day} onPress={() => {}} />
          ))}
        </View>

        <View style={[styles.row, { justifyContent: "center" }]}>
          <ButtonDay text="Sábado" onPress={() => {}} />
          <ButtonDay text="Domingo" isSelect onPress={() => {}} />
        </View>

        <View style={styles.session}>
          <Text style={[styles.subtitle, { marginBottom: 15 }]}>Tempo Disponível:</Text>
          <View style={[styles.row, { justifyContent: "center", width: "100%" }]}>
            {["30 Min", "1 Hora", "1h 30 Min"].map((time) => (
              <ButtonDay key={time} text={time} onPress={() => {}} />
            ))}
          </View>

          <View style={[styles.row, { justifyContent: "center", width: "100%" }]}>
            <Text style={{ fontSize: 20, color: colors.white, marginRight: 20 }}>Outros:</Text>
            <TextInput
              style={[
                styles.textInput,
                isFocus && { borderBottomColor: colors.green_100 },
                other && { borderBottomColor: colors.green_100 },
              ]}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={(text) => setOther(text)}
              value={other}
            />
          </View>
        </View>

        <View style={styles.session}>
          <Text style={[styles.subtitle, { width: "100%", marginBottom: 15 }]}>Tem interesse em:</Text>
          <View style={styles.contentButtonDayHours}>
            <ButtonSelectMulti isSelect text="Personal" description="(treino acompanhado)" onPress={() => {}} />
            <ButtonSelectMulti text="Consultoria Online" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </PageRegister>
  );
}
