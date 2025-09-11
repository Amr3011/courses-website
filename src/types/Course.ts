export type LevelsType = "Beginner" | "Medium" | "Hard" | "AllLevels";
type lesson = {
    nameLesson: string
    Time_Of_lesson: number
}
export type ChapterType = {
    title: string;
    Number_Of_lessons: number
    Time_Of_lessons: number
    lessons: lesson[]
}