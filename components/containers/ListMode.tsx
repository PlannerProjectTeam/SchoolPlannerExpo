import React from "react"
import { View, Text, StyleSheet, Pressable, ScrollView, Dimensions } from "react-native"
import { globalStyles } from "@/constants/globalStyles"
import { ItemCard } from "../elements/ItemCard"
import { ItemCardFakeData } from "@/testing/fake-data/itemcards"
import { ItemCardTypes } from "@/classes/ItemCardData"

export const ListMode = () => {
    return (
        <>
        <View style={[styles.container]}>
            <Text style={[globalStyles.sectionHeadingText, styles.verticalMargin]}> Tasks </Text>
            {[...ItemCardFakeData].map(({id, color, title, subtitle, footer, type}) => (
                type == ItemCardTypes.Task? 
                    <ItemCard key={id} color={color} title={title} subtitle={subtitle} footer={footer}/> 
                : null ))}

            <Text style={[globalStyles.sectionHeadingText, styles.verticalMargin]}> Events </Text>
            {[...ItemCardFakeData].map(({id, color, title, subtitle, footer, type}) => (
                type == ItemCardTypes.Event? 
                    <ItemCard key={id} color={color} title={title} subtitle={subtitle} footer={footer}/> 
                : null ))}

            <Text style={[globalStyles.sectionHeadingText, styles.verticalMargin]}> Courses </Text>
            {[...ItemCardFakeData].map(({id, color, title, subtitle, footer, type}) => (
                type == ItemCardTypes.Course? 
                    <ItemCard key={id} color={color} title={title} subtitle={subtitle} footer={footer}/> 
                : null ))}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginHorizontal: 15,
        marginBottom: Dimensions.get('screen').height * 0.3,
    },
    verticalMargin: {
        marginVertical: 10,
    },
    cardOptions: {

    }
})