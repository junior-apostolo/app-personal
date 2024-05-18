import { theme } from "@/theme";
import { View, Text, StyleSheet } from "react-native";
import Bottom, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ReactNode, forwardRef, useCallback } from "react";
import { colors } from "@/theme/colors";
import { MaterialIcons } from "@expo/vector-icons";

export type Props = {
  onClose?: () => void;
  title: string;
  children: ReactNode;
  snapPoints: number[];
};

export const MenuBottomSheet = forwardRef<Bottom, Props>(
  ({ onClose, children, snapPoints, title }, ref) => {
    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={1}
          disappearsOnIndex={0}
        />
      ),
      []
    );

    return (
      <Bottom
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: colors.white,
        }}
        backdropComponent={renderBackdrop}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{title}</Text>

          <View style={styles.contentContainer}>{children}</View>
        </View>
      </Bottom>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  text: {
    color: theme.colors.black,
    fontFamily: theme.fonts.medium,
    fontSize: theme.fonts.size.heading.md,
    fontWeight: "600",
  },
});
