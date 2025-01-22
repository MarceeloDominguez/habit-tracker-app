import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { startOfWeek, addDays, format, addWeeks, subWeeks } from "date-fns";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Text } from "./ui/text";
import { Heading } from "./ui/heading";
import { es } from "date-fns/locale";

type WeekDaysProps = {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
};

export default function WeekDays({
  selectedDate,
  setSelectedDate,
}: WeekDaysProps) {
  // Fecha base para la semana actual
  const [currentWeek, setCurrentWeek] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  // Calcular los días de la semana basados en la fecha base
  const getWeekDays = () => {
    return Array.from({ length: 7 }).map((_, i) => {
      const date = addDays(currentWeek, i);
      return {
        dayName: format(date, "EEE", { locale: es }),
        date: format(date, "yyyy-MM-dd"),
        isToday:
          format(new Date(), "yyyy-MM-dd") === format(date, "yyyy-MM-dd"),
        isSelected: selectedDate === format(date, "yyyy-MM-dd"),
      };
    });
  };

  // Formatear el título del mes y el año
  const getMonthYear = () => format(currentWeek, "MMMM yyyy", { locale: es });

  const days = getWeekDays();

  return (
    <View>
      <View className="flex-row justify-between items-center m-4">
        <TouchableOpacity
          onPress={() => setCurrentWeek(subWeeks(currentWeek, 1))}
        >
          <ChevronLeft color={Colors.light.text} />
        </TouchableOpacity>
        <Heading size="md" className="capitalize">
          {getMonthYear()}
        </Heading>
        <TouchableOpacity
          onPress={() => setCurrentWeek(addWeeks(currentWeek, 1))}
        >
          <ChevronRight color={Colors.light.text} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={days}
        keyExtractor={(item) => item.dayName}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          marginBottom: 10,
          gap: 8,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              item.isToday && styles.todayContent,
              item.isSelected &&
                !item.isToday && {
                  backgroundColor: Colors.light.cardPrimary,
                },
            ]}
            className="p-2 items-center rounded-tl-full rounded-tr-full"
            activeOpacity={0.8}
            onPress={() => setSelectedDate(item.date)}
          >
            <View
              style={[
                item.isToday
                  ? styles.dateContent
                  : { backgroundColor: Colors.light.cardThird },
              ]}
              className="w-10 h-10 rounded-full flex items-center justify-center"
            >
              <Text size="sm" style={item.isToday && styles.dateText}>
                {parseInt(item.date.split("-")[2])}
              </Text>
            </View>
            <Text
              size="sm"
              style={item.isToday && styles.todayText}
              className="capitalize"
            >
              {item.dayName}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todayText: {
    color: Colors.light.background,
    fontWeight: "bold",
  },
  dateText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  todayContent: {
    backgroundColor: Colors.light.cardSecondary,
  },
  dateContent: {
    backgroundColor: Colors.light.background,
  },
});
