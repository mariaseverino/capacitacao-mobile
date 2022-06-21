import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function InfoCard({ route, navigation }) {
    const { infoCard } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.bloco}>
                <Image
                    style={styles.image}
                    source={{
                        uri: infoCard.img,
                    }}
                />
                <Text style={styles.subTitle}>{infoCard.name}</Text>
                <Text style={styles.subTitle2}>{infoCard.company}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.title}>Descrição</Text>
                <Text style={styles.text}>{infoCard.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#023047",
    },

    bloco: {
        backgroundColor: "#023047",
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },
    description: {
        backgroundColor: "#e8ddcb",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    image: {
        height: 180,
        width: 120,
        borderRadius: 8,
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        color: "#023047",
        fontWeight: "bold",
    },
    text: {
        fontSize: 14,
        marginHorizontal: 10,
        color: "#023047",
    },
    subTitle: {
        fontSize: 16,
        color: "#d6c496",
    },
    subTitle2: {
        fontSize: 14,
        color: "#d6c496",
    },
});
