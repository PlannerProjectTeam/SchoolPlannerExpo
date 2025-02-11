/**
 * Component: NavBar
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    Pressable
} from 'react-native'

// 3rd Party 
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParameters } from "@/app/_layout";
import DropShadow from "@/node_modules/react-native-drop-shadow";
import { SVG } from "@/components/graphical/SVG";

// Custom
import { globalStyles, Scheme } from "@/constants/globalStyles";
import { CalendarProps } from "@/app/Calendar";

export const NavBar = ({navigation} : CalendarProps) => {
    const [navigationPopup, setNavigationPopup] = useState(false);

    return (
        <>
        {navigationPopup == true? 
            <View style={styles.navigationPopupContainer}>
                <Pressable style={styles.navigationPopupButton} onPressOut={() => {navigation.navigate('EditTask'); setNavigationPopup(false)}}>
                    <SVG svgUrl={"https://www.svgrepo.com/show/437550/checkmark-circle.svg"} color={Scheme.darkPurple} stroke={'none'} height={30} width={30} fillRule="evenodd" clipRule="evenodd"/>
                    <Text style={styles.navigationPopupText}>Task</Text>
                </Pressable>

                <Pressable style={styles.navigationPopupButton} onPressOut={() => {navigation.navigate('EditEvent'); setNavigationPopup(false)}}>
                    <SVG svgUrl={"https://www.svgrepo.com/show/521530/calendar.svg"} color={Scheme.darkPurple} stroke={'none'} height={30} width={30} fillRule="evenodd" clipRule="evenodd"/>
                    <Text style={styles.navigationPopupText}>Event</Text>
                </Pressable>
            </View>
        : null}

        <View style={styles.navigationBarContainer}>
            {/* <DropShadow style={styles.shadow}> NOT WORKING ATM */}
                <View style={styles.navigationBar}>
                    <Pressable style={styles.navigationButton} onPressOut={() => navigation.navigate('Calendar')}>
                        <SVG svgUrl={"https://www.svgrepo.com/show/521532/calendar-big.svg"} color={Scheme.darkPurple} stroke={'none'} height={45} width={45} fillRule="evenodd" clipRule="evenodd"/>
                    </Pressable>

                    <Pressable style={styles.navigationButton} onPressOut={() => (setNavigationPopup(!navigationPopup))}>
                        <SVG svgUrl={"https://www.svgrepo.com/show/440141/plus-circle-fill.svg"} color={Scheme.darkPurple} stroke={'none'} height={70} width={70} fillRule="evenodd" clipRule="evenodd"/>
                    </Pressable>

                    <Pressable style={styles.navigationButton} onPressOut={() => navigation.navigate('Profile')}>
                        <SVG svgUrl={"https://www.svgrepo.com/show/440005/person.svg"} color={Scheme.darkPurple} stroke={'none'} height={50} width={50} fillRule="evenodd" clipRule="evenodd"/>
                    </Pressable>
                </View>
            {/* </DropShadow> */}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        minHeight: Dimensions.get('screen').height,
        backgroundColor: 'white'
    },

    navigationBarContainer: {
        position: 'absolute',
        alignSelf: 'center',
        marginBottom: 50,
        width: '60%',
        height: '12%',
        bottom: 100,
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
        borderWidth: 2,
        borderColor: Scheme.darkPurple
    },
    navigationPopupContainer: {
        position: 'absolute',
        paddingTop: 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        bottom: 210,
        width: '40%',
        height: '25%',
        backgroundColor: Scheme.darkPurple
    },
    navigationButton: {
        paddingHorizontal: 5
    },
    navigationPopupButton: {
        marginTop: 20,
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
    }
});