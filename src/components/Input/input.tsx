import { theme } from "@/theme";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";

type InputProps = TextInputProps & {
  label: string;
  placeholder?: string;
  error?: undefined;
  value: string;
  onChangeText: (text: string) => void;
  password?: boolean;
};

export const Input = ({
  label,
  placeholder,
  onChangeText,
  value,
  password,
  ...rest
}: InputProps) => {
  return (
    <View style={styles.containerInput}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        {...rest}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        selectionColor={theme.colors.blue_200}
        cursorColor={theme.colors.blue_200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "column",
    gap: 8,
    marginBottom: 20,
  },
  text: {
    textTransform: "uppercase",
    fontSize: theme.fonts.size.body.sm,
    lineHeight: theme.fonts.size.body.sm,
  },
  input: {
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.gray[100],
    borderRadius: theme.borderRadius.sm,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.size.body.sm,
  },

  inputField: {
    marginVertical: 4,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
  },
});
