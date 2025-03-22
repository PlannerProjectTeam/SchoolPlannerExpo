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
    ScrollView
} from 'react-native'

// 3rd Party 
import { Switch } from "react-native";

// Custom
import { globalStyles } from "@/constants/globalStyles";
import { NavBar } from "@/components/elements/NavBar";
import { ListMode } from "@/components/containers/ListMode";
import { DayMode } from "@/components/containers/DayMode";
import { WeekMode } from "@/components/containers/WeekMode";
import { DateSelection } from "@/components/containers/DateSelection";
import { useThemeContext } from "@/constants/ThemeProvider";

const Calendar = ({navigation} : any) => {

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
        <NavBar navigation={navigation}></NavBar>
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