import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { ButtonSelectMulti } from "@/components/buttonSelect";
import { PageRegister } from "@/components/pageRegister";
import { FormContext } from "@/contexts/FormContext";
import { styles } from "./styles";

export const InterestInTraining: React.FC = () => {
    const { updateFormData } = useContext(FormContext);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]); // Usando um array para múltiplas seleções

    useEffect(() => {
        updateFormData(
            {
                question: "Tem interesse em:",
                answer: selectedInterests.join(", ") || "", // Converte o array em string
            },
            9 
        );
    }, [selectedInterests]);

    const toggleInterest = (interest: string) => {
        setSelectedInterests((prev) =>
            prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
        );
    };

    return (
        <PageRegister
            title="Interesse em Treinamento"
            description="Selecione seu interesse em treinamentos."
            titleStyle={{ textAlign: "center" }}
            containerStyle={{ marginTop: 40 }}
        >
            <ScrollView style={{ width: "90%", marginTop: 20 }}>
                <View style={styles.content}>
                    <ButtonSelectMulti 
                        text="Personal" 
                        description="(treino acompanhado)" 
                        isSelect={selectedInterests.includes("Personal")} // Verifica se "Personal" está selecionado
                        onPress={() => toggleInterest("Personal")} 
                    />
                    <ButtonSelectMulti 
                        text="Consultoria Online" 
                        isSelect={selectedInterests.includes("Consultoria Online")} // Verifica se "Consultoria Online" está selecionado
                        onPress={() => toggleInterest("Consultoria Online")} 
                    />
                </View>
            </ScrollView>
        </PageRegister>
    );
};
