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

  const imagens = ["https://www.embraplan.com.br/imagens/noticias/11b986fc-d5a6-49a8-ba84-7cbbe8b6f93e.jpg", "https://www.optc.com.br/wp-content/uploads/2021/05/strong-man-training-in-gym.jpg", "https://www.pontotel.com.br/local/wp-content/uploads/2021/12/auxilio-academia.webp", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnH2rdVu3kNeMzGkgzbeLmJbH9bVp4qkEeg&s", "https://media.istockphoto.com/id/1322158059/pt/foto/dumbbell-water-bottle-towel-on-the-bench-in-the-gym.jpg?s=612x612&w=0&k=20&c=eFfg0ECbiSopufODZ0Kz6yKTXvay0pXQpwJaUXxpBoc=", "https://blog.damamaefitness.com.br/wp-content/uploads/2020/07/Como-se-acostumar-a-ir-na-academia-frequentemente.jpg", "https://www.pontotel.com.br/local/wp-content/uploads/2021/12/auxilio-academia.webp"]

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
      if (response == false) {
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
  }, [])


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
        imageUri={imagens[currentTreinoIndex]}
        text={`${treinos[currentTreinoIndex].nome.split(" - ")[1]}`}
        buttonText="Iniciar"
        onPress={() => {
          router.push({
            pathname: "(tabs)/training",
            params: {
              id: treinos[currentTreinoIndex].id,
              nome: treinos[currentTreinoIndex].nome.split(" - ")[1],
              image: imagens[currentTreinoIndex],
              description: treinos[currentTreinoIndex].observacao
            },
          })
        }}
      />}

      <ScrollView style={{ width: "90%" }}>
        <ExpandedSection
          title="Dicas de treino"
          content="Para alcançar melhores resultados, seja consistente e mantenha um foco contínuo. Combine treinos intensos com uma alimentação equilibrada, hidrate-se e garanta um sono de qualidade para otimizar sua recuperação."
          sectionKey="dicasDeTreino"
          expandedSection={expandedSection}
          toggleExpand={toggleExpand}
        />

        <ExpandedSection
          title="Como utilizar o app"
          content="Selecione o treino desejado clicando nos dias da semana acima. Ao clicar em 'Iniciar', você terá acesso aos exercícios detalhados do treino escolhido. Siga as orientações e registre seu progresso diariamente!"
          sectionKey="comoUtilizarApp"
          expandedSection={expandedSection}
          toggleExpand={toggleExpand}
        />

        <ExpandedSection
          title="Meu perfil"
          content="Acesse sua avaliação física para acompanhar sua evolução ao longo do tempo. Utilize também o botão de 'Logout' para sair do app com segurança e manter suas informações protegidas."
          sectionKey="meuPerfil"
          expandedSection={expandedSection}
          toggleExpand={toggleExpand}
        />

      </ScrollView>
    </View>
  );
}

