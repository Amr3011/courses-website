import { create } from 'zustand'
import { AllMentors, blogPosts, Chapters } from './data'

export const useStore = create(() => ({
  Chapters,
  AllMentors,
  blogPosts
}))