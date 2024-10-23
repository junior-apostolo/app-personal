import React, { useEffect, useState } from 'react';
import { Card } from '@/components/card';
import { ExpandedSection } from '@/components/expandedSection';
import { TrainingDetail } from '@/interfaces/TrainingDetail';
import { colors } from '@/theme/colors';
import { router, useLocalSearchParams } from 'expo-router';
import { LayoutAnimation, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getAllExerciseTraining } from '@/services/exerciseTraining';

const Training: React.FC = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [exercises, setExercises] = useState<Array<TrainingDetail>>([]);
    const { id, image, nome, description } = useLocalSearchParams();

    const toggleExpand = (section: string) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedSection(section === expandedSection ? null : section);
    }

    const nextStep = (item: TrainingDetail) => {
        router.push({
            pathname: "(tabs)/exercise",
            params: {
                nomeExercicio: item.exercise.nome,
                linkVideo: item.exercise.linkVideo,
                descriptionExercicio: item.exercise.descricao,
                observacao: item.observacao,
                id: id,
                nome: nome,
                image: image,
                description: description
            },
        })
    };

    const loadingExercises = async () => {
        try {
            const response = await getAllExerciseTraining(id);
            if (!response) {
                return false;
            }
            setExercises(response);
        } catch (err) {
            return false;
        }
    }

    useEffect(() => {
        loadingExercises();
    }, [id]);


    const groupReps = (rep: string) => {
        const repsArray = rep.split('-');

        let groupedReps = '';
        for (let i = 0; i < repsArray.length; i += 2) {
            if (i == 0) {
                groupedReps += `${repsArray[i]}\n`;
            } else {
                groupedReps += `${repsArray[i]}${repsArray[i + 1] ? ` - ${repsArray[i + 1]}` : ''}\n`;
            }
        }

        return groupedReps.trim();
    }

    return (
        <View style={styles.container}>
            <Card
                imageUri={image}
                text={nome}
            />

            <ScrollView style={{ width: "90%" }}>
                <ExpandedSection
                    title="Orientações"
                    content={description}
                    sectionKey="dicasDeTreino"
                    expandedSection={expandedSection}
                    toggleExpand={toggleExpand}
                />

                <View style={styles.exerciseList}>
                    {exercises.map((exercise, index) => {
                        const isBiset = exercise.metodo.toLocaleLowerCase() === 'biset';
                        const isLastBiset = isBiset && (index === exercises.length - 1 || exercises[index + 1]?.metodo !== 'biset');
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.exerciseButton,
                                    isLastBiset && styles.lastBiset,
                                    exercise.metodo.toLocaleLowerCase() != "biset" && { marginTop: 10 },
                                    exercises[index + 1]?.metodo.toLocaleLowerCase() !== 'biset' && { borderBottomWidth: 4 }
                                ]}
                                onPress={() => nextStep(exercise)}
                            >
                                <Text style={styles.exerciseText}>
                                    {exercise.exercise.nome}
                                </Text>
                                <Text style={styles.repText}>
                                    {exercise?.serie} x {groupReps(exercise?.rep)}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
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
        borderBottomWidth: 4,
        borderBottomColor: colors.green_100,
        borderRadius: 10,
        marginBottom: 10,
        minHeight: 50
    },
    lastBiset: {
        borderBottomWidth: 0,
        marginBottom: 0,
        borderRadius: 0,
    },
    exerciseText: {
        fontSize: 16,
        color: colors.white,
        width: "80%"
    },
    repText: {
        fontSize: 16,
        color: colors.green_100,
        marginLeft: 10,
    }
});

export default Training;
