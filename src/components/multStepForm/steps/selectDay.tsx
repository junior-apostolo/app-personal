import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { ButtonDay } from "@/components/buttonDay";
import { PageRegister } from "@/components/pageRegister";
import { FormContext } from "@/contexts/FormContext";
import { styles } from "./styles";

export const SelectDays: React.FC = () => {
    const { updateFormData } = useContext(FormContext);
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    useEffect(() => {
        updateFormData(
            {
                question: "Quais dias você pretende treinar?",
                answer: selectedDays.join(", ") || "",
            },
            0 // Altere o índice conforme necessário
        );
    }, [selectedDays]);

    const toggleDay = (day: string) => {
        setSelectedDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    // Agrupa os dias em grupos de 3
    const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    const groupedDays = [];

    for (let i = 0; i < days.length; i += 3) {
        groupedDays.push(days.slice(i, i + 3));
    }

    return (
        <PageRegister
            title="Dias de Treino"
            description="Escolha os dias em que você pretende treinar."
            titleStyle={{ textAlign: "center" }}
            containerStyle={{ marginTop: 40 }}
        >
            <ScrollView style={{ marginTop: 20, width: "70%" }}>
                {groupedDays.map((group, index) => (
                    <View key={index} style={[styles.row,{justifyContent: "center"}]}>
                        {group.map((day) => (
                            <ButtonDay 
                                key={day} 
                                text={day} 
                                isSelect={selectedDays.includes(day)} 
                                onPress={() => toggleDay(day)} 
                            />
                        ))}
                    </View>
                ))}
            </ScrollView>
        </PageRegister>
    );
};
