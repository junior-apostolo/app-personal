import React, { useEffect, useState, useContext } from "react";
import { View } from "react-native";
import { PageRegister } from "@/components/pageRegister";
import { ButtonSelectMulti } from "@/components/buttonSelect";
import { FormContext } from "@/contexts/FormContext";
import { styles } from "./styles";

export function Objective() {
  const { updateFormData } = useContext(FormContext);
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([]);
  const objectiveArray = [
    "Emagrecimento",
    "Hipertrofia",
    "Composição Corporal",
    "Performance no esporte",
    "Encaminhamento Médico",
    "Qualidade de Vida"
  ];

  useEffect(() => {
    if (selectedObjectives.length) {
      updateFormData(
        {
          question: "Qual é o seu objetivo?",
          answer: selectedObjectives.join(", "),
        },
        5
      );
    }
  }, [selectedObjectives]);

  const handleSelectObjective = (objective: string) => {
    setSelectedObjectives((prev) => {
      if (prev.includes(objective)) {
        return prev.filter((item) => item !== objective);
      } else {
        return [...prev, objective];
      }
    });
  };

  return (
    <PageRegister
      description="Você pode escolher mais de um. Não se preocupe, você sempre pode alterá-lo mais tarde."
      title="Qual é o teu objetivo"
      titleStyle={{ fontSize: 28 }}
      descriptionStyle={{ textAlign: "center" }}
    >
      <View style={[styles.content, { width: "80%" }]}>
        {objectiveArray.map((item) => (
          <ButtonSelectMulti
            key={item}
            text={item}
            isSelect={selectedObjectives.includes(item)}
            onPress={() => handleSelectObjective(item)}
          />
        ))}
      </View>
    </PageRegister>
  );
}
