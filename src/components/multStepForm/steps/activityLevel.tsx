import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { PageRegister } from "@/components/pageRegister";
import { Button } from "@/components/button";
import { FormContext } from "@/contexts/FormContext";

const activityLevels = [
  "Iniciante",
  "Intermediário",
  "Avançado",
];

const descriptionLevel = [
  "Ideal para iniciantes que buscam introduzir exercícios leves a moderados para melhorar a saúde e desenvolver uma rotina regular.",
  "Pessoas com alguma experiência, envolve exercícios de intensidade moderada a alta para aumentar a resistência e a força muscular.",
  "Para aqueles com habilidades avançadas e metas atléticas elevadas, envolve exercícios de alta intensidade e volume para maximizar o desempenho físico."
];

export function ActivityLevel() {
  const { updateFormData } = useContext(FormContext);
  const [selectedActivityLevel, setSelectedActivityLevel] = useState(activityLevels[0]);
  const [selectedActivityLevelIndex, setSelectedActivityLevelIndex] = useState(0);

  useEffect(() => {
    updateFormData(
      {
        question: "Qual é o seu nível de atividade?",
        answer: selectedActivityLevel,
      },
      4
    );
  }, [selectedActivityLevel]);

  const handleValueChange = (level: string, index: number) => {
    setSelectedActivityLevel(level);
    setSelectedActivityLevelIndex(index);
  };

  return (
    <PageRegister
      title="Nível de Atividade"
      description="Escolha seu nível de atividade regular. Isso nos ajudará a personalizar planos para você."
      descriptionStyle={{ textAlign: "center" }}
      containerStyle={{ marginTop: 40 }}
    >
      <ScrollView>
        <View style={{ width: "90%", marginHorizontal: "5%", marginTop: 50 }}>
          {activityLevels.map((item, index) => (
            <Button
              key={index}
              text={item}
              isSelect={item === selectedActivityLevel}
              onPress={() => handleValueChange(item, index)}
            />
          ))}
          <Text style={{ textAlign: "justify", color: "white", fontWeight: "100", marginTop: 40, backgroundColor: "rgba(0,0,0,0.3)", padding: 10 }}>
            {descriptionLevel[selectedActivityLevelIndex]}
          </Text>
        </View>
      </ScrollView>
    </PageRegister>
  );
}
