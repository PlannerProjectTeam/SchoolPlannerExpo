import { COURSE } from "@/src/features/calendar/types/Course";
import { TASK } from "@/src/features/calendar/types/Task";
import { EVENT } from "@/src/features/calendar/types/Event";
import { CoursesFakeData, EventsFakeData, TasksFakeData } from "@/testing/fake-data/itemcards";

let coursesMap = new Map<number, COURSE>();
let eventsMap = new Map<number, EVENT>();
let tasksMap = new Map<number, TASK>();

const load = () => {
    for (let i = 0; i < CoursesFakeData.length; i++){
        coursesMap.set(CoursesFakeData[i].id, CoursesFakeData[i]);
    }
}

const loadEvents = () => {
    for (let i = 0; i < EventsFakeData.length; i++){
        eventsMap.set(EventsFakeData[i].id, EventsFakeData[i]);
    }
}

const loadTasks = () => {
    for (let i = 0; i < TasksFakeData.length; i++){
        tasksMap.set(TasksFakeData[i].id, TasksFakeData[i]);
    }
}
