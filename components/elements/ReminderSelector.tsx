import React, { PropsWithChildren, useState } from "react"
import { View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity } from "react-native"
import { globalStyles } from "@/constants/globalStyles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Colors } from "@/constants/globalStyles"
import { Themes, useThemeContext } from "@/constants/ThemeProvider"
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
                        <TouchableOpacity style={[styles.intervalButton, {backgroundColor: currentTheme}]} key={interval.displayName} onPress={() => (toggleInterval(interval.hourDuration))}>
                            <Text style={[styles.intervalText, {color: 'white'}]}>{interval.displayName}</Text>
                        </TouchableOpacity>
                    :
                        <TouchableOpacity style={[styles.intervalButton, {backgroundColor: 'white'}]} key={interval.displayName} onPress={() => (toggleInterval(interval.hourDuration))}>
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
        height: 100,
        justifyContent: 'flex-start',
        alignContent: 'center',
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
        maxWidth: 240
    },
    intervalButton: {
        marginHorizontal: 5,
        marginVertical: 4,
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 15,
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