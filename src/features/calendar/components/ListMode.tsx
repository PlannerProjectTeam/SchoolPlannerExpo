/**
 * Component: List Mode
 * Displays all events, tasks, and courses for a particular day with cards.
 * @author Cyrus M. // Last modified by.
 * @date 03/22/25
 */

import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { globalStyles } from "@/src/shared/style/globalStyles"
import { ListModeCard } from "./ListModeCard"
import { ItemCardFakeData } from "@/testing/fake-data/itemcards"
import { CARD_CATEGORY } from "@/src/features/calendar/types/ListModeCard"

export const ListMode = () => {

    return (
        <>        
        <View style={[styles.container]}>
            <Text style={[globalStyles.sectionHeadingText, styles.verticalMargin]}> Tasks </Text>
            {[...ItemCardFakeData].map(({id, color, title, subtitle, footer, type}) => (
                type == CARD_CATEGORY.Task? 
                    <ListModeCard key={id} color={color} title={title} subtitle={subtitle} footer={footer}/> 
                : null ))}

            <Text style={[globalStyles.sectionHeadingText, styles.verticalMargin]}> Events </Text>
            {[...ItemCardFakeData].map(({id, color, title, subtitle, footer, type}) => (
                type == CARD_CATEGORY.Event? 
                    <ListModeCard key={id} color={color} title={title} subtitle={subtitle} footer={footer}/> 
                : null ))}

            <Text style={[globalStyles.sectionHeadingText, styles.verticalMargin]}> Courses </Text>
            {[...ItemCardFakeData].map(({id, color, title, subtitle, footer, type}) => (
                type == CARD_CATEGORY.Course? 
                    <ListModeCard key={id} color={color} title={title} subtitle={subtitle} footer={footer}/> 
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
        marginBottom: Dimensions.get('screen').height * 0.15,
    },
    verticalMargin: {
        marginVertical: 10,
    },
    cardOptions: {

    }
})