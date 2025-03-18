/**
 * Screen: Calendar
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React, { useState } from 'react';
import MonthlyCalendar from './MonthlyCalendar';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Pressable,
} from 'react-native';
// 3rd Party
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParameters } from './_layout';

// Custom
import { globalStyles, Scheme } from '@/constants/globalStyles';
import { NavBar } from '@/components/ui/NavBar';

export type CalendarProps = NativeStackScreenProps<RootStackParameters>;

export const Calendar = ({ navigation }: CalendarProps) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <MonthlyCalendar />
      <NavBar navigation={navigation}></NavBar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    minHeight: Dimensions.get('screen').height,
    backgroundColor: 'white',
  },
});

export default Calendar;
