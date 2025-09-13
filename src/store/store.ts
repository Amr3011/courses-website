import { create } from 'zustand'
const Chapters = [
  {
    title: "Chapter 1: Foundations of UI/UX Design",
    lessons: [
      {
        id: 1,
        nameLesson: "Introduction to UI/UX",
        Time_Of_lesson: 12,
        link: "https://www.youtube.com/embed/zHAa-m16NGk"
      },
      {
        id: 2,
        nameLesson: "Understanding  Design",
        Time_Of_lesson: 20,
        link: "https://www.youtube.com/embed/Hbn1SMUs-hs"
      },
      {
        id: 3,
        nameLesson: "Design Thinking Process",
        Time_Of_lesson: 25,
        link: "https://www.youtube.com/embed/cJSDKVOW2cA"
      },
      {
        id: 4,
        nameLesson: "Principles of Good UX",
        Time_Of_lesson: 18,
        link: "https://www.youtube.com/embed/EUHPgbHcKy8"
      },
    ],
    Number_Of_lessons: 4,
    Time_Of_lessons: 75,
  },
  {
    title: "Chapter 2: Foundations of UI/UX Design",
    lessons: [
      {
        id: 1,
        nameLesson: "Introduction to UI/UX",
        Time_Of_lesson: 12,
        link: "https://www.youtube.com/embed/zHAa-m16NGk"
      },
      {
        id: 2,
        nameLesson: "Understanding  Design",
        Time_Of_lesson: 20,
        link: "https://www.youtube.com/embed/Hbn1SMUs-hs"
      },
      {
        id: 3,
        nameLesson: "Design Thinking Process",
        Time_Of_lesson: 25,
        link: "https://www.youtube.com/embed/cJSDKVOW2cA"
      },
      {
        id: 4,
        nameLesson: "Principles of Good UX",
        Time_Of_lesson: 18,
        link: "https://www.youtube.com/embed/EUHPgbHcKy8"
      },
    ],
    Number_Of_lessons: 4,
    Time_Of_lessons: 75,
  },
  {
    title: "Chapter 3: Foundations of UI/UX Design",
    lessons: [
      {
        id: 1,
        nameLesson: "Introduction to UI/UX",
        Time_Of_lesson: 12,
        link: "https://www.youtube.com/embed/zHAa-m16NGk"
      },
      {
        id: 2,
        nameLesson: "Understanding  Design",
        Time_Of_lesson: 20,
        link: "https://www.youtube.com/embed/Hbn1SMUs-hs"
      },
      {
        id: 3,
        nameLesson: "Design Thinking Process",
        Time_Of_lesson: 25,
        link: "https://www.youtube.com/embed/cJSDKVOW2cA"
      },
      {
        id: 4,
        nameLesson: "Principles of Good UX",
        Time_Of_lesson: 18,
        link: "https://www.youtube.com/embed/EUHPgbHcKy8"
      },
    ],
    Number_Of_lessons: 4,
    Time_Of_lessons: 75,
  },
  {
    title: "Chapter 4: Foundations of UI/UX Design",
    lessons: [
      {
        id: 1,
        nameLesson: "Introduction to UI/UX",
        Time_Of_lesson: 12,
        link: "https://www.youtube.com/embed/zHAa-m16NGk"
      },
      {
        id: 2,
        nameLesson: "Understanding  Design",
        Time_Of_lesson: 20,
        link: "https://www.youtube.com/embed/Hbn1SMUs-hs"
      },
      {
        id: 3,
        nameLesson: "Design Thinking Process",
        Time_Of_lesson: 25,
        link: "https://www.youtube.com/embed/cJSDKVOW2cA"
      },
      {
        id: 4,
        nameLesson: "Principles of Good UX",
        Time_Of_lesson: 18,
        link: "https://www.youtube.com/embed/EUHPgbHcKy8"
      },
    ],
    Number_Of_lessons: 4,
    Time_Of_lessons: 75,
  },
];

export const useStore = create(() => ({
    Chapters: Chapters,

}))