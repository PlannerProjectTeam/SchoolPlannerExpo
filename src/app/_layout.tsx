/**
 * Root of the application.
 * @author Cyrus M. // Last modified by.
 * @date 03/22/25
 */

import React from 'react';

import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import Calendar from '../features/calendar/screens/Calendar';
import Profile from '../features/profile/screens/Profile';
import EditTask from '../features/tasks/screens/EditTask';
import EditEvent from '../features/events/screens/EditEvent';
import Courses from '../features/courses/screens/Courses';
import { ThemeProvider } from '@/src/shared/state/themeProvider';

export type RootStackParameters = {
  Calendar : undefined,
  Profile : undefined,
  EditTask: undefined,
  EditEvent : undefined,
  Courses : undefined
}

const Stack = createNativeStackNavigator<RootStackParameters>();

export default function App() {
  return (
    <ThemeProvider>
      <Stack.Navigator initialRouteName='Calendar'>
        <Stack.Screen name="Calendar" component={Calendar} options={options}/>
        <Stack.Screen name="EditEvent" component={EditEvent} options={options}/>
        <Stack.Screen name="EditTask" component={EditTask} options={options}/>
        <Stack.Screen name="Profile" component={Profile} options={options}/>
        <Stack.Screen name="Courses" component={Courses} options={options}/>
      </Stack.Navigator>
    </ThemeProvider>
  );
}

const options = {
    headerShown: false
}
