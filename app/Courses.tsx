/**
 * Screen: Courses
 * @author Mushtariy I . // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React, {useState} from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons'; //icons library
import { useNavigation } from "expo-router";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Course { //course type
    id: string;
    name: string;
    code: string;
    time: string;
    location: string;
    type: Course;
}

type RootStackParamList = { //navigation parameters
    Courses: undefined; 
    EditCourse: {addCourse: (course: Course) => void}; //connects two pages
    
};
export const Courses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const addCourse = (newCourse: Course) => {
        setCourses([...courses, newCourse]);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Courses</Text>
            {courses.length === 0 ? (
                <Text style={styles.emptyMessage}>No Course available</Text>
            ) : (
            <FlatList 
                data={courses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>  (
                    <View style={styles.courseCard}>
                        <Text style={styles.courseName}>{item.name}</Text>
                        <Text >{item.code}</Text>
                        <Text >{item.time}</Text>
                    </View>
                )}
            />
            )}

            <TouchableOpacity
                onPress={() => navigator.navigate('EditCourse', {addCourse})}
                style={styles.addButton}
            >
                <Ionicons name="add-circle" size={50} color="white"/>
                <Text style={styles.addButtonText}>Add New Course</Text>
            </TouchableOpacity>
      </View>                 
     )
}
const styles = StyleSheet.create ({
    container: {flex:1, padding:20, backgroundColor: '#f5f5f5', },
    header: {fontSize: 24, fontWeight:'bold', marginBottom:10 },
    emptyMessage: { textAlign: 'center', marginTop: 20, fontSize: 16, color: 'gray'},
    courseCard: { backgroundColor: '#ddd', padding: 15, marginVertical: 5, borderRadius: 5},
    courseName: { fontSize: 18, fontWeight: 'bold'},
    addButton: { backgroundColor: 'purple', padding: 15, borderRadius: 5, alignItem: 'center', marginTop: 20},
    addButtonText: { color: 'white', fontSize: 15 }
});
