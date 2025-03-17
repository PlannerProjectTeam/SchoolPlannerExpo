/**
 * Styling: globalStyles
    * Styles used across the entire application.
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import { StyleSheet } from "react-native";

export enum Scheme {
    darkPurple = '#4A4458',
    lightPurple = '#6C637C',
    darkGrey = '#37313C',
    veryLightGrey = '#e8e8e8'
}

export const globalStyles = StyleSheet.create({
    titleText: {
        fontFamily: 'Lato',
        fontSize: 24,
        color: Scheme.darkPurple
    },
    subtitleText: {
        fontFamily: 'Lato',
        fontSize: 18,
        color: Scheme.darkGrey
    },
    descriptionText: {
        fontFamily: 'Lato',
        fontSize: 14,
        color: Scheme.darkGrey
    },
    footerText: {
        fontFamily: 'Lato',
        fontSize: 12,
        color: Scheme.darkGrey
    },
    sectionHeadingText: {
        fontFamily: 'Lato',
        fontSize: 25,
        color: Scheme.darkGrey
    },
    switchText: {
        color: Scheme.darkPurple,
        fontSize: 18,
        fontWeight: '200',
    },
});
