
import { Image, View, Text, StyleSheet, Pressable, Dimensions, Switch, StyleProp, ViewStyle, LayoutRectangle } from "react-native"
import { useState } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParameters } from "@/app/_layout";
import { globalStyles } from "@/constants/globalStyles"
import { Entypo, Feather } from "@expo/vector-icons";
import { useThemeContext } from "@/constants/ThemeProvider"

export const ProfileSection =  ({navigation} : any) => {
    const { currentTheme, setCurrentTheme } = useThemeContext();
    
    const DefaultProfileImage = require('@/assets/images/default_profile_picture.png');
    const [profileImageLayout, setProfileImageLayout] = useState<LayoutRectangle | null>(null)

    const getProfileImageChangeButtonStyle = () => {
        if (profileImageLayout == null){
            return { /* No properties */}
        }

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
                <Image source={DefaultProfileImage} style={styles.profileImage}/>
            </View>

            <View style={getProfileImageChangeButtonStyle()}>
                <Feather name="edit-3" size={20} color="white" />
            </View>
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