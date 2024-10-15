import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, LayoutAnimation } from 'react-native';
import { colors } from '@/theme/colors';
import { Card } from '@/components/card';
import { ExpandedSection } from '@/components/expandedSection';
import { router, useNavigation } from 'expo-router';
import { getAllTrainingAsync } from '@/services/trainingService';
import { Training } from '@/interfaces/Training';


export default function Home() {
  const [currentTreinoIndex, setCurrentTreinoIndex] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [treinos, setTreinos] = useState<Array<Training>>([])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg_color,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 50
    },
    greeting: {
      fontSize: 24,
      color: 'white',
      marginBottom: 10,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
    },
    motivation: {
      textAlign: 'center',
      fontSize: 16,
      color: 'white',
      marginBottom: 30,
      fontStyle: 'italic',
    },
    weekContainer: {
      flexDirection: 'row',
      justifyContent: treinos.length > 4 ? 'space-between' : 'flex-start',
      width: '80%',
      marginBottom: 30,
    },
    dayView: {
      padding: 10,
      borderBottomWidth: 3,
      borderBottomColor: colors.green_100,
      backgroundColor: 'transparent',
      width: 35,
      alignItems: 'center',
      marginHorizontal: treinos.length > 5 ? 2 : 8,
    },
    dayText: {
      fontSize: 18,
    }
  });



  const toggleExpand = (section: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSection(section === expandedSection ? null : section);
  }

  const loadingTraining = async () => {
    try {
      const response = await getAllTrainingAsync();
      if(response == false){
        return false;
      }
      console.log(response)
      setTreinos(response);
    } catch (err) {
      return false;
    }
  }

  useEffect(() => {
    loadingTraining();
  },[])


  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá Vinicius,</Text>
      <Text style={styles.motivation}>
        Cada gota de suor é um passo mais perto do seu melhor; continue firme e transforme esforço em conquista!
      </Text>

      <View style={styles.weekContainer}>
        {treinos.map((treino, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayView,
              index === currentTreinoIndex && { backgroundColor: colors.green_100 },
            ]}
            onPress={() => setCurrentTreinoIndex(index)} // Seleciona um treino específico ao clicar
          >
            <Text
              style={[
                styles.dayText,
                index === currentTreinoIndex ? { color: colors.black } : { color: colors.white },
              ]}
            >
              {treino.nome.split(" - ")[0]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {treinos?.length > 0 && <Card
        imageUri="https://i.ytimg.com/vi/NuqoFIwx-7Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCI2w6Soaw7CrHq5wTn2N3bAmBc9A"
        text={`${treinos[currentTreinoIndex].nome.split(" - ")[1]}`}
        buttonText="Iniciar"
        onPress={() => { 
          router.push({
            pathname: "(tabs)/training",
            params: {
              id: treinos[currentTreinoIndex].id,
              nome: treinos[currentTreinoIndex].nome.split(" - ")[1],
              image: "https://i.ytimg.com/vi/NuqoFIwx-7Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCI2w6Soaw7CrHq5wTn2N3bAmBc9A",
              description: treinos[currentTreinoIndex].observacao
            },
          })
        }} 
      />}

      <ScrollView style={{ width: "90%" }}>
        <ExpandedSection
          title="Dicas de treino"
          content="Aqui estão algumas dicas para melhorar seus treinos: mantenha consistência, tenha um plano de alimentação balanceado e não se esqueça de descansar."
          sectionKey="dicasDeTreino"
          expandedSection={expandedSection}
          toggleExpand={toggleExpand}
        />

        <ExpandedSection
          title="Como utilizar o app"
          content="O app foi desenvolvido para otimizar seu treino e monitorar seu progresso. Explore as seções para personalizar suas rotinas."
          sectionKey="comoUtilizarApp"
          expandedSection={expandedSection}
          toggleExpand={toggleExpand}
        />

        <ExpandedSection
          title="Meu perfil"
          content="No seu perfil, você pode ajustar suas preferências, visualizar seu histórico de treino e atualizar suas metas."
          sectionKey="meuPerfil"
          expandedSection={expandedSection}
          toggleExpand={toggleExpand}
        />
      </ScrollView>
    </View>
  );
}

