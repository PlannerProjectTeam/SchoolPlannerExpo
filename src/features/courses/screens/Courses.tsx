/**
 * Screen: Courses
 * @author Cyrus M. // Last modified by.
 * @date 03/22/25
 */
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Courses = () => {
    return (
        <View>
            <Text>Courses</Text>
        </View>
    )
}

const courses = [
    { id: "1", title: "Calculus 1", instructor: "Dr. Anson" },
    { id: "2", title: "Effective Writing", instructor: "Prof. Lewis" },
    { id: "3", title: "Theology 201", instructor: "Dr. Lloyd" },
    { id: "4", title: "History 100", instructor: "Dr. Sandler" }
];

export const Courses = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Courses</Text>
            <FlatList
                data={courses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.courseItem}>
                        <Text style={styles.courseTitle}>{item.title}</Text>
                        <Text style={styles.courseInstructor}>{item.instructor}</Text>
                    </View>
                )}
            />
        </View>
    );s
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    courseItem: {
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: "600",
    },
    courseInstructor: {
        fontSize: 14,
        color: "gray",
    },
});
