import { Input } from '@/components/input';
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from '@/theme';
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
  return (
    <View style={styles.container}>

      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.text}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Input>
          <Feather name='user' size={16} color={theme.colors.black} />
          <Input.Field placeholder='E-mail' />
        </Input>

        <Input>
          <Feather name='eye' size={16} color={theme.colors.black} />
          <Input.Field placeholder='Senha' secureTextEntry autoCorrect={false} keyboardType='default' />
        </Input>


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <Link href="welcome">Voltar para Welcome</Link>
      </Animatable.View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.bg_color,
    paddingHorizontal: 24
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
    fontSize: 18,
  },
  containerForm: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  button: {
    backgroundColor: theme.colors.blue_600,
    width: "100%",
    height: 50,
    borderRadius: 12,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
})