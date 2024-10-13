import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/button";
import { ScrollView } from "react-native-gesture-handler";
import { PageRegister } from "@/components/pageRegister";

// Lista de níveis de atividade
const activityLevels = [
  "Iniciante", // Pouco ou nenhum exercício
  "Intermediário", // Exercício leve, 1-3 dias/semana
  "Avançado", // Exercício moderado, 3-5 dias/semana
];

const descriptionLevel = [
  "Ideal para iniciantes que buscam introduzir exercícios leves a moderados para melhorar a saúde e desenvolver uma rotina regular.",
  "Pessoas com alguma experiência, envolve exercícios de intensidade moderada a alta para aumentar a resistência e a força muscular.",
  "Para aqueles com habilidades avançadas e metas atléticas elevadas, envolve exercícios de alta intensidade e volume para maximizar o desempenho físico."
]
export function ActivityLevel() {
  const { register, setValue } = useFormContext();
  const [selectedActivityLevel, setSelectedActivityLevel] = useState(activityLevels[0]);
  const [selectedActivityLevelIndex, setSelectedActivityLevelIndex] = useState(0);

  useEffect(() => {
    register("activityLevel");
  }, [register]);

  useEffect(() => {
    setValue("activityLevel", selectedActivityLevel);
  }, [selectedActivityLevel, setValue]);

  const handleValueChange = (level: string, index: number) => {
    setSelectedActivityLevel(level);
    setSelectedActivityLevelIndex(index)
  };

  return (
    <PageRegister
      title="Nível de Atividade"
      description="Escolha seu nível de atividade regular. Isso nos ajudará a personalizar planos para você."
      descriptionStyle={{ textAlign: "center" }}
      containerStyle={{ marginTop: 40 }}
    >
      <ScrollView>

        <View style={[styles.content, {width: "90%"}]}>
          {
            activityLevels.map((item, index) => <Button text={item} isSelect={item == selectedActivityLevel} onPress={() => handleValueChange(item, index)} />)
          }
          <Text style={[styles.descriptionAge, { textAlign: "justify", color: "white", fontWeight: "100", marginTop: 40, backgroundColor: "rgba(0,0,0,0.3)", padding: 10 }]}>
            {descriptionLevel[selectedActivityLevelIndex]}
          </Text>
        </View>
      </ScrollView>
    </PageRegister>

  );
}

