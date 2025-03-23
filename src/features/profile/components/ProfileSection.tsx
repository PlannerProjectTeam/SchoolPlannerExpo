/**
 * Component: Profile Section
 * Parts of the profile screen that are not settings.
 * 
 * @author Cyrus M. // Last modified by.
 * @date 03/22/25
 */

import { Image, View, Text, StyleSheet, Pressable, StyleProp, ViewStyle, LayoutRectangle, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react"
import { globalStyles } from "@/src/shared/style/globalStyles"
import { Entypo, Feather } from "@expo/vector-icons";
import { useThemeContext } from "@/src/shared/state/themeProvider"
import { getProfilePicture, uploadProfilePicture } from "../helpers/handlePFPUpload";

export const ProfileSection =  ({navigation} : any) => {
    const {currentTheme} = useThemeContext();
    const [profileImageSource, setProfileImageSource] = useState();
    const [profileImageLayout, setProfileImageLayout] = useState<LayoutRectangle | null>(null)

    useEffect(() => {
        const loadProfilePicture = async () => {
            setProfileImageSource(await getProfilePicture());
        };
        
        loadProfilePicture();
    }, []);

    const handleProfilePictureUpload = async () => {
        await uploadProfilePicture().catch();
        setProfileImageSource(await getProfilePicture().catch());
    };

    const getProfileImageChangeButtonStyle = () => {
        if (profileImageLayout == null){ return { /* No properties */} }

        return {
            position: 'absolute',
            top: profileImageLayout.y + profileImageLayout.height,
            left: profileImageLayout.x + profileImageLayout.width * 0.75,
            alignSelf: 'center',
            width: 34,
            height: 34,
            borderRadius: 17,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: currentTheme
        } as StyleProp<ViewStyle>
    }

    return (
        <>
        <View style={[styles.profileHeader, {backgroundColor: currentTheme}]}>
            <Text style={[globalStyles.subtitleText, styles.profileHeaderText]}>My Profile</Text>
            
            <View onLayout={(event : any) => (setProfileImageLayout(event.nativeEvent.layout))}>
                <Image source={profileImageSource} style={styles.profileImage}/>
            </View>

            <TouchableOpacity style={getProfileImageChangeButtonStyle()} onPress={handleProfilePictureUpload}>
                <Feather name="edit-3" size={20} color="white" />
            </TouchableOpacity>
        </View>

        <View style={styles.extrasContainer}>
            <Pressable style={styles.coursesButton} onPressOut={() => navigation.navigate('Courses')}>
                <Entypo name="book" size={24} color={currentTheme} />
                <Text style={styles.coursesButtonText}>Courses</Text>
            </Pressable>

            <View>
                <Text style={styles.IDHeaderText}>ID</Text>
                <Text style={styles.IDText}>######</Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    extrasContainer: {
        marginTop: 20,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileHeader: {
        height: 175,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    profileImage: {
        borderRadius: 75,
        width: 150,
        height: 150,
        marginBottom: -50
    },
    profileHeaderText: {
        flex: 1,
        color: 'white',
        textAlignVertical: 'center'
    },

    coursesButton: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    coursesButtonText: {
        fontSize: 20,
        marginLeft: 10,
        textAlignVertical: 'center',
    },
    IDHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    IDText: {
        fontSize: 25,
        fontWeight: '300',
        textAlign: 'right'
    },
})