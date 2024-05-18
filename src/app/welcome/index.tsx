import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";

import { theme } from "@/theme";

import * as Animatable from "react-native-animatable";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        {/* <Image
          source={}
          style={{}}
          resizeMode="contain"
        /> */}
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>Bem-vindo ao melhor app fitness</Text>
        <Text style={styles.text}>Faça login para iniciar</Text>

        {/* <Link href="/login/" asChild> */}
        <Link href="/(protected)/(views)/(register)/users" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </Pressable>
        </Link>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue_600,
  },
  title: {
    fontSize: theme.fonts.size.heading.lg,
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    fontSize: theme.fonts.size.heading.md,
    color: theme.colors.gray[600],
    fontFamily: theme.fonts.regular,
  },
  button: {
    position: "absolute",
    backgroundColor: theme.colors.blue_600,
    borderRadius: theme.borderRadius.lg,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: theme.fonts.size.heading.sm,
    fontFamily: theme.fonts.regular,
    color: theme.colors.white_200,
  },
  containerLogo: {
    flex: 2,
    backgroundColor: theme.colors.blue_600,
  },
  containerForm: {
    flex: 1,
    backgroundColor: theme.colors.white_200,
    borderTopLeftRadius: theme.borderRadius.xl,
    borderTopRightRadius: theme.borderRadius.xl,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
});


// import React, { useState } from 'react';
// import {
// 	Text,
// 	KeyboardAvoidingView,
// 	Platform,
// 	StyleSheet,
// 	TextInput,
// 	TouchableOpacity
// } from 'react-native';
// import { useAuth } from '../context/AuthContext';

// const Page = () => {
// 	const [username, setUsername] = useState('');
// 	const [password, setPassword] = useState('');
// 	const { onLogin } = useAuth();

// 	const onSignInPress = async () => {
// 		onLogin!(username, password);
// 	};

// 	return (
// 		<KeyboardAvoidingView
// 			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// 			style={styles.container}
// 		>
// 			<Text style={styles.header}>My Epic App</Text>
// 			<TextInput
// 				autoCapitalize="none"
// 				placeholder="admin"
// 				value={username}
// 				onChangeText={setUsername}
// 				style={styles.inputField}
// 			/>
// 			<TextInput
// 				placeholder="password"
// 				value={password}
// 				onChangeText={setPassword}
// 				secureTextEntry
// 				style={styles.inputField}
// 			/>

// 			<TouchableOpacity onPress={onSignInPress} style={styles.button}>
// 				<Text style={{ color: '#fff' }}>Sign in</Text>
// 			</TouchableOpacity>
// 		</KeyboardAvoidingView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		padding: 20,
// 		paddingHorizontal: '20%',
// 		justifyContent: 'center'
// 	},
// 	header: {
// 		fontSize: 30,
// 		textAlign: 'center',
// 		marginBottom: 40
// 	},
// 	inputField: {
// 		marginVertical: 4,
// 		height: 50,
// 		borderWidth: 1,
// 		borderColor: '#ccc',
// 		borderRadius: 4,
// 		padding: 10
// 	},
// 	button: {
// 		marginVertical: 15,
// 		alignItems: 'center',
// 		backgroundColor: '#111233',
// 		padding: 12,
// 		borderRadius: 4
// 	}
// });
// export default Page;