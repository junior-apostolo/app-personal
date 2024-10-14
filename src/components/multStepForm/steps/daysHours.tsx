import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
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
            0
        );
    }, [selectedDays]);

    const toggleDay = (day: string) => {
        setSelectedDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    return (
        <PageRegister
            title="Dias de Treino"
            description="Escolha os dias em que você pretende treinar."
            titleStyle={{ textAlign: "center" }}
            containerStyle={{ marginTop: 40 }}
        >
            <ScrollView style={{ marginTop: 20, width: "70%" }}>
                <View style={styles.row}>
                    {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"].map((day) => (
                        <ButtonDay 
                            key={day} 
                            text={day} 
                            isSelect={selectedDays.includes(day)} 
                            onPress={() => toggleDay(day)} 
                        />
                    ))}
                </View>
            </ScrollView>
        </PageRegister>
    );
};
