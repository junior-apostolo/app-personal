import { ButtonSelectMulti } from '@/components/buttonSelect';
import { PageRegister } from '@/components/pageRegister';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { colors } from '@/theme/colors';
import { FormContext } from '@/contexts/FormContext'; // Importe o contexto

const frequencia = ["Baixa", "Média", "Alta"];

export const FrequencySelection: React.FC = () => {
    const { updateFormData } = useContext(FormContext); // Use o contexto
    const [selectedFrequency, setSelectedFrequency] = useState<string | null>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [other, setOther] = useState("");

    const handleFocus = () => setIsFocus(true);
    const handleBlur = () => setIsFocus(false);

    const handleSelectFrequency = (item: string) => {
        setSelectedFrequency(item);
    };

    useEffect(() => {
        updateFormData(
            {
                question: "Qual sua frequência de prática?",
                answer: selectedFrequency || "", // Atualiza com a frequência selecionada
            },
            3 // Altere o índice conforme necessário
        );
    }, [selectedFrequency]); // Atualiza o contexto sempre que 'selectedFrequency' mudar

    return (
        <PageRegister
            title='Frequência de Prática'
            description='Selecione a frequência com que você pratica atividades.'
        >
            <ScrollView>
                <View style={styles.content}>
                    <View style={[styles.session, { width: "90%", marginTop: 30 }]}>
                        <Text style={[styles.subtitle, { width: "100%", marginBottom: 15, textAlign: 'left' }]}>
                            Frequência:
                        </Text>
                        <View style={[{ justifyContent: "center", alignItems: "center" }]}>
                            {frequencia.map((item) => (
                                <ButtonSelectMulti 
                                    key={item}
                                    text={item} 
                                    isSelect={selectedFrequency === item}
                                    onPress={() => handleSelectFrequency(item)} 
                                />
                            ))}
                        </View>
                    </View>

                 
                </View>
            </ScrollView>
        </PageRegister>
    );
};
