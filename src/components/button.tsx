import { Box, Text } from "@/utils/theme";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export const Button = () => {
  return (
    <TouchableOpacity  style={{opacity: 0.9}}>
      <Box bg="primary" p="4" borderRadius="rounded-2xl">
        <Text color="white" >Button component</Text>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
