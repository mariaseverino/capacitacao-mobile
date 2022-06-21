import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Card from "./Card";

export default function Carrossel({ data, handleNavigation }) {
    return (
        <View style={styles.carrosselView}>
            <FlatList
                data={data}
                horizontal={true}
                renderItem={({ item }) => (
                    <Card data={item} handleNavigation={handleNavigation} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    carrosselView: {
        height: 195,
        padding: 5,
    },
});
