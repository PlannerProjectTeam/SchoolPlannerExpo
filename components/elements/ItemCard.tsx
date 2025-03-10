import React, { PropsWithChildren } from "react"
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native"
import { globalStyles } from "@/constants/globalStyles"
import { DotSVG } from "../graphics/svgs/SVGStash"

type ItemCardProps = PropsWithChildren<{
    color: string,
    title: string,
    subtitle: string,
    footer: string,
}>

export const ItemCard =  ({color, title, subtitle, footer} : ItemCardProps) => {
    return (
        <View style={[styles.container, {borderColor: color}]}>
            <View style={[styles.textContainer]}>
                <Text style={globalStyles.descriptionText}>{subtitle}</Text>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text style={globalStyles.footerText} numberOfLines={1}>{footer}</Text>
            </View>

            <Pressable style={styles.optionsContainer}>
                <DotSVG/> 
                <DotSVG/> 
                <DotSVG/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('screen').width * 0.9,
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
        marginHorizontal: 10,
    },
})