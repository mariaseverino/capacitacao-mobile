import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Image
                style={styles.headerImage}
                source={{
                    uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE2SURBVHgB7dnRrYJAEAXQ6wv/75VACXbwpANasAJjBWoFagXagXYgdkAH0oFawXrHLImfLOss0cxJ1pWPZW6IwmSBc27twizwgsczjqvTc+EopdZIjhBoRD7ohNMJaRQ/iFMinTI27B/S+Y0Nm5SF1WJhtVhYLRZWi4StEKbCQDL2JIVvSLq4cTQYSCYfDFzhAzzD8sqOOY3DluKIxDLfTC8RrkFi8gdb4kPYfVaLhdViYZXcY8NWSKeOCTvhY3rPeQt9K6nVa0fGk6ZmLifhKXJ+z6GjZg2phZiwrQbdfw5yhRr09I6wIYq2w/Ntad5x3Y3rjhkG4HcFD4FrpkPduvrskf3bQ0GLhdViYbVYWC1fv9cVo0YECbtCGvu21evp/vqmcAE9Z45NG5b1pDfYoXuP8OydH9d1685iMzzpAAAAAElFTkSuQmCC",
                }}
            />
            <Text style={styles.headerText}>Comic Comp</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#023047",
        marginTop: 20,
        height: 60,
        shadowColor: "#000",
        shadowOffset: { height: 5, width: 5 },
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    headerText: {
        color: "#fff",
        marginLeft: 10,
        fontSize: 16,
    },
    headerImage: {
        height: 25,
        width: 25,
    },
});
