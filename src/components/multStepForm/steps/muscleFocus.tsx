import { PageRegister } from '@/components/pageRegister';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/button';
import { FormContext } from '@/contexts/FormContext';

const muscleGroups = ["Braço", "Peito", "Ombro", "Costas", "Abdômen", "Posterior", "Quadríceps", "Glúteos", "Panturrilha"];

export const MuscleFocus: React.FC = () => {
    const { updateFormData } = useContext(FormContext);
    const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);

    useEffect(() => {
        if (selectedMuscles.length) {
            updateFormData(
                {
                    question: "Músculo que gostaria de focar",
                    answer: selectedMuscles.toString()
                },
                6
            );
        }
    }, [selectedMuscles]);

    const handleSelectMuscle = (muscle: string) => {
        setSelectedMuscles((prev) => {
            if (prev.includes(muscle)) {
                return prev.filter((item) => item !== muscle);
            } else {
                return [...prev, muscle];
            }
        });
    };

    const handleSelectAll = () => {
        if (selectedMuscles.length === muscleGroups.length) {
            setSelectedMuscles([]);
        } else {
            setSelectedMuscles(muscleGroups);
        }
    };

    return (
        <PageRegister
            title='Músculo que gostaria de focar'
            description='Escolha o grupo muscular para focar mais nos seus treinos. Vamos personalizar seu plano para atingir seus objetivos.'
            descriptionStyle={{ textAlign: "center" }}
        >
            <View style={styles.content}>
                <ScrollView style={{ marginTop: 40 }}>
                    <View style={styles.row}>
                        <Button 
                            text={"Braço"} 
                            containerStyle={{ width: 100, height: 40, marginHorizontal: 5 }} 
                            textStyle={{ fontSize: 18 }} 
                            isSelect={selectedMuscles.includes("Braço")} 
                            onPress={() => handleSelectMuscle("Braço")} 
                        />
                        <Button 
                            text={"Peito"} 
                            containerStyle={{ width: 100, height: 40, marginHorizontal: 5 }} 
                            textStyle={{ fontSize: 18 }} 
                            isSelect={selectedMuscles.includes("Peito")} 
                            onPress={() => handleSelectMuscle("Peito")} 
                        />
                        <Button 
                            text={"Ombro"} 
                            containerStyle={{ width: 100, height: 40, marginHorizontal: 5 }} 
                            textStyle={{ fontSize: 18 }} 
                            isSelect={selectedMuscles.includes("Ombro")} 
                            onPress={() => handleSelectMuscle("Ombro")} 
                        />
                    </View>
                    <View style={styles.row}>
                        <Button 
                            text={"Costas"} 
                            containerStyle={{ width: 100, height: 40, marginHorizontal: 5 }} 
                            textStyle={{ fontSize: 18 }} 
                            isSelect={selectedMuscles.includes("Costas")} 
                            onPress={() => handleSelectMuscle("Costas")} 
                        />
                        <Button 
                            text={"Abdômen"} 
                            containerStyle={{ width: 100, height: 40, marginHorizontal: 5 }} 
                            textStyle={{ fontSize: 18 }} 
                            isSelect={selectedMuscles.includes("Abdômen")} 
                            onPress={() => handleSelectMuscle("Abdômen")} 
                        />
                        <Button 
                            text={"Posterior"} 
                            containerStyle={{ width: 100, height: 40, marginHorizontal: 5 }} 
                            textStyle={{ fontSize: 18 }} 
                            isSelect={selectedMuscles.includes("Posterior")} 
                            onPress={() => handleSelectMuscle("Posterior")} 
                        />
                    </View>
                    <View style={styles.row}>
                        <Button 
                            text={"Quadríceps"} 
                            containerStyle={{ width: 100, height: 40, marginHorizontal: 5 }} 
                            textStyle={{ fontSize: 16 }} 
                            isSelect={selectedMuscles.includes("Quadríceps")} 
                            onPress={() => handleSelectMuscle("Quadríceps")} 
                        />
                        <Button 
                            text={"Glúteos"} 
                            containerStyle={{ width: 100, height: 40, marginHorizontal: 5 }} 
                            textStyle={{ fontSize: 18 }} 
                            isSelect={selectedMuscles.includes("Glúteos")} 
                            onPress={() => handleSelectMuscle("Glúteos")} 
                        />
                        <Button 
                            text={"Panturrilha"} 
                            containerStyle={{ width: 100, height: 40, marginHorizontal: 5 }} 
                            textStyle={{ fontSize: 16 }} 
                            isSelect={selectedMuscles.includes("Panturrilha")} 
                            onPress={() => handleSelectMuscle("Panturrilha")} 
                        />
                    </View>
                    <Button 
                        text={selectedMuscles.length === muscleGroups.length ? "Desmarcar Todos" : "Corpo Todo"} 
                        containerStyle={{ width: "80%", height: 45, alignSelf: "center" }} 
                        textStyle={{ fontSize: 20 }} 
                        onPress={handleSelectAll} 
                    />
                </ScrollView>
            </View>
        </PageRegister>
    )
}
