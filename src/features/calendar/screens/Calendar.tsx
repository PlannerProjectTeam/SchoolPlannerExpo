/**
 * Screen: Calendar
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React, { useEffect, useRef, useState } from 'react';
import ExpandableCalendar from '../components/ExpandableCalendar';
import { ItemCardFakeData } from '@/testing/fake-data/itemcards';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SectionList,
  FlatList,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Switch } from 'react-native';
import { globalStyles } from '@/src/shared/style/globalStyles';
import { NavigationBar } from '@/src/shared/components/NavigationBar';
import { ListMode } from '@/src/features/calendar/components/ListMode';
import { DayMode } from '@/src/features/calendar/components/DayMode';
import { WeekMode } from '@/src/features/calendar/components/WeekMode';
import { DateSelection } from '@/src/features/calendar/components/DateSelection';
import { useThemeContext } from '@/src/shared/state/themeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

const Calendar = ({ navigation }: any) => {
  enum calendarMode {
    ListMode,
    DayMode,
    WeekMode,
  }

  const [isListMode, setListMode] = useState(true);
  const [isDayMode, setDayMode] = useState(false);
  const [isWeekMode, setWeekMode] = useState(false);

  const setCalendarMode = (mode: calendarMode) => {
    setListMode(mode == calendarMode.ListMode);
    setDayMode(mode == calendarMode.DayMode);
    setWeekMode(mode == calendarMode.WeekMode);
  };

  const { currentTheme, setCurrentTheme } = useThemeContext();

  return (
    <>
      <View style={styles.screenContainer}>
        <ExpandableCalendar />
        <FlatList
          data={[]}
          renderItem={() => null}
          contentContainerStyle={{}}
          ListHeaderComponent={
            <>
              <View style={styles.listModeSwitchContainer}>
                <Text
                  style={[styles.listModeSwitchText, globalStyles.switchText]}
                >
                  LIST MODE
                </Text>
                <Switch
                  style={styles.listModeSwitch}
                  trackColor={{ false: '#767577', true: currentTheme }}
                  thumbColor={isListMode ? 'white' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={() => {
                    setListMode(!isListMode);
                  }}
                  value={isListMode}
                ></Switch>
              </View>
              {isListMode ? <ListMode /> : null}
              {isDayMode ? <DayMode /> : null}
              {isWeekMode ? <WeekMode /> : null}

              <NavigationBar navigation={navigation}></NavigationBar>
            </>
          }
        />
      </View>
    </>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },

  listModeSwitchContainer: {
    marginHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    margin: 10,
    maxHeight: 30,
  },
  listModeSwitch: {
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
  },
  listModeSwitchText: {
    marginHorizontal: 15,
  },
});