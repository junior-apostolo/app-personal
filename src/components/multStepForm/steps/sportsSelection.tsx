import { ButtonDay } from '@/components/buttonDay';
import { PageRegister } from '@/components/pageRegister';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, TextInput, View, Text } from 'react-native';
import { styles } from './styles';
import { colors } from '@/theme/colors';
import { FormContext } from '@/contexts/FormContext';

const esportes = ["Crossfit", "Musculação", "Corrida", "Natação", "Lutas", "Futebol", "Caminhada"];

const chunkArray = (array: string[], size: number) => {
    return array.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(array.slice(i, i + size));
        return acc;
    }, [] as string[][]);
};

export const SportsSelection: React.FC = () => {
    const { updateFormData } = useContext(FormContext);
    const esportesChunks = chunkArray(esportes, 3);
    const [selectedSports, setSelectedSports] = useState<string[]>([]);
    const [otherSport, setOtherSport] = useState("");

    useEffect(() => {
        updateFormData(
            {
                question: "Você pratica quais esportes?",
                answer: selectedSports.concat(otherSport).join(", ") || "",
            },
            3 
        );
    }, [selectedSports, otherSport]); 

    const toggleSport = (sport: string) => {
        setSelectedSports((prev) =>
            prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
        );
    };

    return (
        <PageRegister
            title='Pratica algo'
            description='Informe se pratica algum esporte ou atividade física para ajustarmos seu plano de treino.'
        >
            <ScrollView>
                <View style={styles.content}>
                    {esportesChunks.map((chunk, index) => (
                        <View style={[styles.row, { justifyContent: "center" }]} key={index}>
                            {chunk.map((item) => (
                                <ButtonDay
                                    key={item}
                                    text={item}
                                    isSelect={selectedSports.includes(item)}
                                    onPress={() => toggleSport(item)}
                                />
                            ))}
                        </View>
                    ))}
                    <View style={[styles.row, { justifyContent: "center", marginTop: 20 }]}>
                        <Text style={{ fontSize: 20, color: colors.white, marginRight: 20 }}>Outros:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setOtherSport}
                            value={otherSport}
                        />
                    </View>
                </View>
            </ScrollView>
        </PageRegister>
    );
};
