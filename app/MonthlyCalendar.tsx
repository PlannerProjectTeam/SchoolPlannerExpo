/**
 * Decrease swipe sensitivity
 * When changing weeks/months, stay on the corresponding day
 * PureComponent & shouldComponentUpdate for React performance best practices
 * Make test tasks. Clicking on a day will bring up the tasks tighed to it
 * Increase touch space for the user when clicking on a day
 */

import React, { useState } from 'react';
import {
  Calendar,
  LocaleConfig,
  ExpandableCalendar,
  CalendarProvider,
  AgendaList,
} from 'react-native-calendars';
import { View, StyleSheet, Text, FlatList } from 'react-native';
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

interface Task {
  name: string;
  description: string;
}

interface TaskList {
  [data: string]: Task[];
}

const MonthlyCalendar = () => {
  const [selected, setSelected] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState('2025-03-23');

  const handleDayPress = (day: any) => {
    setSelected(day.dateString);

    setMarkedDates({
      [day.dateString]: {
        selected: true,
        selectedColor: '#C9C3CF',
      },
    });
  };

  const items: TaskList = {
    '2025-03-10': [{ name: 'test', description: 'testing' }],
    '2025-03-20': [{ name: 'ha', description: 'he' }],
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );

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
          <View>
            <Text>Tasks for {selectedDate}</Text>
            {items[selectedDate]?.length > 0 ? (
              <FlatList
                data={items[selectedDate]}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
              />
            ) : (
              <Text>No tasks for this day</Text>
            )}
          </View>
          {/* <AgendaList
            sections={items}
            renderItem={renderItem}
            scrollToNextEvent={false}
          /> */}
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
