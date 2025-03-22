import React, { PropsWithChildren } from "react"
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native"
import { globalStyles } from "@/constants/globalStyles"
import { Octicons } from "@expo/vector-icons"
import { useThemeContext } from "@/constants/ThemeProvider"

type ListModeCardProps = PropsWithChildren<{
    color: string,
    title: string,
    subtitle: string,
    footer: string,
}>

export const ListModeCard =  ({color, title, subtitle, footer} : ListModeCardProps) => {
    const { currentTheme, setCurrentTheme } = useThemeContext();

    return (
        <View style={[styles.container, {borderColor: color}]}>
            <View style={[styles.textContainer]}>
                <Text style={globalStyles.descriptionText}>{subtitle}</Text>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text style={globalStyles.footerText} numberOfLines={1}>{footer}</Text>
            </View>

            <Pressable style={styles.optionsContainer}>
                <Octicons name="dot-fill" size={10} color={currentTheme}/>
                <Octicons name="dot-fill" size={10} color={currentTheme}/>
                <Octicons name="dot-fill" size={10} color={currentTheme}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * .92,
        height: 100,
        justifyContent: 'flex-start',
        alignContent: 'center',
        borderWidth: 1,
        borderLeftWidth: 5,
        borderRadius: 10,
        marginBottom: 15,
    },
    textContainer: {
        marginLeft: 10,
        flex: 2,
        justifyContent: 'center',
        height: 100,
    },
    optionsContainer: {
        flex: 0,
        justifyContent: 'center',
        marginHorizontal: 15,
    },
})