import React, { useState } from 'react';
import {
  Calendar,
  LocaleConfig,
  ExpandableCalendar,
  CalendarProvider,
} from 'react-native-calendars';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep.',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

LocaleConfig.defaultLocale = 'en';
new LocaleConfig().toString('d MMMM, yyyy');

const MonthlyCalendar = () => {
  // const [selected, setSelected] = useState('');

  const [selected, setSelected] = useState(null);
  const [markedDates, setMarkedDates] = useState({});

  const handleDayPress = (day: any) => {
    setSelected(day.dateString);

    setMarkedDates({
      [day.dateString]: {
        selected: true,
        selectedColor: '#C9C3CF',
      },
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CalendarProvider date={new Date().toISOString().split('T')[0]}>
          <ExpandableCalendar
            current={'2023-03-21'}
            markedDates={markedDates}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              // selectedDayBackgroundColor: '#C9C3CF',
              selectedDayTextColor: '#000000',
              todayTextColor: '#AF1717',
              dayTextColor: '#000000',
              textDisabledColor: '#d9e1e8',
              // dotColor: '#C9C3CF',
              selectedDotColor: '#ffffff',
              arrowColor: '#00adf5',
              monthTextColor: '#474444',
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
            onDayPress={handleDayPress}
            monthFormat='MMMM yyyy'
            enableSwipeMonths
            closeOnDayPress={false}
          />
        </CalendarProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MonthlyCalendar;
