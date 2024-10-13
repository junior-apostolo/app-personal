import { Card } from '@/components/card';
import { ExpandedSection } from '@/components/expandedSection';
import { colors } from '@/theme/colors';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { LayoutAnimation, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Training: React.FC = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null); // Control which section is expanded

    const toggleExpand = (section: string) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedSection(section === expandedSection ? null : section);
    }

    // Lista de exercícios para exibir
    const exercises = [
        { name: 'Supino Reto com Barra', reps: "12-15" },
        { name: 'Desenvolvimento com Halteres', reps: "12-15" },
        { name: 'Agachamento Livre', reps: "12-15" },
        { name: 'Remada Curvada com Barra', reps: "12-15" },
        { name: 'Rosca Direta com Barra', reps: "12-15" },
        { name: 'Leg Press', reps: "12-15" },
        { name: 'Flexão de Braço', reps: "12-15" },
        { name: 'Extensão de Tríceps', reps: "12-15" }
    ];

    return (
        <View style={styles.container}>
            <Card
                imageUri="https://i.ytimg.com/vi/NuqoFIwx-7Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCI2w6Soaw7CrHq5wTn2N3bAmBc9A"
                text="Dorsais e Bíceps"
            />

            <ScrollView style={{ width: "90%" }}>
                <ExpandedSection
                    title="Orientações"
                    content="Aqui estão algumas dicas para melhorar seus treinos: mantenha consistência, tenha um plano de alimentação balanceado e não se esqueça de descansar."
                    sectionKey="dicasDeTreino"
                    expandedSection={expandedSection}
                    toggleExpand={toggleExpand}
                />

                {/* Sequência de Botões de Exercício */}
                <View style={styles.exerciseList}>
                    {exercises.map((exercise, index) => (
                        <TouchableOpacity key={index} style={styles.exerciseButton} onPress={() => {router.push("(tabs)/exercise")}}>
                            <Text style={styles.exerciseText}>
                                {exercise.name}
                            </Text>
                            <Text style={styles.repText}>{exercise.reps}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
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
    content: {
        width: "100%",
        alignItems: "center"
    },
    exerciseList: {
        marginTop: 20,
        width: '100%',
    },
    exerciseButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_750,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 4,  // Borda inferior de 4px
        borderBottomColor: colors.green_100,
        borderRadius: 10,
        marginBottom: 10,
        minHeight: 50
    },
    exerciseText: {
        fontSize: 16,
        color: colors.white,
        width: "80%"
    },
    repText: {
        fontSize: 16,
        color: colors.green_100,
        marginLeft: 10
    }
});

export default Training;
