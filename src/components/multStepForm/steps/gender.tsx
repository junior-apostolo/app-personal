import { PageRegister } from '@/components/pageRegister';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { colors } from '@/theme/colors';

// import { Container } from './styles';

export const Gender: React.FC = () => {
    const [selected, setSelected] = useState("Masculino");

    return (
        <PageRegister
            title='Conte-nos sobre você'
            description='Para lhe proporcionar uma experiência melhor, precisamos saber seu gênero'
            descriptionStyle={{textAlign: "center"}}
        >
            <View style={styles.content}>
                <TouchableOpacity style={[styles.ball, selected == "Masculino" && {backgroundColor: colors.green_100}]}>
                    <View style={styles.genderContainer}>
                        <Text style={[styles.symbol, selected == "Masculino" && {color: colors.black}]}>♂</Text>
                    </View>
                    <Text style={[styles.genderText, selected == "Masculino" && {color: colors.black}]}>Masculino</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.ball, selected == "Feminino" && {backgroundColor: colors.green_100}]}>
                    <View style={styles.genderContainer}>
                        <Text style={[styles.symbol, selected == "Feminino" && {color: colors.black}]}>♀</Text>
                    </View>
                    <Text style={[styles.genderText, selected == "Feminino" && {color: colors.black}]}>Feminino</Text>
                </TouchableOpacity>
                
            </View>
        </PageRegister>
    );
}

