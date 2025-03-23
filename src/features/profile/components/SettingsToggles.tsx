/**
 * Component: Setting Toggles
 * Switches in the settings for enabling/disabling 24-hour-clock, dark mode, etc.
 * 
 * @author Cyrus M. // Last modified by.
 * @date 03/22/25
 */

import { View, Text, StyleSheet, Switch } from "react-native"
import { useState, useEffect } from "react"
import { globalStyles } from "@/src/shared/style/globalStyles"
import { Colors } from "@/src/shared/style/globalStyles"
import { useThemeContext } from "@/src/shared/state/themeProvider"
import AsyncStorage from '@react-native-async-storage/async-storage'

export const SettingToggles =  () => {
    const {currentTheme} = useThemeContext();
    const [sundayStartEnabled, setSundayStartEnabled] = useState(false);
    const [twentyFourHourEnabled, setTwentyFourHourEnabled] = useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  
    useEffect(() => {
        const loadSettings = async () => {
            try {
                const twentyFourHour = await AsyncStorage.getItem('twentyFourHourEnabled');
                if (twentyFourHour !== null) { setTwentyFourHourEnabled(JSON.parse(twentyFourHour)); }
            } catch (error) {}

            try {
                const sundayStart = await AsyncStorage.getItem('sundayStartEnabled');
                if (sundayStart !== null) { setSundayStartEnabled(JSON.parse(sundayStart)); }
            } catch (error) {}

            try {
                const darkMode = await AsyncStorage.getItem('darkModeEnabled');
                if (darkMode !== null) { setDarkModeEnabled(JSON.parse(darkMode)); }
            } catch (error) {}
        };

        loadSettings();
    }, []);

    useEffect(() => {
        const saveSettings = async () => {
            try {
                await AsyncStorage.setItem('twentyFourHourEnabled', JSON.stringify(twentyFourHourEnabled));
            } catch (error) {}

            try {
                await AsyncStorage.setItem('sundayStartEnabled', JSON.stringify(sundayStartEnabled));
            } catch (error) {}

            try {
                await AsyncStorage.setItem('darkModeEnabled', JSON.stringify(darkModeEnabled));
            } catch (error) {}
        };

        saveSettings();
    }, [darkModeEnabled, twentyFourHourEnabled, sundayStartEnabled]);

    return (
        <>
        {/* 
        Unusable right now. Issue with button appearing behind track. 
        <Toggle onPress={() => (setTwentyFourHourEnabled(!twentyFourHourEnabled))} value={twentyFourHourEnabled} thumbButton={{ activeBackgroundColor: 'white', inActiveBackgroundColor: 'white', width: 25, height: 25, radius: 25, borderWidth: 1 }} trackBar={{ activeBackgroundColor: getCurrentTheme(), inActiveBackgroundColor: 'grey', width: 40, height: 20, radius: 25 }} ></Toggle> 
        */}
       
        <Text style={[globalStyles.sectionHeadingText]}>Settings</Text>

        <View style={styles.switchContainer}>
            <Switch style={styles.switch} trackColor={{false: '#767577', true: currentTheme}} thumbColor={twentyFourHourEnabled ? 'white' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={(newValue) => {setTwentyFourHourEnabled(newValue)}} value={twentyFourHourEnabled}></Switch>
            <Text style={[styles.switchText]}>24-HOUR CLOCK</Text>
        </View>
        
        <View style={styles.switchContainer}>
            <Switch style={styles.switch} trackColor={{false: '#767577', true: currentTheme}} thumbColor={darkModeEnabled ? 'white' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={(newValue) => {setDarkModeEnabled(newValue); }} value={darkModeEnabled}></Switch>
            <Text style={[styles.switchText]}>DARK MODE</Text>
        </View>
        
        <View style={styles.switchContainer}>
            <Switch style={styles.switch} trackColor={{false: '#767577', true: currentTheme}} thumbColor={sundayStartEnabled ? 'white' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={(newValue) => {setSundayStartEnabled(newValue); }} value={sundayStartEnabled}></Switch>
            <Text style={[styles.switchText]}>START WEEK ON SUNDAY</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
        maxHeight: 30,
        padding: 0,
    },
    switch: {
        transform: [{ scaleX: 1 }, { scaleY: 1 }],
        borderWidth: 1,
    },
    newSwitch: {

    },
    switchText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '200',
        textAlignVertical: 'center',
        color: Colors.darkGrey
    },
})