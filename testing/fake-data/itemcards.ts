import { COURSE } from "@/src/features/calendar/types/Course"
import { EVENT } from "@/src/features/calendar/types/Event"
import { CARD_CATEGORY } from "@/src/features/calendar/types/ListModeCard"
import { TASK } from "@/src/features/calendar/types/Task"

export const EventsFakeData : EVENT[] = [
    {
        id: 0,
        color: '#4287f5',
        name: 'First-Gen Club',
        location: 'McGuire Hall',
        startTime: "04:00 PM",
        endTime: "05:00 PM",
        description: 'Remember to show up early!',
        initialDate: "2024-11-10",
        repeatDays: ["friday"]
    },
]

export const TasksFakeData : TASK[] = [
    {
        id: 0,
        color: '#eb4034',
        name: 'Calculus HW #3',
        associatedCourseName: 'Calculus II',
        description: 'Due: 11/10',
        dueDate: "2024-11-10",
    },
    {
        id: 1,
        color: '#fcba03',
        name: 'Do Laundry',
        associatedCourseName: "",
        description: 'Jeans specifically need washing.',
        dueDate: "2024-11-12",
    },
]

export const CoursesFakeData : COURSE[] = [    
    {
        id: 0,
        color: '#525252',
        name: 'Computer Systems', 
        location: "KH108", 
        repeatDays: ["monday", "wednesday", "friday"],
        startTime: "10:00 AM",
        endTime: "10:50 AM"
    },
    {
        id: 1,
        color: '#11ad7f',
        name: 'Calculus II',
        location: 'BT114',
        repeatDays: ["monday", "wednesday", "friday"],
        startTime: "12:00 PM",
        endTime: "01:00 PM",
    },
    {
        id: 2,
        color: '#4226d1',
        name: 'Chamber Ensemble',
        location: 'Recital Room',
        repeatDays: ["tuesday"],
        startTime: "04:00 PM",
        endTime: "06:00 PM",
    },
]