import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { ButtonDay } from "@/components/buttonDay";
import { PageRegister } from "@/components/pageRegister";
import { FormContext } from "@/contexts/FormContext";
import { styles } from "./styles";
import { colors } from "@/theme/colors"; // Certifique-se de que isso esteja importado

export const SelectTime: React.FC = () => {
    const { updateFormData } = useContext(FormContext);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [otherTime, setOtherTime] = useState<string>("");

    useEffect(() => {
        updateFormData(
            {
                question: "Qual o tempo disponível para treinar?",
                answer: selectedTime || otherTime || "", // Inclui o tempo personalizado se existir
            },
            1 // Altere o índice conforme necessário
        );
    }, [selectedTime, otherTime]);

    return (
        <PageRegister
            title="Tempo Disponível"
            description="Escolha quanto tempo você pretende treinar."
            titleStyle={{ textAlign: "center" }}
            containerStyle={{ marginTop: 40 }}
        >
            <ScrollView style={{ marginTop: 20, width: "70%" }}>
                <View style={styles.row}>
                    {["30 Min", "1 Hora", "1h 30 Min"].map((time) => (
                        <ButtonDay 
                            key={time} 
                            text={time} 
                            isSelect={selectedTime === time} 
                            onPress={() => setSelectedTime(time)} 
                        />
                    ))}
                </View>

                <Text style={{ textAlign: "left", marginVertical: 15, fontSize: 18, color: colors.green_100 }}>
                    Ou insira seu próprio tempo:
                </Text>

                <TextInput
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: colors.green_100,
                        padding: 10,
                        paddingTop: 0,
                        paddingLeft: 0,
                        fontSize: 18,
                        color: colors.white, 
                    }}
                    placeholder="Ex: 45 Min"
                    placeholderTextColor={colors.green_100} 
                    value={otherTime}
                    onChangeText={setOtherTime}
                />
            </ScrollView>
        </PageRegister>
    );
};
