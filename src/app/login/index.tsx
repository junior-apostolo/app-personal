import { Input } from '@/components/input';
import { Link } from 'expo-router';
import { View, Text } from 'react-native'
import { StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons'
import { theme } from '@/theme';


export default function Login() {
  return (
    <View style={styles.container}>
      <Link href="welcome">Voltar para Welcome</Link>
      <Input>
        <Feather name='search' size={16} color={theme.colors.gray[300]}/>
        <Input.Field placeholder='Insira o Nome' />
      </Input>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})