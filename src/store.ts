import { create } from 'zustand';

interface GameState {
  isAuthenticated: boolean;
  currentMoney: number;
  questionNumber: number;
  login: (username: string, password: string) => void;
  logout: () => void;
  updateMoney: (amount: number) => void;
  nextQuestion: () => void;
  resetGame: () => void;
}

export const useStore = create<GameState>((set) => ({
  isAuthenticated: false,
  currentMoney: 0,
  questionNumber: 1,
  login: (username: string, password: string) => {
    // In a real app, implement actual authentication
    set({ isAuthenticated: true });
  },
  logout: () => set({ isAuthenticated: false, currentMoney: 0, questionNumber: 1 }),
  updateMoney: (amount: number) =>
    set((state) => ({ currentMoney: state.currentMoney + amount })),
  nextQuestion: () =>
    set((state) => ({ questionNumber: state.questionNumber + 1 })),
  resetGame: () => set({ currentMoney: 0, questionNumber: 1 }),
}));