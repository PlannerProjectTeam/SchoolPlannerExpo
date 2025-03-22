/**
 * Screen: Profile & Settings
    * Manage courses
    * View and manage profile and ID number
    * Toggle 24-hour, dark mode, and week start date settings
    * Change app theme
    * Update global reminder intervals
    * Restore deleted items from trash
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    Switch,
    ScrollView
} from 'react-native'

// 3rd Party 
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Custom
import { NavBar } from "@/components/elements/NavBar";
import { RootStackParameters } from "./_layout";
import { ThemeSelector } from "@/components/elements/ThemeSelector";
import { SettingsSwitches } from "@/components/elements/SettingsSwitches";
import { useThemeContext } from "@/constants/ThemeProvider";
import { ReminderSelector } from "@/components/elements/ReminderSelector";
import { ProfileSection } from "@/components/elements/ProfileSection";

const Profile = ({navigation} : any) => {
    const { currentTheme, setCurrentTheme } = useThemeContext();

    return (
        <>
        <ScrollView>
            <ProfileSection navigation={navigation}/>
            <View style={styles.settingsContainer}>
                <SettingsSwitches/>
                <ThemeSelector/>
                <ReminderSelector/>
            </View>
        </ScrollView>

        <NavBar navigation={navigation}/>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({
    profileHeader: {
        height: 175,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    profileImage: {
        width: 150,
        height: 150,
        marginBottom: -50
    },
    profileHeaderText: {
        flex: 1,
        color: 'white',
        textAlignVertical: 'center'
    },

    coursesButton: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    coursesButtonText: {
        fontSize: 20,
        marginLeft: 10,
        textAlignVertical: 'center',
    },

    extrasContainer: {
        marginTop: 20,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    settingsContainer: {
        marginHorizontal: 20,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    leftMargin: {
        marginHorizontal: 10,
    }
})