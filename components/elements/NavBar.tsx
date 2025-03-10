/**
 * Component: NavBar
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React, { useState } from "react";
import { NavigationProp } from '@react-navigation/native';
import { RootStackParameters } from "@/app/_layout";

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    Pressable
} from 'react-native'

// Custom
import { globalStyles, Scheme } from "@/constants/globalStyles";
import { CalendarBigSVG, CalendarSVG, CheckMarkCircleSVG, PersonSVG, PlusSVG } from "../graphics/svgs/SVGStash";
import { LinearGradient } from 'expo-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
import { Ionicons } from '@expo/vector-icons'

type ScreenNavigationProp<T extends keyof RootStackParameters> = NavigationProp<RootStackParameters, T>;
type NavBarProps = {
    navigation: ScreenNavigationProp<keyof RootStackParameters>;
};

export const NavBar = ({navigation} : NavBarProps) => {
    const [navigationPopup, setNavigationPopup] = useState(false);


    return (
        <>
        <LinearGradient colors={['#FFFFFF', '#FFFFFFF5', '#FFFFFF00']} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} style={styles.gradientBlur}/>

        {navigationPopup == true?
            <>
            {/* <LinearGradient colors={['#FFFFFFE0', '#FFFFFFE0', '#FFFFFF00']} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} style={styles.backgroundBlur}/> */}

            <View style={styles.navigationPopupContainer}>
                <Pressable style={styles.navigationPopupButton} onPressOut={() => {navigation.navigate('EditTask'); setNavigationPopup(false)}}>
                    <Ionicons name="person" size={24} color={Scheme.darkPurple} />
                    <Text style={styles.navigationPopupText}>Task</Text>
                </Pressable>

                <Pressable style={styles.navigationPopupButton} onPressOut={() => {navigation.navigate('EditEvent'); setNavigationPopup(false)}}>
                    <Ionicons name="calendar" size={24} color={Scheme.darkPurple} />
                    <Text style={styles.navigationPopupText}>Event</Text>
                </Pressable>
            </View>
            </>
        : null}

        <View style={styles.navigationBarContainer}>
            <DropShadow style={styles.shadow}>
                <View style={styles.navigationBar}>
                    <Pressable style={styles.navigationButton} onPressOut={() => navigation.navigate('Calendar')}>
                        <Ionicons name="calendar" size={50} color={Scheme.darkPurple} />
                    </Pressable>

                    <Pressable style={styles.navigationButton} onPressOut={() => (setNavigationPopup(!navigationPopup))}>
                        <Ionicons name="add-circle" size={75} color={Scheme.darkPurple} />
                    </Pressable>

                    <Pressable style={styles.navigationButton} onPressOut={() => navigation.navigate('Profile')}>
                        <Ionicons name="person" size={50} color={Scheme.darkPurple} />
                    </Pressable>
                </View>
            </DropShadow>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        minHeight: Dimensions.get('window').height,
        backgroundColor: 'white'
    },

    navigationBarContainer: {
        position: 'absolute',
        alignSelf: 'center',
        marginBottom: 50,
        width: '60%',
        maxHeight: '8%',
        bottom: 125,
    },
    navigationBar: {
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        width: '100%',
        height: '80%',
        backgroundColor: 'white',
        borderWidth: 0,
        borderColor: Scheme.darkPurple
    },
    navigationPopupContainer: {
        position: 'absolute',
        paddingTop: 5,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf: 'center',
        alignItems: 'center',
        bottom: 210,
        width: '40%',
        height: '22%',
        backgroundColor: Scheme.darkPurple
    },
    navigationButton: {
        paddingHorizontal: 5
    },
    navigationPopupButton: {
        marginTop: 12,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 50,
        backgroundColor: 'white'
    },
    navigationPopupText: {
        color: Scheme.darkGrey,
        fontSize: 20,
        marginLeft: 5
    },

    shadow: {
        shadowColor: 'black',
        shadowOpacity: 0.33,
        shadowRadius: 10,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },

    gradientBlur: {
        position: 'absolute',
        alignSelf: 'center',
        marginBottom: 50,
        width: '100%',
        height: '30%',
        bottom: 0,
    },

    backgroundBlur: {
        position: 'absolute',
        alignSelf: 'center',
        marginBottom: 50,
        width: '100%',
        height: '50%',
        bottom: 0,
    }
});