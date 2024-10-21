import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import { styles } from "./styles";
import * as Animatable from 'react-native-animatable';


export default function Welcome() {


  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../../assets/logo-image.png')}
          style={{ width: '100%', marginTop: 100, height: 180 }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>Bem-vindo ao melhor app fitness</Text>
        <Text style={styles.text}>Faça login para iniciar</Text>

        <Link href="login" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </Pressable>
        </Link>
      </Animatable.View>
    </View>
  );
}
