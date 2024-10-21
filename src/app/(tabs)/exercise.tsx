import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Para o ícone de lápis
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage
import { Card } from '@/components/card';
import { ExpandedSection } from '@/components/expandedSection';
import { colors } from '@/theme/colors';
import { router, useLocalSearchParams } from 'expo-router';

const Exercise: React.FC = () => {
    const { id, image, nomeExercicio, nome, linkVideo, descriptionExercicio, description, observacao } = useLocalSearchParams();
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [lastLoad, setLastLoad] = useState<string>('0kg');
    const [isInputEnabled, setIsInputEnabled] = useState<boolean>(false);
    const [exerciseLoads, setExerciseLoads] = useState<{ name: string; load: string }[] | any>([]);

    useEffect(() => {
        const loadExerciseLoads = async () => {
            try {
                const storedLoads: any = await AsyncStorage.getItem('exerciseLoads');
                if (storedLoads) {
                    const storedParse: any = JSON.parse(storedLoads);
                    const lastLoadFilter = storedParse?.filter(item => item.name == nomeExercicio);
                    if (lastLoadFilter.length > 0) {
                        setLastLoad(() => lastLoadFilter[0].load);
                    } else {
                        setLastLoad("0kg");
                    }
                    setExerciseLoads(storedParse);
                }

            } catch (error) {
                console.error('Failed to load exercise loads:', error);
            }
        };

        loadExerciseLoads();
    }, [nomeExercicio, id]);

    const toggleExpand = (section: string) => {
        setExpandedSection(section === expandedSection ? null : section);
    };

    const handleSaveLoad = async () => {
        if (lastLoad.trim() !== '') {
            const newLoad = { name: nomeExercicio, load: lastLoad };

            const updatedLoads = [...exerciseLoads, newLoad];
            setExerciseLoads(updatedLoads);
            try {
                await AsyncStorage.setItem('exerciseLoads', JSON.stringify(updatedLoads));
                await AsyncStorage.setItem('lastLoad', lastLoad);
                setIsInputEnabled(false);
            } catch (error) {
                console.error('Failed to save exercise load:', error);
            }
        }
    };

    const goBack = () => {
        router.push({
            pathname: "(tabs)/training",
            params: {
                id,
                nome,
                image,
                description
            },
        })
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={90}
        >
            <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.scrollContent}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={goBack}
                >
                    <Text style={styles.backButtonText}>{"< Voltar"}</Text>
                </TouchableOpacity>

                <Card
                    imageUri=""
                    isYouTube={true}
                    youTubeVideoId={linkVideo}
                    text={nomeExercicio}
                />

                <ExpandedSection
                    title="Descrição"
                    content={observacao}
                    sectionKey="dicasDeTreino"
                    expandedSection={expandedSection}
                    toggleExpand={toggleExpand}
                />

                <View style={styles.loadSection}>
                    <Text style={styles.loadTitle}>Minha Carga</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.lastLoadText}>Última Carga: </Text>
                        <TextInput
                            style={[styles.input, { backgroundColor: isInputEnabled ? colors.blue_750 : colors.gray }]} // Estilo condicional
                            placeholderTextColor={colors.white}
                            placeholder="Insira sua carga"
                            value={lastLoad}
                            onChangeText={setLastLoad}
                            editable={isInputEnabled} 
                        />
                        <TouchableOpacity onPress={() => setIsInputEnabled(true)}>
                            <Feather name="edit" size={24} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSaveLoad}>
                        <Text style={styles.saveButtonText}>Salvar Peso</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg_color,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 70
    },
    scrollContent: {
        alignItems: 'center',
    },
    backButton: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: colors.blue_750, // Cor de fundo para o botão de voltar
        borderRadius: 5,
    },
    backButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    loadSection: {
        marginTop: 20,
        width: '100%',
        padding: 15,
        borderRadius: 10,
    },
    loadTitle: {
        fontSize: 18,
        color: colors.white,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: "center"
    },
    lastLoadText: {
        fontSize: 16,
        color: colors.white,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: "center"
    },
    input: {
        flex: 1,
        borderRadius: 5,
        marginRight: 0,
        marginLeft: 20,
        width: 50,
        height: 40,
        color: colors.white,
        borderRadius: 20,
        paddingLeft: 20,
    },
    saveButton: {
        backgroundColor: colors.green_100,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: colors.bg_color,
        fontWeight: 'bold',
    },
});

export default Exercise;
