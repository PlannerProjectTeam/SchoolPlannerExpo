/**
 * Component: Navigation Bar
 * @author Cyrus M. // Last modified by.
 * @date 03/22/25
 */

import React, { useState } from "react";
import { NavigationProp } from '@react-navigation/native';
import { RootStackParameters } from "@/src/app/_layout";
import { StyleProp, ViewStyle, LayoutRectangle } from "react-native";
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import { Colors } from "@/src/shared/style/globalStyles";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'
import { useThemeContext } from "@/src/shared/state/themeProvider";

type ScreenNavigationProp<T extends keyof RootStackParameters> = NavigationProp<RootStackParameters, T>;
type NavBarProps = {
    navigation: ScreenNavigationProp<keyof RootStackParameters>;
};

export const NavigationBar = ({navigation} : NavBarProps) => {
    const [navBarLayout, setNavBarLayout] = useState<LayoutRectangle | null>(null)
    const [navPopupSeen, setNavigationPopup] = useState(false);

    const { currentTheme, setCurrentTheme } = useThemeContext();
    
    const getNavBarPopupContainerStyle = () => {
        if (navBarLayout == null){
            return { /* No properties */}
        }

        return {
            position: 'absolute',
            top: navBarLayout.y - navBarLayout.height * 1.8,
            alignSelf: 'center',
            width: navBarLayout.width * 0.6,
            height: navBarLayout.height * 1.8,
            paddingTop: 5,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            alignItems: 'center',
            backgroundColor: currentTheme
        } as StyleProp<ViewStyle>

    }

    return (
        <>
        <LinearGradient colors={['#FFFFFF', '#FFFFFFF5', '#FFFFFF00']} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} style={styles.gradientBlur}/>

        {navPopupSeen == true?
            <View style={getNavBarPopupContainerStyle()}>
                <Pressable style={styles.navigationPopupButton} onPress={() => {navigation.navigate('EditTask'); setNavigationPopup(false)}}>
                    <Ionicons name="person" size={24} color={currentTheme} />
                    <Text style={styles.navigationPopupText}>Task</Text>
                </Pressable>

                <Pressable style={styles.navigationPopupButton} onPress={() => {navigation.navigate('EditEvent'); setNavigationPopup(false)}}>
                    <Ionicons name="calendar" size={24} color={currentTheme} />
                    <Text style={styles.navigationPopupText}>Event</Text>
                </Pressable>
            </View>
        : null}

        <View style={styles.navigationBar} onLayout={(event : any) => (setNavBarLayout(event.nativeEvent.layout))}>
            <Pressable style={styles.navigationButton} onPress={() => navigation.navigate('Calendar')}>
                <Ionicons name="calendar" size={45} color={currentTheme} />
            </Pressable>

            <Pressable style={styles.navigationButton} onPress={() => (setNavigationPopup(!navPopupSeen))}>
                <Ionicons name="add-circle" size={70} color={currentTheme} />
            </Pressable>

            <Pressable style={styles.navigationButton} onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="person" size={45} color={currentTheme} />
            </Pressable>
        </View>
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
        width: 225,
        maxHeight: 80,
        bottom: 25,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
        backgroundColor: 'white',

        elevation: 5,
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
        width: 110,
        height: 50,
        backgroundColor: 'white'
    },
    
    navigationPopupText: {
        color: Colors.darkGrey,
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
        marginBottom: 0,
        width: '100%',
        height: '20%',
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