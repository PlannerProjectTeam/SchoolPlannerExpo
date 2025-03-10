import React from "react"
import { View, Text, StyleSheet, Pressable, ScrollView, Dimensions } from "react-native"
import { globalStyles } from "@/constants/globalStyles"

export const DateSelection = () => {
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height * 0.15,
    }
})