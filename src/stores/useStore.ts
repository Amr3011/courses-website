import { create } from 'zustand';

interface AppState {
    count: number;
}

interface AppActions {
    increment: () => void;
    decrement: () => void;
}

export const useStore = create<AppState & AppActions>((set) => ({
    count: 0,

    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
}));
