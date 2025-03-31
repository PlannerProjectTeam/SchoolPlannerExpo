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
import { CoursesFakeData, EventsFakeData, TasksFakeData } from "@/testing/fake-data/itemcards"
import { CARD_CATEGORY } from "@/src/features/calendar/types/ListModeCard"

export const ListMode = () => {

    return (
        <>        
        <View style={[styles.container]}>
            <Text style={[globalStyles.sectionHeadingText, styles.verticalMargin]}> Tasks </Text>
            {[...TasksFakeData].map(({id, color, name, description, dueDate}) => (
                <ListModeCard key={id} color={color} title={name} subtitle={dueDate} footer={description}/> 
            ))}

            <Text style={[globalStyles.sectionHeadingText, styles.verticalMargin]}> Events </Text>
            {[...EventsFakeData].map(({id, color, name, initialDate, description}) => (
                <ListModeCard key={id} color={color} title={name} subtitle={initialDate} footer={description}/> 
            ))}

            <Text style={[globalStyles.sectionHeadingText, styles.verticalMargin]}> Courses </Text>
            {[...CoursesFakeData].map(({id, color, name, startTime, endTime, location}) => (
                <ListModeCard key={id} color={color} title={name} subtitle={startTime} footer={location}/> 
            ))}
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