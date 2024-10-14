import { ButtonSelectMulti } from '@/components/buttonSelect';
import { PageRegister } from '@/components/pageRegister';
import React, { useContext, useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { colors } from '@/theme/colors';
import { FormContext } from '@/contexts/FormContext'; // Importe seu contexto

export const Pathophysiological: React.FC = () => {
    const { updateFormData } = useContext(FormContext); // Obtenha a função para atualizar o contexto
    const [isSelected, setIsSelected] = useState<string | null>(null);
    const [reason, setReason] = useState<string>(''); // Estado para armazenar o motivo
    const [isFocus, setIsFocus] = useState(false);
    const [isField, setIsField] = useState(false);

    const handleFocus = () => {
        setIsFocus(true);
        if (isSelected === "Sim") {
            setIsField(true);
        }
    };

    const handleBlur = () => {
        setIsFocus(false);
        if (isSelected === "Sim" && !isField) {
            setIsField(false);
        }
    };

    const handleSelect = (option: string) => {
        setIsSelected(option);
        if (option === "Sim") {
            setIsField(true);
        } else {
            setIsField(false);
            setReason(''); // Limpa o motivo se "Não" for selecionado
        }
    };

    // Atualiza os dados do formulário quando a seleção mudar
    useEffect(() => {
        if (isSelected !== null) {
            updateFormData(
                {
                    question: "Tem alguma condição Fisiopatológica?",
                    answer: isSelected === "Sim" ? `Sim, motivo: ${reason}` : "Não",
                },
                8 // Alterar o índice conforme necessário
            );
        }
    }, [isSelected, reason]); // Dependências para atualizar quando o motivo ou a seleção mudarem

    return (
        <PageRegister
            title='Tem alguma condição Fisiopatológica?'
            description='(Diabetes, pressão alta, limitações físicas...)'
            descriptionStyle={{ width: 400, textAlign: 'center' }}
        >
            <View style={[styles.content, { width: "80%" }]}>
                <ButtonSelectMulti 
                    text={"Sim"} 
                    isSelect={isSelected === "Sim"} 
                    onPress={() => handleSelect("Sim")} 
                />
                <ButtonSelectMulti 
                    text={"Não"} 
                    isSelect={isSelected === "Não"} 
                    onPress={() => handleSelect("Não")} 
                />
                {isSelected === "Sim" && (
                    <>
                        <Text style={[styles.descriptionAge, { textAlign: 'left', width: "90%", marginTop: 20 }]}>Qual?</Text>
                        <TextInput 
                            style={[
                                styles.textInput, 
                                { width: "90%" }, 
                                isFocus && { borderBottomColor: colors.green_100 }, 
                                isField && { borderBottomColor: colors.green_100 }
                            ]} 
                            onChangeText={setReason} // Atualiza o motivo
                            onFocus={handleFocus} 
                            onBlur={handleBlur} 
                            value={reason} // Define o valor do campo de texto
                        />
                    </>
                )}
            </View>
        </PageRegister>
    );
};
