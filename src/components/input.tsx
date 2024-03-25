import { theme } from "@/theme";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";

type InputProps = {
  label: string;
  placeholder?: string;
  error?: undefined;
} & TextInputProps;

export const Input = ({ label, placeholder }: InputProps) => {
  return (
    <View style={styles.containerInput}>
      <Text style={styles.text}>
        {label}
      </Text>
      <TextInput style={styles.input} placeholder={placeholder}/>
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
    textTransform: 'uppercase',
    fontSize: theme.fonts.size.heading.xs,
    lineHeight: theme.fonts.size.heading.sm
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.gray[600],
    borderRadius: theme.borderRadius.xl,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.size.body.sm
  }
});
