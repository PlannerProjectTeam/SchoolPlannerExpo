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
import { Switch } from "react-native";

// Custom
import { globalStyles, Scheme } from "@/constants/globalStyles";
import { NavBar } from "@/components/elements/NavBar";
import { ListMode } from "@/components/containers/ListMode";
import { DayMode } from "@/components/containers/DayMode";
import { WeekMode } from "@/components/containers/WeekMode";
import { DateSelection } from "@/components/containers/DateSelection";

export type CalendarProps = NativeStackScreenProps<RootStackParameters, 'Calendar'>;

const Calendar = ({navigation} : CalendarProps) => {

    enum calendarMode {
        ListMode, DayMode, WeekMode
    }

    const [isListMode, setListMode] = useState(true);
    const [isDayMode, setDayMode] = useState(false);
    const [isWeekMode, setWeekMode] = useState(false);

    const setCalendarMode = (mode : calendarMode) => {
        setListMode(mode == calendarMode.ListMode)
        setDayMode(mode == calendarMode.DayMode);
        setWeekMode(mode == calendarMode.WeekMode);
    }

    return (
        <>
            <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.listModeSwitchContainer}>
                    <Switch style={styles.listModeSwitch} trackColor={{false: '#767577', true: Scheme.darkPurple}} thumbColor={isListMode ? 'white' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={() => (setListMode(!isListMode))} value={isListMode}></Switch>
                </View>
                <DateSelection/>
                {isListMode? <ListMode/> : null}
                {isDayMode? <DayMode/> : null}
                {isWeekMode? <WeekMode/> : null}
            </ScrollView>
            <NavBar navigation={navigation}></NavBar>
        </>
    )
}

export default Calendar

const styles = StyleSheet.create({
    screenContainer: {
        minHeight: Dimensions.get('window').height,
        minWidth: Dimensions.get('window').width,
        backgroundColor: 'white'
    },
    listModeSwitch: {

    },
    listModeSwitchContainer: {
        alignSelf: 'flex-end',
        margin: 10,
    }
});