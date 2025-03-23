/**
 * Handles upload for the user's profile picture. Saved to cache.
 * @author Cyrus M. // Last modified by.
 * @date 03/22/25
 */

import { Platform } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import { MMKV } from 'react-native-mmkv';
import { DefaultProfileImage } from '@/src/assets/images/images';

const storage = new MMKV();
const PROFILE_PICTURE_KEY = "userProfilePicture";

export const uploadProfilePicture = async () => {w
    console.log('upload');
    try {
        const res = await DocumentPicker.pickSingle({ type: [DocumentPicker.types.images], });
        if (!res?.uri) { return null; }
        const newPath = `${RNFS.CachesDirectoryPath}/${res.name}`;
        await RNFS.copyFile(res.uri, newPath)
        storage.set(PROFILE_PICTURE_KEY, newPath);

    } catch (err) {
        console.error('There was a problemo');
    }
};

export const getProfilePicture = () => {
    const storedUri = storage.getString(PROFILE_PICTURE_KEY);

    if (storedUri) {
		if (Platform.OS === 'android'){
			return { uri: `file://${storedUri}` };
		} else {
			return { uri: storedUri };
		}
    } else {
        return DefaultProfileImage;
    }
};