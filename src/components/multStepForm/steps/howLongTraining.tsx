import { PageRegister } from '@/components/pageRegister';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/button';
import { ButtonSelectMulti } from '@/components/buttonSelect';

// import { Container } from './styles';

const longTimeTraining = [
    "Menos de 6 meses",
    "Há 6 meses",
    "Há 1 ano",
    "Entre 2 a 5 anos",
    "Acima de 5 anos",
    "Nunca treinei"
]

export const HowLongTraining: React.FC = () => {
    return (
        <PageRegister
            title="Treina há quanto tempo"
            description="Informe há quanto tempo você pratica exercícios regularmente."
            titleStyle={{ textAlign: "center" }}
            containerStyle={{ marginTop: 40 }}
            descriptionStyle={{ textAlign: "center" }}
        >
            <ScrollView style={{ width: "90%", height: "70%", marginTop: 20 }}>

                <View style={[styles.content]}>
                    {
                        longTimeTraining.map((item, index) => <ButtonSelectMulti text={item} isSelect={index === 3} onPress={() => { }} />)
                    }
                </View>
            </ScrollView>
        </PageRegister>
    )
}
