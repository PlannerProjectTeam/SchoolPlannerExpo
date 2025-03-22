import React, { useState } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { globalStyles } from "@/constants/globalStyles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Colors } from "@/constants/globalStyles"
import { useThemeContext } from "@/constants/ThemeProvider"
import { ReminderIntervals } from "@/constants/ReminderIntervals"

export const ReminderSelector =  () => {
    const { currentTheme, setCurrentTheme } = useThemeContext();
    const [ enabledReminderIntervals, setEnabledReminderIntervals ] = useState<number[]>([]);

    const toggleInterval = (intervalHour : number) => {
        if (enabledReminderIntervals.includes(intervalHour)) {
            setEnabledReminderIntervals(enabledReminderIntervals.filter((hour) => hour != intervalHour));
        } else {
            setEnabledReminderIntervals([...enabledReminderIntervals, intervalHour]);
        }
    };

    return (
        <>
        <View style={styles.container}>
            <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="bell-ring" size={45} color={currentTheme} />
                <Text style={globalStyles.descriptionText}>REMIND</Text>
            </View>
            
            <View style={styles.allThemesContainer}>
                {Object.entries(ReminderIntervals).map(([key, interval]) => (
                    enabledReminderIntervals.includes(interval.hourDuration)?
                        <TouchableOpacity style={[styles.intervalButton, {backgroundColor: currentTheme}]} key={interval.displayName} onPressIn={() => (toggleInterval(interval.hourDuration))}>
                            <Text style={[styles.intervalText, {color: 'white'}]}>{interval.displayName}</Text>
                        </TouchableOpacity>
                    :
                        <TouchableOpacity style={[styles.intervalButton, {backgroundColor: 'white'}]} key={interval.displayName} onPressIn={() => (toggleInterval(interval.hourDuration))}>
                            <Text style={[styles.intervalText, {color: 'black'}]}>{interval.displayName}</Text>
                        </TouchableOpacity>
                ))}
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * .90,
        height: 150,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 15,
        paddingRight: 10,
        backgroundColor: Colors.veryLightGrey
    },
    iconContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    allThemesContainer: {
        flex: 3,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        maxWidth: 240,
        maxHeight: 120,
    },
    intervalButton: {
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 12,
        elevation: 2,
        minWidth: 60,
        maxHeight: 30,
        textAlign: 'center',
        justifyContent: 'center'
    },
    intervalText: {
        fontSize: 12,
        textAlign: 'center',
        borderWidth: 0,
    }
})