import { PageRegister } from '@/components/pageRegister';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/button';

// import { Container } from './styles';

export const MuscleFocus: React.FC = () => {
    return (
        <PageRegister
            title='Músculo que gostaria de focar'
            description='Escolha o grupo muscular para focar mais nos seus treinos. Vamos personalizar seu plano para atingir seus objetivos.'
            descriptionStyle={{ textAlign: "center" }}
        >
            <View style={styles.content}>
                <ScrollView style={{ marginTop: 40}}>
                    <View style={styles.row}>
                    <Button text={"Braço"} containerStyle={{width: 100, height: 40, marginHorizontal: 5}} textStyle={{fontSize: 18}}/>
                    <Button text={"Peito"} isSelect containerStyle={{width: 100, height: 40, marginHorizontal: 5}} textStyle={{fontSize: 18}}/>
                    <Button text={"Ombro"} isSelect containerStyle={{width: 100, height: 40, marginHorizontal: 5}} textStyle={{fontSize: 18}}/>
                    </View>
                    <View style={styles.row}>
                    <Button text={"Costas"} containerStyle={{width: 100, height: 40, marginHorizontal: 5}} textStyle={{fontSize: 18}}/>
                    <Button text={"Abdômen"}  containerStyle={{width: 100, height: 40, marginHorizontal: 5}} textStyle={{fontSize: 18}}/>
                    <Button text={"Posterior"} containerStyle={{width: 100, height: 40, marginHorizontal: 5}} textStyle={{fontSize: 18}}/>
                    </View>
                    <View style={styles.row}>
                    <Button text={"Quadríceps"} isSelect containerStyle={{width: 100, height: 40, marginHorizontal: 5}} textStyle={{fontSize: 16}}/>
                    <Button text={"Glúteos"} containerStyle={{width: 100, height: 40, marginHorizontal: 5}} textStyle={{fontSize: 18}}/>
                    <Button text={"Panturrilha"} containerStyle={{width: 100, height: 40, marginHorizontal: 5}} textStyle={{fontSize: 16}}/>
                    </View>
                    <Button text={"Corpo Todo"} containerStyle={{width: "80%", height: 45, alignSelf: "center"}} textStyle={{fontSize: 20}}/>

                </ScrollView>
            </View>
        </PageRegister>
    )
}
