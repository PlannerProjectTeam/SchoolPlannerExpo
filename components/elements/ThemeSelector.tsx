import React, { PropsWithChildren } from "react"
import { View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity } from "react-native"
import Toggle from "react-native-toggle-button"
import { globalStyles } from "@/constants/globalStyles"
import { Octicons, Feather } from "@expo/vector-icons"
import { Scheme } from "@/constants/globalStyles"
import { setCurrentTheme, Themes } from "@/classes/Themes"


export const ThemeSelector =  () => {
    const lightenColor = (hex: string): string => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const lightR = Math.round(r + (255 - r) * (3 / 8));
        const lightG = Math.round(g + (255 - g) * (3 / 8));
        const lightB = Math.round(b + (255 - b) * (3 / 8));
        const lightHex = `#${lightR.toString(16).padStart(2, '0')}${lightG.toString(16).padStart(2, '0')}${lightB.toString(16).padStart(2, '0')}`;
        return lightHex;
    };

    const themeValues = Object.values(Themes);
    const lightenedThemeValues = themeValues.map(lightenColor);

    return (
        <>
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Feather name="pen-tool" size={40} color={Scheme.darkPurple} />
                <Text style={globalStyles.descriptionText}>THEME</Text>
            </View>
            
            <View style={styles.themesContainer}>
                {themeValues.map((themeHex: string) => (
                    <TouchableOpacity onPress={() => setCurrentTheme(themeHex)}>
                        <View style={[styles.themeSquare, { backgroundColor: themeHex }]} key={themeHex} />
                    </TouchableOpacity>
                ))}
                {lightenedThemeValues.map((themeHex: string) => ( <View style={[styles.themeSquare, { backgroundColor: themeHex }]} key={themeHex} />))}
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
        backgroundColor: Scheme.veryLightGrey
    },
    iconContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    themesContainer: {
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        maxWidth: 240
    },

    themeSquare: {
        borderRadius: 5,
        width: 35,
        height: 35,
    }
})