import { TextInput, View, ViewProps, TextInputProps } from "react-native";
import { styles } from "./styles";
import { theme } from "@/theme";


function Input({ children, style }: ViewProps) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View> 
  )
}

function Field({...rest}: TextInputProps) {
  // Importante que ...rest fique como ultima propriedade, pois...
  return <TextInput style={styles.input} placeholderTextColor={theme.colors.gray[300]} {...rest}/>
}

// adicionando Field como uma propriedade dentro de Input
Input.Field = Field

export { Input }