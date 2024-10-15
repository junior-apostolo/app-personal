import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Para o ícone de lápis
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage
import { Card } from '@/components/card';
import { ExpandedSection } from '@/components/expandedSection';
import { colors } from '@/theme/colors';
import { useLocalSearchParams } from 'expo-router';

const Exercise: React.FC = () => {
    const { nome, linkVideo, description, observacao } = useLocalSearchParams();
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [lastLoad, setLastLoad] = useState<string>('');
    const [isInputEnabled, setIsInputEnabled] = useState<boolean>(false); 
    const [exerciseLoads, setExerciseLoads] = useState<{ name: string; load: string }[]>([]);

    useEffect(() => {
        // Carrega as cargas do AsyncStorage quando o componente é montado
        const loadExerciseLoads = async () => {
            try {
                const storedLoads = await AsyncStorage.getItem('exerciseLoads');
                if (storedLoads) {
                    setExerciseLoads(JSON.parse(storedLoads));
                }
            } catch (error) {
                console.error('Failed to load exercise loads:', error);
            }
        };

        loadExerciseLoads();
    }, []);

    const toggleExpand = (section: string) => {
        setExpandedSection(section === expandedSection ? null : section);
    };

    const handleSaveLoad = async () => {
        // Adiciona a carga ao array de cargas
        if (lastLoad.trim() !== '') {
            const newLoad = { name: 'Pulldown', load: lastLoad };

            // Atualiza o estado local
            const updatedLoads = [...exerciseLoads, newLoad];
            setExerciseLoads(updatedLoads);

            // Salva no AsyncStorage
            try {
                await AsyncStorage.setItem('exerciseLoads', JSON.stringify(updatedLoads));
                setLastLoad(''); // Limpa o campo após gravar
                setIsInputEnabled(false); // Desabilita o input novamente
            } catch (error) {
                console.error('Failed to save exercise load:', error);
            }
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajusta a posição no iOS
            keyboardVerticalOffset={90} // Ajuste conforme necessário para o layout
        >
            <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.scrollContent}>
                <Card
                    imageUri=""
                    isYouTube={true}
                    youTubeVideoId={linkVideo}
                    text={nome}
                />

                <ExpandedSection
                    title="Descrição"
                    content={description}
                    sectionKey="dicasDeTreino"
                    expandedSection={expandedSection}
                    toggleExpand={toggleExpand}
                />

                <View style={styles.loadSection}>
                    <Text style={styles.loadTitle}>Minha Carga</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.lastLoadText}>Última Carga: </Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={colors.white}
                            placeholder="Insira sua carga"
                            value={lastLoad}
                            onChangeText={setLastLoad}
                            editable={isInputEnabled} // Habilita o input com base no estado
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
        color: colors.white
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
