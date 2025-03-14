/**
 * Component: NavBar
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React, { useState, useRef } from "react";
import { NavigationProp } from '@react-navigation/native';
import { RootStackParameters } from "@/app/_layout";
import { StyleProp, ViewStyle, LayoutRectangle } from "react-native";

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
import { LinearGradient } from 'expo-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
import { Ionicons } from '@expo/vector-icons'

type ScreenNavigationProp<T extends keyof RootStackParameters> = NavigationProp<RootStackParameters, T>;
type NavBarProps = {
    navigation: ScreenNavigationProp<keyof RootStackParameters>;
};

export const NavBar = ({navigation} : NavBarProps) => {
    const [navBarLayout, setNavBarLayout] = useState<LayoutRectangle | null>(null)
    const [navPopupSeen, setNavigationPopup] = useState(false);
    
    const getNavBarPopupContainerStyle = () => {
        if (navBarLayout == null){
            return { /* No properties */}
        }

        return {
            position: 'absolute',
            top: navBarLayout.y - navBarLayout.height * 1.6,
            alignSelf: 'center',
            width: navBarLayout.width * 0.6,
            height: navBarLayout.height * 1.6,
            paddingTop: 5,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            alignItems: 'center',
            backgroundColor: Scheme.darkPurple
        } as StyleProp<ViewStyle>
    }

    return (
        <>
        <LinearGradient colors={['#FFFFFF', '#FFFFFFF5', '#FFFFFF00']} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} style={styles.gradientBlur}/>

        {navPopupSeen == true?
            <>
            {/* <LinearGradient colors={['#FFFFFFE0', '#FFFFFFE0', '#FFFFFF00']} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} style={styles.backgroundBlur}/> */}

            <View style={getNavBarPopupContainerStyle()}>
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

        {/* <View style={styles.navigationBarContainer} onLayout={(event : any) => (setNavBarLayout(event.nativeEvent.layout))}> */}
            {/* <DropShadow style={styles.shadow}> */}
                <View style={styles.navigationBar} onLayout={(event : any) => (setNavBarLayout(event.nativeEvent.layout))}>
                    <Pressable style={styles.navigationButton} onPressOut={() => navigation.navigate('Calendar')}>
                        <Ionicons name="calendar" size={50} color={Scheme.darkPurple} />
                    </Pressable>

                    <Pressable style={styles.navigationButton} onPressOut={() => (setNavigationPopup(!navPopupSeen))}>
                        <Ionicons name="add-circle" size={75} color={Scheme.darkPurple} />
                    </Pressable>

                    <Pressable style={styles.navigationButton} onPressOut={() => navigation.navigate('Profile')}>
                        <Ionicons name="person" size={50} color={Scheme.darkPurple} />
                    </Pressable>
                </View>
            {/* </DropShadow> */}
        {/* </View> */}
        </>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        minHeight: Dimensions.get('window').height,
        backgroundColor: 'white'
    },

    navigationBar: {
        position: 'absolute',
        alignSelf: 'center',
        marginBottom: 50,
        width: 250,
        maxHeight: 90,
        bottom: 100,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
        backgroundColor: 'white',
        borderColor: Scheme.darkPurple,

        // Android
        elevation: 5,
        // IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
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