import theme, { Box, Text } from "@/utils/theme";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

type InputProps = {
  label: string;
  placeholder?: string;
  error?: undefined;
} & TextInputProps;

export const Input = ({ label, placeholder }: InputProps) => {
  return (
    <Box flexDirection="column" mb="6">
      <Text variant="textXs" textTransform="uppercase" mb="3.5">
        {label}
      </Text>
      <TextInput
      style={{
        padding:16,
        borderWidth: 1,
        borderColor: theme.colors.gray,
        borderRadius: theme.borderRadii["rounded-7xl"]
      }}
      placeholder={placeholder}
      />
    </Box>
  );
};

const styles = StyleSheet.create({});
