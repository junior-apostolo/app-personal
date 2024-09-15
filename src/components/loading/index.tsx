import { ActivityIndicator } from "react-native"
import { styles } from "./styles"
import { theme } from "@/theme"


export function Loading() {
    return(
        <ActivityIndicator size="large" style={styles.loading} color={theme.colors.blue_700}/>
    )
}