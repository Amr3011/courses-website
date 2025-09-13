export type LevelsType = "Beginner" | "Medium" | "Hard" | "AllLevels";
type lesson = {
    nameLesson: string
    Time_Of_lesson: number
    id: number
    link:string
}
export type ChapterType = {
    title: string;
    Number_Of_lessons: number
    Time_Of_lessons: number
    lessons: lesson[]
}
export type CardLinksLessonType = {
    title: string;
    links: { title: string, href: string }[]
}