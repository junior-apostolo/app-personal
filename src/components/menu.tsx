import { theme } from "@/theme";
import { View, Text, StyleSheet } from "react-native";
import Bottom, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
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
          backgroundColor: colors.white_200,
        }}
        backdropComponent={renderBackdrop}
      >
        <View className="p-8 gap-4">
          <View className="flex-row">
            <Text style={styles.text}>
              {title}
            </Text>

            {/* <MaterialIcons
              name="close"
              size={24}
              color={colors.white_200}
              onPress={onClose}
            /> */}
          </View>
          {children}
        </View>
      </Bottom>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    flex: 1,
    color: theme.colors.black,
    fontFamily: theme.fonts.medium,
    fontSize: theme.fonts.size.heading.md,
    fontWeight: '600'
  },
});
