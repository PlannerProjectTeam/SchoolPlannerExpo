/**
 * Handles upload for the user's profile picture. Saved to cache.
 * @author Cyrus M. // Last modified by.
 * @date 03/23/25
 */

import * as DocumentPicker from 'expo-document-picker';
import { File } from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultProfileImage } from '@/src/assets/images/images';

const PROFILE_PICTURE_KEY = 'userProfilePicture';

export const uploadProfilePicture = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({ type: 'image/*' });
    if (!result.canceled && result.assets != null && result.assets.length > 0) {
      const pickedAsset = result.assets[0];
      const newPath = `${FileSystem.cacheDirectory}${pickedAsset.name}`;
      await FileSystem.copyAsync({ from: pickedAsset.uri, to: newPath });
      await AsyncStorage.setItem(PROFILE_PICTURE_KEY, newPath);
    }
  } catch (err) {}
};

export const getProfilePicture = async () => {
  const storedUri = await AsyncStorage.getItem(PROFILE_PICTURE_KEY);
  if (!storedUri) return null;

  // Create a File instance
  const file = new File(storedUri);

  // Instead of getInfoAsync, call file.getInfoAsync()
  const fileInfo = await file.getInfoAsync();

  if (fileInfo.exists) {
    return { uri: storedUri };
  } else {
    return null;
  }
};
