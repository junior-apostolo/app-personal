import { ButtonSelectMulti } from '@/components/buttonSelect';
import { PageRegister } from '@/components/pageRegister';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { colors } from '@/theme/colors';

// import { Container } from './styles';

export const Pathophysiological: React.FC = () => {
    const [isSelected, setIsSelect] = useState("Não")
    const [isFocus, setIsFocus] = useState(false);
    const [isField, setIsField] = useState(false);

    const handleFocus = (text: string) => {
        setIsFocus(true)
        if (isSelected != "") {
            setIsField(true)
        }
    }
    const handleBlur = (text: string) => {
        setIsFocus(false)
        if (isSelected == "") {
            setIsField(false)
        }
    }
    return (
        <PageRegister
            title='Tem alguma condição Fisiopatológica ?'
            description='(Diabetes, pressão alta, limitações fisicas...)'
            descriptionStyle={{ width: 400, textAlign: 'center' }}
        >
            <View style={[styles.content, { width: "80%" }]}>
                <ButtonSelectMulti text={"Sim"} isSelect onPress={() => { }} />
                <ButtonSelectMulti text={"Não"} onPress={() => { }} />
                {isSelected == "Sim" && (<>
                    <Text style={[styles.descriptionAge, { textAlign: 'left', width: "90%" }]}>Qual?</Text>
                    <TextInput style={[styles.textInput, { width: "90%" }, isFocus && { borderBottomColor: colors.green_100 }, isField && { borderBottomColor: colors.green_100 }]} onChange={() => { }} onFocus={handleFocus} onBlur={handleBlur} />
                </>)
                }
            </View>

        </PageRegister>
    )
}
