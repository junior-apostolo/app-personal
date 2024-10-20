import React, { useEffect, useState } from 'react';
import { Card } from '@/components/card';
import { ExpandedSection } from '@/components/expandedSection';
import { TrainingDetail } from '@/interfaces/TrainingDetail';
import { colors } from '@/theme/colors';
import { router, useLocalSearchParams } from 'expo-router';
import { LayoutAnimation, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getAllExerciseTraining } from '@/services/exerciseTraining';

const Training: React.FC = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null); // Control which section is expanded
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
             nome: item.exercise.nome,
             linkVideo: item.exercise.linkVideo,
             description: item.exercise.descricao,
             observacao: item.observacao
            },
          })
    };
   
    const loadingExercises = async() => {
        try{
            const response = await getAllExerciseTraining(id);
            console.log(response)
            if(!response){
                return false;
            }
            setExercises(response)
        }catch(err){
            return false;
        }
    }

    useEffect(()=> {
        loadingExercises()
    },[id])


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
                    {exercises.map((exercise, index) => (
                        <TouchableOpacity key={index} style={styles.exerciseButton} onPress={() => nextStep(exercise)}>
                            <Text style={styles.exerciseText}>
                                {exercise.exercise.nome}
                            </Text>
                            <Text style={styles.repText}>{exercise?.serie} - {exercise?.rep}</Text>
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
