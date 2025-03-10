/**
 * Screen: Calendar
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    Pressable,
    ScrollView
} from 'react-native'

// 3rd Party 
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParameters } from "./_layout";

// Custom
import { globalStyles, Scheme } from "@/constants/globalStyles";
import { NavBar } from "@/components/elements/NavBar";
import { ListMode } from "@/components/containers/ListMode";
import { DayMode } from "@/components/containers/DayMode";
import { WeekMode } from "@/components/containers/WeekMode";
import { DateSelection } from "@/components/containers/DateSelection";

export type CalendarProps = NativeStackScreenProps<RootStackParameters, 'Calendar'>;

const Calendar = ({navigation} : CalendarProps) => {
    const [isListMode, setListMode] = useState(true);
    const [isDayMode, setDayMode] = useState(false);
    const [isWeekMode, setWeekMode] = useState(false);

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScrollView>
                <DateSelection/>
                {isListMode? <ListMode/> : null}
                {isDayMode? <DayMode/> : null}
                {isWeekMode? <WeekMode/> : null}
            </ScrollView>
            <NavBar navigation={navigation}></NavBar>
        </SafeAreaView>
    )
}

export default Calendar

const styles = StyleSheet.create({
    screenContainer: {
        minHeight: Dimensions.get('window').height,
        minWidth: Dimensions.get('window').width,
        backgroundColor: 'white'
    },
});