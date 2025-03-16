/**
 * Screen: EditCourse
 * @author Mushtariy I. // Last updated by.
 * @version 0.1.0 02/01/25
 */

import React from "react";
import { } from '@react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {v4 as uuidv4} from 'uuid'; //identifier

interface Course {
    id: 0;
    name: string;
    code: string;
    time: string;
    location: string;
}

type RootStackParamList = {
    Courses: undefined;
    EditCourse: {addCourse: (course: Course) => void};
};

type Props = NativeStackScreenProps<RootStackParamList, 'EditCourse'>;

export const EditCourse = ({navigation, route}) => {
    const [course, setCourse] = useState<Course>({ id: '', name: '', code: '', time: ''});

    const handleSave = () =>{
        if(course.name && course.code && course.time) {
            route.params.addCourse ({...course, id: uuidv4() });
            navigation.goBack();

        }
    };

    return (
  <View style={styles.container}>
        <Text style={styles.header}>New Course</Text>
  
        <Text>Course Name</Text>
          <TextInput
          value={course.name}
          onChangeText={(text) => setCourse({ ...course, name: text })}
          style={styles.input}
           />
  
          <Text>Course Code</Text>
          <TextInput
          value={course.code}
          onChangeText={(text) => setCourse({ ...course, code: text })}
          style={styles.input}
          />
  
         <Text>Course Time</Text>
         <TextInput
          value={course.time}
          onChangeText={(text) => setCourse({ ...course, time: text })}
          style={styles.input}
         />
  
         <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
           <Text style={styles.saveButtonText}>Save Course</Text>
         </TouchableOpacity>
 </View>
    )
}
const styles = StyleSheet.create ({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    input: { borderBottomWidth: 1, marginBottom: 10, paddingVertical: 5 },
    saveButton: { backgroundColor: 'purple', padding: 10, borderRadius: 5, marginTop: 20 },
    saveButtonText: { color: 'white', textAlign: 'center' }

});