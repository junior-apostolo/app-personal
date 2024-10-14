import { PageRegister } from '@/components/pageRegister';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import { ButtonSelectMulti } from '@/components/buttonSelect';
import { FormContext } from '@/contexts/FormContext';

const longTimeTraining = [
    "Menos de 6 meses",
    "Há 6 meses",
    "Há 1 ano",
    "Entre 2 a 5 anos",
    "Acima de 5 anos",
    "Nunca treinei"
];

export const HowLongTraining: React.FC = () => {
    const { updateFormData } = useContext(FormContext);
    const [selectedTrainingTime, setSelectedTrainingTime] = useState<string | null>(null); // Modificado para armazenar um único valor

    useEffect(() => {
        updateFormData(
            {
                question: "Treina há quanto tempo",
                answer: selectedTrainingTime || "", // Se não houver seleção, retorna uma string vazia
            },
            7 // Alterar o índice conforme necessário
        );
    }, [selectedTrainingTime]);

    const handleSelectTrainingTime = (time: string) => {
        setSelectedTrainingTime(time); // Apenas define a nova seleção
    };

    return (
        <PageRegister
            title="Treina há quanto tempo"
            description="Informe há quanto tempo você pratica exercícios regularmente."
            titleStyle={{ textAlign: "center" }}
            containerStyle={{ marginTop: 40 }}
            descriptionStyle={{ textAlign: "center" }}
        >
            <ScrollView style={{ width: "90%", height: "70%", marginTop: 20 }}>
                <View style={[styles.content]}>
                    {
                        longTimeTraining.map((item) => (
                            <ButtonSelectMulti 
                                key={item}
                                text={item} 
                                isSelect={selectedTrainingTime === item} // Verifica se o item é o selecionado
                                onPress={() => handleSelectTrainingTime(item)} 
                            />
                        ))
                    }
                </View>
            </ScrollView>
        </PageRegister>
    );
};
