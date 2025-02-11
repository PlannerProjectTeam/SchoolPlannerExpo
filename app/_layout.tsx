/**
 * App Navigation Handler
    * Root of the application.
 * @author Cyrus M. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Calendar } from './Calendar';
import { Profile } from './Profile';
import { EditTask } from './EditTask';
import { EditEvent } from './EditEvent';
import { Courses } from './Courses';

export type RootStackParameters = {
  Calendar : undefined,
  Profile : undefined,
  EditTask: undefined,
  EditEvent : undefined,
  Courses : undefined
}

const Stack = createNativeStackNavigator<RootStackParameters>();

export default function RootLayout() {
  return (
      <Stack.Navigator initialRouteName='Calendar'>
        <Stack.Screen name="Calendar" component={Calendar}/>
        <Stack.Screen name="EditEvent" component={EditEvent}/>
        <Stack.Screen name="EditTask" component={EditTask}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Courses" component={Courses}/>
      </Stack.Navigator>
  );
}
