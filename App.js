import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Stack from "./src/routes/Stack";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#023047" style="light" />
            <Stack />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
