import { TextInput, View, ViewProps, TextInputProps } from "react-native";
import { styles } from "./styles";


function Input({ children }: ViewProps) {
  return (
    <View style={styles.container}>
      {children}
    </View> 
  )
}

function Field({...rest}: TextInputProps) {
  return <TextInput  {...rest}/>
}

Input.Field = Field

export { Input }