/**
 * Screen: Profile (& Settings)
    * Manage courses
    * View and manage profile and ID number
    * Toggle 24-hour, dark mode, and week start date settings
    * Change app theme
    * Update global reminder intervals
    * Restore deleted items from trash
 * @author Cyrus M. // Last modified by.
 * @date 03/22/25
 */

import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { NavigationBar } from "@/src/shared/components/NavigationBar";
import { ThemeSelector } from "@/src/features/profile/components/ThemeSelector";
import { SettingToggles } from "@/src/features/profile/components/SettingsToggles";
import { ReminderSelector } from "@/src/features/profile/components/ReminderSelector";
import { ProfileSection } from "@/src/features/profile/components/ProfileSection";

const Profile = ({navigation} : any) => {
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false}>
            <ProfileSection navigation={navigation}/>
            <View style={styles.settingsContainer}>
                <SettingToggles/>
                <ThemeSelector/>
                <ReminderSelector/>
            </View>
        </ScrollView>

        <NavigationBar navigation={navigation}/>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({
    settingsContainer: {
        marginHorizontal: 20,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: Dimensions.get('screen').height * 0.15,
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

    extrasContainer: {
        marginTop: 20,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})