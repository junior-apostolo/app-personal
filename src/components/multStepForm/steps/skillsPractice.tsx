import { ButtonDay } from '@/components/buttonDay';
import { PageRegister } from '@/components/pageRegister';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { colors } from '@/theme/colors';

const esportes = ["Crossfit", "Musculação", "Corrida", "Natação", "Lutas", "Futebol", "Caminhada"];
const frequencia = ["Baixa", "Média", "Alta"];

export const SkillsPractice: React.FC = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [other, setOther] = useState("");

    // Função para dividir o array em sub-arrays de 3 elementos
    const chunkArray = (array: string[], size: number) => {
        return array.reduce((acc, _, i) => {
            if (i % size === 0) acc.push(array.slice(i, i + size));
            return acc;
        }, [] as string[][]);
    };

    const esportesChunks = chunkArray(esportes, 3);

    const handleFocus = () => setIsFocus(true);
    const handleBlur = () => setIsFocus(false);

    return (
        <PageRegister
            title='Pratica algo'
            description='Informe se pratica algum esporte ou atividade física para ajustarmos seu plano de treino.'
        >
            <ScrollView>
                <View style={styles.content}>
                    {/* Renderização dos esportes */}
                    {esportesChunks.map((chunk, index) => (
                        <View style={[styles.row, { justifyContent: "center" }]} key={index}>
                            {chunk.map((item) => (
                                <ButtonDay text={item} onPress={() => { }} key={item} />
                            ))}
                        </View>
                    ))}

                    {/* Campo "Outros" */}
                    <View style={[styles.row, { justifyContent: "center", width: "100%", marginTop: 20 }]}>
                        <Text style={{ fontSize: 20, color: colors.white, marginRight: 20 }}>Outros:</Text>
                        <TextInput
                            style={[
                                styles.textInput,
                                isFocus && { borderBottomColor: colors.green_100 },
                                other && { borderBottomColor: colors.green_100 }
                            ]}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChangeText={(text) => setOther(text)}
                            value={other}
                        />
                    </View>

                    <View style={[styles.session, { width: "90%", marginTop: 30 }]}>
                        <Text style={[styles.subtitle, { width: "100%", marginBottom: 15, textAlign: 'left' }]}>
                            Frequência:
                        </Text>
                        <View style={[styles.row, { justifyContent: "center", alignItems: "center" }]}>
                            {frequencia.map((item) => (
                                <ButtonDay 
                                    text={item} 
                                    onPress={() => { }} 
                                    key={item} 
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </PageRegister>
    );
};
