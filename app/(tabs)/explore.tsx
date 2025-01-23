import { FlatList, View } from "react-native";
import WeekDays from "@/components/WeekDays";
import { useState } from "react";
import { format, isWithinInterval, parseISO } from "date-fns";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import HabitListCard from "@/components/HabitListCard";

export type Habit = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
};

const habitsData: Habit[] = [
  {
    id: 1,
    name: "Jugar al tenis",
    startDate: "2025-01-22",
    endDate: "2025-01-25",
  },
  {
    id: 2,
    name: "Leer un libro",
    startDate: "2025-01-24",
    endDate: "2025-01-25",
  },
  {
    id: 3,
    name: "Correr un maratón",
    startDate: "2025-01-24",
    endDate: "2025-01-27",
  },
  {
    id: 4,
    name: "Correr un maratón",
    startDate: "2025-01-24",
    endDate: "2025-01-27",
  },
  {
    id: 5,
    name: "Correr un maratón",
    startDate: "2025-01-24",
    endDate: "2025-01-27",
  },
  {
    id: 6,
    name: "Correr un maratón",
    startDate: "2025-01-24",
    endDate: "2025-01-27",
  },
  {
    id: 7,
    name: "Correr un maratón",
    startDate: "2025-01-24",
    endDate: "2025-01-27",
  },
];

export default function ExploreScreen() {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const getHabitsForSelectedDate = () => {
    const parsedDate = parseISO(selectedDate);
    return habitsData.filter((habit) =>
      isWithinInterval(parsedDate, {
        start: parseISO(habit.startDate),
        end: parseISO(habit.endDate),
      })
    );
  };

  const habits = getHabitsForSelectedDate();

  return (
    <View className="bg-slate-50 flex-1">
      <WeekDays selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text className="text-center mt-14 text-slate-800 font-bold">
            No hay hábitos para este día
          </Text>
        }
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Heading size="lg" className="mt-4 mb-4">
            Lista de habitos
          </Heading>
        }
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 5,
        }}
        columnWrapperStyle={{ gap: 14, marginBottom: 14 }}
        renderItem={({ item }) => <HabitListCard habit={item} />}
      />
    </View>
  );
}
