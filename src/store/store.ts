import { create } from 'zustand'
const Chapter = {
    title: "Chapter 1: Foundations of UI/UX Design",
    lessons: [
        {
            id: 1,
            nameLesson: "Introduction to UI/UX",
            Time_Of_lesson: 12,
        },
        {
            id: 2,
            nameLesson: "Understanding User-Centered Design",
            Time_Of_lesson: 20,
        },
        {
            id: 3,
            nameLesson: "Design Thinking Process",
            Time_Of_lesson: 25,
        },
        {
            id: 4,
            nameLesson: "Principles of Good UX",
            Time_Of_lesson: 18,
        },
    ],
    Number_Of_lessons: 4,
    Time_Of_lessons: 75,
};
export const useStore = create(() => ({
    Chapter: Chapter,

}))