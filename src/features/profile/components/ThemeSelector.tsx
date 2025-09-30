/**
 * Component: Theme Selector
 * Allows user to select between 6 different global accent colors.
 * 
 * @author Cyrus M. // Last modified by.
 * @date 03/22/25
 */

import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { globalStyles } from "@/src/shared/style/globalStyles"
import { Feather, FontAwesome } from "@expo/vector-icons"
import { Colors } from "@/src/shared/style/globalStyles"
import { Themes, useThemeContext } from "@/src/shared/state/themeProvider"

export const ThemeSelector =  () => {
    const { currentTheme, setCurrentTheme } = useThemeContext();

    const lightenColor = (hex: string): string => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const lightR = Math.round(r + (255 - r) * (3 / 8));
        const lightG = Math.round(g + (255 - g) * (3 / 8));
        const lightB = Math.round(b + (255 - b) * (3 / 8));
        return `#${lightR.toString(16)}${lightG.toString(16)}${lightB.toString(16)}`;
    };

    return (
        <>
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Feather name="pen-tool" size={40} color={currentTheme} />
                <Text style={globalStyles.descriptionText}>THEME</Text>
            </View>
            
            <View style={styles.allThemesContainer}>
                {Object.entries(Themes).map(([themeName, themeHex]) => (
                    <TouchableOpacity key={themeName} onPress={() => setCurrentTheme(themeHex)}>
                        <View style={styles.singleThemeContainer}>
                            <View style={[styles.themeSquare, { backgroundColor: themeHex }]}>
                                {currentTheme == themeHex?
                                    <FontAwesome name="check" size={18} color={Colors.veryLightGrey}/>
                                : null}
                            </View>
                            <View style={[styles.themeSquare, { backgroundColor: lightenColor(themeHex) }]}>
                                {currentTheme == themeHex?
                                    <FontAwesome name="check" size={18} color={Colors.veryLightGrey}/>
                                : null}
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
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
        paddingRight: 10,
        backgroundColor: Colors.veryLightGrey
    },
    iconContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    allThemesContainer: {
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        maxWidth: 240
    },
    singleThemeContainer: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    },
    themeSquare: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 30,
        height: 30,
    }
})