import { FlatList, View } from "react-native";
import WeekDays from "@/components/WeekDays";
import { useState } from "react";
import { format, isWithinInterval, parseISO } from "date-fns";
import { Text } from "@/components/ui/text";

type Habit = {
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
    startDate: "2025-01-26",
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

  return (
    <View className="bg-slate-50 h-screen">
      <WeekDays selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <FlatList
        data={getHabitsForSelectedDate()}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No hay hábitos para este día</Text>}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
