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
import { Entypo, Feather } from "@expo/vector-icons";
import { LayoutRectangle, StyleProp, ViewStyle } from "react-native";

// Custom
import { globalStyles, Colors } from "@/constants/globalStyles";
import { NavBar } from "@/components/elements/NavBar";
import { RootStackParameters } from "./_layout";
import { ThemeSelector } from "@/components/elements/ThemeSelector";
import { SettingsSwitches } from "@/components/elements/SettingsSwitches";
import { useThemeContext } from "@/constants/ThemeProvider";

type ProfileProps = NativeStackScreenProps<RootStackParameters, 'Calendar'>

const Profile = ({navigation} : ProfileProps) => {
    // For profile picture:
    const DefaultProfileImage = require('../assets/images/default_profile_picture.png');

    const [profileImageLayout, setProfileImageLayout] = useState<LayoutRectangle | null>(null)

    // Theme
    const { currentTheme, setCurrentTheme } = useThemeContext();
    
    const getProfileImageChangeButtonStyle = () => {
        if (profileImageLayout == null){
            return { /* No properties */}
        }

        return {
            position: 'absolute',
            top: profileImageLayout.y + profileImageLayout.height,
            left: profileImageLayout.x + profileImageLayout.width * 0.75,
            alignSelf: 'center',
            width: 34,
            height: 34,
            borderRadius: 17,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: currentTheme
        } as StyleProp<ViewStyle>
    }

    return (
        <>
        <ScrollView>
            <View style={[styles.profileHeader, {backgroundColor: currentTheme}]}>
                <Text style={[globalStyles.subtitleText, styles.profileHeaderText]}>My Profile</Text>
                
                <View onLayout={(event : any) => (setProfileImageLayout(event.nativeEvent.layout))}>
                    <Image source={DefaultProfileImage} style={styles.profileImage}/>
                </View>

                <View style={getProfileImageChangeButtonStyle()}>
                    <Feather name="edit-3" size={20} color="white" />
                </View>
            </View>

            <View style={styles.extrasContainer}>
                <Pressable style={styles.coursesButton} onPressOut={() => navigation.navigate('Courses')}>
                    <Entypo name="book" size={24} color={currentTheme} />
                    <Text style={styles.coursesButtonText}>Courses</Text>
                </Pressable>

                <View>
                    <Text style={styles.IDHeaderText}>ID</Text>
                    <Text style={styles.IDText}>######</Text>
                </View>
            </View>

            <View style={styles.settingsContainer}>
                <SettingsSwitches/>
                <ThemeSelector/>
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

    IDHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    IDText: {
        fontSize: 25,
        fontWeight: '300',
        textAlign: 'right'
    },

    leftMargin: {
        marginHorizontal: 10,
    }
})