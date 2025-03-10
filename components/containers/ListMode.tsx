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
            <Text style={[globalStyles.sectionHeadingText, styles.sectionHeading]}> Tasks </Text>
            {[...ItemCardFakeData].map(({id, color, title, subtitle, footer, type}) => (
                type == ItemCardTypes.Task? 
                    <ItemCard key={id} color={color} title={title} subtitle={subtitle} footer={footer}/> 
                : null ))}

            <Text style={[globalStyles.sectionHeadingText, styles.sectionHeading]}> Events </Text>
            {[...ItemCardFakeData].map(({id, color, title, subtitle, footer, type}) => (
                type == ItemCardTypes.Event? 
                    <ItemCard key={id} color={color} title={title} subtitle={subtitle} footer={footer}/> 
                : null ))}

            <Text style={[globalStyles.sectionHeadingText, styles.sectionHeading]}> Courses </Text>
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
        marginLeft: 15,
        marginBottom: Dimensions.get('screen').height * 0.3,
    },
    sectionHeading: {
        marginVertical: 10,
    },
    cardOptions: {

    }
})