import { View, Text, StyleSheet, Switch } from "react-native"
import { useState } from "react"
import { globalStyles } from "@/constants/globalStyles"
import { Colors } from "@/constants/globalStyles"
import { useThemeContext } from "@/constants/ThemeProvider"


export const SettingToggles =  () => {
    const [sundayStartEnabled, setSundayStartEnabled] = useState(false);
    const [twentyFourHourEnabled, setTwentyFourHourEnabled] = useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    const { currentTheme, setCurrentTheme } = useThemeContext();
        
    return (
        <>
        {/* Unusable right now, issue with button appearing behind track (waiting for fix)
        <Toggle onPress={() => (setTwentyFourHourEnabled(!twentyFourHourEnabled))} value={twentyFourHourEnabled} thumbButton={{ activeBackgroundColor: 'white', inActiveBackgroundColor: 'white', width: 25, height: 25, radius: 25, borderWidth: 1 }} trackBar={{ activeBackgroundColor: getCurrentTheme(), inActiveBackgroundColor: 'grey', width: 40, height: 20, radius: 25 }} ></Toggle> */}
       
        <Text style={[globalStyles.sectionHeadingText]}>Settings</Text>

        <View style={styles.switchContainer}>
            <Switch style={styles.switch} trackColor={{false: '#767577', true: currentTheme}} thumbColor={twentyFourHourEnabled ? 'white' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={() => (setTwentyFourHourEnabled(!twentyFourHourEnabled))} value={twentyFourHourEnabled}></Switch>
            <Text style={[styles.switchText]}>24-HOUR CLOCK</Text>
        </View>
        
        <View style={styles.switchContainer}>
            <Switch style={styles.switch} trackColor={{false: '#767577', true: currentTheme}} thumbColor={darkModeEnabled ? 'white' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={() => (setDarkModeEnabled(!darkModeEnabled))} value={darkModeEnabled}></Switch>
            <Text style={[styles.switchText]}>DARK MODE</Text>
        </View>
        
        <View style={styles.switchContainer}>
            <Switch style={styles.switch} trackColor={{false: '#767577', true: currentTheme}} thumbColor={sundayStartEnabled ? 'white' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={() => (setSundayStartEnabled(!sundayStartEnabled))} value={sundayStartEnabled}></Switch>
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