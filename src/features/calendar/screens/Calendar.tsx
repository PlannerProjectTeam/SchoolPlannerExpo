/**
 * Screen: Calendar
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Switch } from "react-native";
import { globalStyles } from "@/src/shared/style/globalStyles";
import { NavigationBar } from "@/src/shared/components/NavigationBar";
import { ListMode } from "@/src/features/calendar/components/ListMode";
import { DayMode } from "@/src/features/calendar/components/DayMode";
import { WeekMode } from "@/src/features/calendar/components/WeekMode";
import { DateSelection } from "@/src/features/calendar/components/DateSelection";
import { useThemeContext } from "@/src/shared/state/themeProvider";

const Calendar = ({navigation} : any) => {
    enum calendarMode {
        ListMode, DayMode, WeekMode
    }

    const [isListMode, setListMode] = useState(true);
    const [isDayMode, setDayMode] = useState(false);
    const [isWeekMode, setWeekMode] = useState(false);

    // Not used right now!
    const setCalendarMode = (mode : calendarMode) => {
        setListMode(mode == calendarMode.ListMode)
        setDayMode(mode == calendarMode.DayMode);
        setWeekMode(mode == calendarMode.WeekMode);
    }

    const { currentTheme, setCurrentTheme } = useThemeContext();

    return (
        <>
        <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>
            <DateSelection/>
            <View style={styles.listModeSwitchContainer}>
                <Text style={[styles.listModeSwitchText, globalStyles.switchText]}>LIST MODE</Text>
                <Switch style={styles.listModeSwitch} trackColor={{false: '#767577', true: currentTheme}} thumbColor={isListMode ? 'white' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={() => {setListMode(!isListMode)}} value={isListMode}></Switch>
            </View>
            {isListMode? <ListMode/> : null}
            {isDayMode? <DayMode/> : null}
            {isWeekMode? <WeekMode/> : null}
        </ScrollView>
        <NavigationBar navigation={navigation}></NavigationBar>
        </>
    )
}

export default Calendar

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: 'white'
    },

    listModeSwitchContainer: {
        marginHorizontal: 25,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        margin: 10,
        maxHeight: 30,
    },
    listModeSwitch: {
        transform: [{ scaleX: 1 }, { scaleY: 1 }],
    },
    listModeSwitchText: {
        marginHorizontal: 15,
    }
});