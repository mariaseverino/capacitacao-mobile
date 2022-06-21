import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Card({ data, handleNavigation }) {
    return (
        <TouchableOpacity
            onPress={() => handleNavigation(data)}
            style={styles.cardContainer}
        >
            <Image
                style={styles.image}
                source={{
                    uri: data.img,
                }}
            />
            {/* <Text style={styles.InfoText}>{data.name}</Text> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 180,
        width: 120,
        backgroundColor: "#FFF",
        borderRadius: 8,
        marginHorizontal: 2,
    },
    cardText: {
        fontSize: 12,
        color: "#737380",
        marginRight: 5,
        marginBottom: 5,
    },
    cardTitle: {
        fontSize: 14,
        color: "#41414D",
    },
    avaliableView: {
        display: "flex",
        flexDirection: "row",
    },
    InfoText: {
        color: "#FFF",
        fontSize: 12,
        position: "absolute",
        bottom: 5,
    },
    image: {
        height: 180,
        width: 120,
        borderRadius: 8,
    },
});
