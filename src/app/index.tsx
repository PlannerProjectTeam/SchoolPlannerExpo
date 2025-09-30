/**
 * Root of the application.
 * @author Cyrus M. // Last modified by.
 * @date 03/22/25
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calendar from '@/src/features/calendar/screens/Calendar.tsx';
import Profile from '@/src/features/profile/screens/Profile.tsx';
import EditTask from '@/src/features/tasks/screens/EditTask.tsx';
import EditEvent from '@/src/features/events/screens/EditEvent.tsx';
import Courses from '@/src/features/courses/screens/Courses.tsx';
import { ThemeProvider } from '@/src/shared/state/themeProvider';

export type RootStackParameters = {
  Calendar: undefined;
  Profile: undefined;
  EditTask: undefined;
  EditEvent: undefined;
  Courses: undefined;
};

const Stack = createNativeStackNavigator<RootStackParameters>();

export default function App() {
  return (
    <ThemeProvider>
      <Stack.Navigator initialRouteName='Calendar'>
        <Stack.Screen name='Calendar' component={Calendar} options={options} />
        <Stack.Screen
          name='EditEvent'
          component={EditEvent}
          options={options}
        />
        <Stack.Screen name='EditTask' component={EditTask} options={options} />
        <Stack.Screen name='Profile' component={Profile} options={options} />
        <Stack.Screen name='Courses' component={Courses} options={options} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}

const options = {
  headerShown: false,
};
