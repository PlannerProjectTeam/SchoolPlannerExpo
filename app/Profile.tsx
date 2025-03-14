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
import { RootStackParameters } from "./_layout";
import { Ionicons, Entypo } from "@expo/vector-icons";

// Custom
import { globalStyles, Scheme } from "@/constants/globalStyles";
import { NavBar } from "@/components/elements/NavBar";

type ProfileProps = NativeStackScreenProps<RootStackParameters, 'Calendar'>

const Profile = ({navigation} : ProfileProps) => {
    const DefaultProfileImage = require('../assets/images/default_profile_picture.png');

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <>
        <ScrollView>
            <View style={styles.profileHeader}>
                <Image source={DefaultProfileImage} style={styles.profileImage}></Image>
            </View>

            <View style={styles.extrasContainer}>
                <Pressable style={styles.coursesButton} onPressOut={() => navigation.navigate('Courses')}>
                    <Entypo name="book" size={24} color={Scheme.darkPurple} />
                    <Text style={styles.coursesButtonText}>Courses</Text>
                </Pressable>

                <View>
                    <Text style={styles.IDHeaderText}>ID</Text>
                    <Text style={styles.IDText}>######</Text>
                </View>
            </View>

            <Text style={[globalStyles.sectionHeadingText, styles.leftMargin]}>Settings</Text>
            <View style={styles.settingsContainer}>

                <View style={styles.switchContainer}>
                    <Switch style={styles.switch} trackColor={{false: '#767577', true: Scheme.darkPurple}} thumbColor={isEnabled ? 'white' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}></Switch>
                    <Text style={styles.switchText}>24-HOUR CLOCK</Text>
                </View>
                
                <View style={styles.switchContainer}>
                    <Switch style={styles.switch} trackColor={{false: '#767577', true: Scheme.darkPurple}} thumbColor={isEnabled ? 'white' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}></Switch>
                    <Text style={styles.switchText}>DARK MODE</Text>
                </View>
                
                <View style={styles.switchContainer}>
                <Switch style={styles.switch} trackColor={{false: '#767577', true: Scheme.darkPurple}} thumbColor={isEnabled ? 'white' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}></Switch>
                <Text style={styles.switchText}>WEEK STARTS ON SUNDAY</Text>
                </View>
            </View>
        </ScrollView>

        <NavBar navigation={navigation}/>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({
    profileHeader: {
        backgroundColor: Scheme.lightPurple,
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    profileImage: {
        width: 150,
        height: 150,
        marginBottom: -50
    },

    coursesButton: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    coursesButtonText: {
        color: Scheme.darkPurple,
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
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 10,
        paddingLeft: 50,
    },

    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    switch: {
        transform: [{ scaleX: 1 }, { scaleY: 1 }],
        marginTop: 20,
        verticalAlign: 'middle'
    },
    switchText: {
        marginLeft: 25,
        color: Scheme.darkPurple,
        fontSize: 20,
        fontWeight: '200',
        textAlignVertical: 'center',
        marginTop: 20
    },

    IDHeaderText: {
        color: Scheme.darkPurple,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    IDText: {
        color: Scheme.darkPurple,
        fontSize: 25,
        fontWeight: '300',
        textAlign: 'right'
    },

    leftMargin: {
        marginHorizontal: 10,
    }
})