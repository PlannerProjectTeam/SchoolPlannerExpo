/**
 * Component: <SVG>
    * For rendering SVG files by URL. Only works for SVGs with a single path tag. 
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Svg, { FillRule, Path } from 'react-native-svg';

type SVGProps = PropsWithChildren<{
    svgUrl : string, 
    color : string, 
    stroke : string, 
    width : number, 
    height : number, 
    fillRule : string, 
    clipRule : string
}>

export const SVG = ({ svgUrl, color, stroke, width, height, fillRule, clipRule } : SVGProps) => {
    const [svgData, setSvgData] = useState<string | null>(null);
    const [viewBox, setViewBox] = useState<string | undefined>(undefined);

    React.useEffect(() => {
        const fetchSVG = async () => {
            try {
                const response = await fetch(svgUrl);
                const text = await response.text();
                setSvgData(text);

                const viewBoxRegex = /viewBox="([^"]*)"/;
                const viewBoxMatch = text.match(viewBoxRegex);
                if (viewBoxMatch) {
                    setViewBox(viewBoxMatch[1]);
                }
            } catch (error) {
                console.error("Error", error);
            }
        };

        fetchSVG();
    }, [svgUrl]);


    if (!svgData) {
        return <View><Text>...</Text></View>;
    }

    const extractPathData = (svgString: string) => {
        const pathRegex = /d="([^"]*)"/;
        const match = svgString.match(pathRegex);
        return match ? match[1] : null;
    }

    const pathData = extractPathData(svgData)

    if (!pathData) {
        console.warn("Error")
        return null
    }

    return (
        <View style={styles.container}>
            <Svg width={width} height={height} viewBox={viewBox}>
                <Path d={pathData} fill={color} stroke={stroke} strokeWidth={2} fillRule={fillRule as FillRule} clipRule={clipRule as FillRule} />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});