import { PageRegister } from '@/components/pageRegister';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { colors } from '@/theme/colors';
import { FormContext } from '@/contexts/FormContext'; // Importando o contexto

export const Gender: React.FC = () => {
    const { updateFormData } = useContext(FormContext); // Usando o contexto para atualizar os dados do formulário
    const [selected, setSelected] = useState("Masculino");

    useEffect(() => {
        updateFormData(
            {
                question: "Qual seu gênero?",
                answer: selected,
            },
            3 // Altere o índice conforme necessário
        );
    }, [selected]); // Atualiza o contexto sempre que 'selected' mudar

    const handleSelect = (gender: string) => {
        setSelected(gender); // Atualiza o estado da seleção
    };

    return (
        <PageRegister
            title='Conte-nos sobre você'
            description='Para lhe proporcionar uma experiência melhor, precisamos saber seu gênero'
            descriptionStyle={{ textAlign: "center" }}
        >
            <View style={styles.content}>
                <TouchableOpacity 
                    style={[styles.ball, selected === "Masculino" && { backgroundColor: colors.green_100 }]} 
                    onPress={() => handleSelect("Masculino")} // Adicionando o onPress
                >
                    <View style={styles.genderContainer}>
                        <Text style={[styles.symbol, selected === "Masculino" && { color: colors.black }]}>♂</Text>
                    </View>
                    <Text style={[styles.genderText, selected === "Masculino" && { color: colors.black }]}>Masculino</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.ball, selected === "Feminino" && { backgroundColor: colors.green_100 }]} 
                    onPress={() => handleSelect("Feminino")} // Adicionando o onPress
                >
                    <View style={styles.genderContainer}>
                        <Text style={[styles.symbol, selected === "Feminino" && { color: colors.black }]}>♀</Text>
                    </View>
                    <Text style={[styles.genderText, selected === "Feminino" && { color: colors.black }]}>Feminino</Text>
                </TouchableOpacity>
            </View>
        </PageRegister>
    );
}
