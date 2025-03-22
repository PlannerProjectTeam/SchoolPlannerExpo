/**
 * Styling: globalStyles
    * Styles used across the entire application.
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import { StyleSheet } from "react-native";

export enum Colors {
    darkGrey = '#37313C',
    veryLightGrey = '#e8e8e8'
}

export const globalStyles = StyleSheet.create({
    titleText: {
        fontFamily: 'Lato',
        fontSize: 24,
    },
    subtitleText: {
        fontFamily: 'Lato',
        fontSize: 18,
        color: Colors.darkGrey
    },
    descriptionText: {
        fontFamily: 'Lato',
        fontSize: 14,
        color: Colors.darkGrey
    },
    footerText: {
        fontFamily: 'Lato',
        fontSize: 12,
        color: Colors.darkGrey
    },
    sectionHeadingText: {
        fontFamily: 'Lato',
        fontSize: 25,
        color: Colors.darkGrey
    },
    switchText: {
        fontSize: 18,
        fontWeight: '200',
    },
});
