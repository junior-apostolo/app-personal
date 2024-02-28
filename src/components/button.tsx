import { Box, Text } from "@/utils/theme";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  uppercase?: boolean
};

export const Button = ({
  label,
  onLongPress,
  onPress,
  disabled,
  uppercase
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled} style={{ opacity: 0.9 }}>
      <Box
        bg={disabled ? "gray800" : "primary"}
        py="4"
        borderRadius="rounded-7xl"
      >
        <Text
          variant="textXs"
          fontWeight="700"
          color="white"
          textAlign="center"
          textTransform={uppercase ? "uppercase" : "none"}
        >
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
