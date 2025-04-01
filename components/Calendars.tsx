import { View, StyleSheet } from "react-native";
import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Text } from "@/components/ui/text";
import { Colors } from "@/constants/Colors";
import { Calendar1 } from "lucide-react-native";
import { useHabitStore } from "@/store/useHabitStore";

LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene.",
    "Feb.",
    "Mar.",
    "Abr.",
    "May.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dic.",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."],
  today: "Hoy",
};

LocaleConfig.defaultLocale = "es";

export default function Calendars() {
  const { selectedDateRange, setSelectedDateRange } = useHabitStore();

  const handleDayPress = (day: { dateString: string }) => {
    const { startDate, endDate } = selectedDateRange;

    if (!startDate || (startDate && endDate)) {
      // Seleccionar la fecha de inicio
      setSelectedDateRange({ startDate: day.dateString, endDate: null });
    } else if (!endDate) {
      // Seleccionar la fecha de fin
      setSelectedDateRange({
        startDate,
        endDate: day.dateString > startDate ? day.dateString : null, // Asegurar que la fecha final sea válida
      });
    }
  };

  // Marcar las fechas seleccionadas en el calendario
  const getMarkedDates = () => {
    const { startDate, endDate } = selectedDateRange;
    const markedDates: Record<string, any> = {};

    if (startDate) {
      markedDates[startDate] = {
        startingDay: true,
        color: Colors.light.cardSecondary,
        textColor: "#fff",
      };
    }

    if (endDate) {
      markedDates[endDate] = {
        endingDay: true,
        color: Colors.light.cardSecondary,
        textColor: "#fff",
      };

      // Marcar las fechas intermedias
      let currentDate = new Date(startDate!);
      while (currentDate < new Date(endDate)) {
        const dateString = currentDate.toISOString().split("T")[0];
        if (dateString !== startDate && dateString !== endDate) {
          markedDates[dateString] = { color: "#f1beb1", textColor: "#4e4949" };
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    return markedDates;
  };

  return (
    <View style={styles.container}>
      <Text
        size="md"
        className="font-bold mb-3"
        style={{ color: Colors.light.text }}
      >
        Seleccionar una fecha de Inicio y Final
      </Text>
      <View
        style={{ height: 40, borderRadius: 10 }}
        className="bg-slate-300/30 mb-4 flex-row justify-between items-center px-4 gap-2"
      >
        <View className="flex-1 items-center flex-row gap-4 justify-center">
          <Text size="sm" className="text-slate-900 font-bold">
            {selectedDateRange.startDate || "Inicio"}
          </Text>
          <Text size="sm" className="text-slate-900 font-bold">
            -
          </Text>
          <Text size="sm" className="text-slate-900 font-bold">
            {selectedDateRange.endDate || "Final"}
          </Text>
        </View>
        <Calendar1 color={Colors.light.cardSecondary} size={18} />
      </View>

      <Calendar
        markingType={"period"}
        markedDates={getMarkedDates()}
        onDayPress={handleDayPress}
        theme={{
          calendarBackground: Colors.light.background,
          textSectionTitleColor: Colors.light.text,
          todayTextColor: Colors.light.background,
          dayTextColor: Colors.light.text,
          textDayFontWeight: "bold",
          arrowColor: Colors.light.cardSecondary,
          monthTextColor: Colors.light.text,
          textMonthFontWeight: "bold",
          todayBackgroundColor: Colors.light.cardSecondary,
          textDisabledColor: "#f1a28a",
          textDayHeaderFontWeight: "bold",
          textDayFontSize: 14,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
