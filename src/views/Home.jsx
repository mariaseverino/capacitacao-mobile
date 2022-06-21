import { ScrollView, StyleSheet, Text, View } from "react-native";
import Carrossel from "../components/Carrossel";

import { data } from "../services/data";

export default function Home(props) {
    function handleNavigation(card) {
        props.navigation.push("InfoCard", { infoCard: card });
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>HQs Populares</Text>
                <Carrossel data={data} handleNavigation={handleNavigation} />
                <Text style={styles.title}>DC Comics</Text>

                <Carrossel
                    data={data.filter((item) => item.company === "DC")}
                    handleNavigation={handleNavigation}
                />
                <Text style={styles.title}>Marvel</Text>

                <Carrossel
                    data={data.filter((item) => item.company === "Marvel")}
                    handleNavigation={handleNavigation}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8ddcb",
    },
    title: {
        fontSize: 18,
        marginHorizontal: 5,
        color: "#023047",
        marginVertical: 5,
        fontWeight: "bold",
    },
});
