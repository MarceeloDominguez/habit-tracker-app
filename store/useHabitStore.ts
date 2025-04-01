import { create } from "zustand";

interface HabitStore {
  habitName: string;
  selectedDateRange: { startDate: string | null; endDate: string | null };
  startTime: Date | null;
  endTime: Date | null;
  selectedCategory: string;
  setHabitName: (name: string) => void;
  setSelectedDateRange: (range: {
    startDate: string | null;
    endDate: string | null;
  }) => void;
  setStartTime: (time: Date | null) => void;
  setEndTime: (time: Date | null) => void;
  setSelectedCategory: (category: string) => void;
}

export const useHabitStore = create<HabitStore>((set) => ({
  habitName: "",
  selectedDateRange: { startDate: null, endDate: null },
  startTime: null,
  endTime: null,
  selectedCategory: "Deportes",
  setHabitName: (name: string) => set({ habitName: name }),
  setSelectedDateRange: (range) => set({ selectedDateRange: range }),
  setStartTime: (time: Date | null) => set({ startTime: time }),
  setEndTime: (time: Date | null) => set({ endTime: time }),
  setSelectedCategory: (category: string) =>
    set({ selectedCategory: category }),
}));
