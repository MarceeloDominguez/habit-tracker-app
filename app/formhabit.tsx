import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { NotebookPen } from "lucide-react-native";
import { Text } from "@/components/ui/text";
import Calendars from "@/components/Calendars";
import TimePicker from "@/components/TimePicker";
import { useHabitStore } from "@/store/useHabitStore";
import { supabase } from "@/lib/supabase";

const categories = [
  "Deportes",
  "Salud",
  "Estudios",
  "Trabajo",
  "Familia",
  "Amigos",
  "Ocio",
  "Meditacion",
  "Lectura",
  "Musica",
];

export default function FormHabitScreen() {
  const {
    habitName,
    setHabitName,
    selectedDateRange,
    endTime,
    startTime,
    selectedCategory,
    setSelectedCategory,
  } = useHabitStore();

  const formatTime = (date: string | Date) => {
    return new Date(date).toISOString().split("T")[1].split(".")[0];
  };

  const handleAddHabit = async () => {
    const habitData = {
      habit_name: habitName,
      start_date: selectedDateRange.startDate,
      end_date: selectedDateRange.endDate,
      start_time: formatTime(startTime!),
      end_time: formatTime(endTime!),
      category: selectedCategory,
    };

    const { error } = await supabase.from("habits").insert([habitData]);

    if (error) {
      console.error("Error al agregar hábito:", error.message);
      Alert.alert("Error", "No se pudo agregar el hábito");
    } else {
      Alert.alert("Éxito", "Hábito agregado correctamente");
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar backgroundColor={Colors.light.background} />
      <Stack.Screen
        options={{
          headerTitle: "Agregar un nuevo hábito",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.light.background },
          headerTintColor: Colors.light.text,
          headerTitleStyle: { fontSize: 18 },
          headerTitleAlign: "center",
        }}
      />
      <Input className="mb-4 bg-slate-300/30" style={styles.input}>
        <InputField
          placeholder="Jugar al tenis..."
          className="text-slate-900"
          value={habitName}
          onChangeText={(text) => setHabitName(text)}
        />
        <InputSlot className="pr-3">
          <InputIcon as={NotebookPen} color={Colors.light.cardSecondary} />
        </InputSlot>
      </Input>
      <View>
        <Text
          size="md"
          className="font-bold my-1"
          style={{ color: Colors.light.text }}
        >
          Seleccionar una categoria
        </Text>
        <View className="flex flex-row flex-wrap gap-2 py-2">
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="py-1 px-3 rounded-full"
              activeOpacity={0.7}
              style={{
                backgroundColor:
                  selectedCategory === item
                    ? Colors.light.cardSecondary
                    : Colors.light.background,
                borderWidth: 1,
                borderColor:
                  selectedCategory === item
                    ? Colors.light.cardSecondary
                    : "#6b6666",
              }}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                size="sm"
                style={{
                  color:
                    selectedCategory === item
                      ? Colors.light.background
                      : "#6b6666",
                  fontWeight: "bold",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Calendars />
      <TimePicker />
      <TouchableOpacity
        style={styles.containerButton}
        activeOpacity={0.8}
        onPress={handleAddHabit}
      >
        <Text size="sm" className="text-slate-50 font-bold">
          Agregar habito
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    borderRadius: 10,
    borderWidth: 0,
    height: 40,
  },
  containerButton: {
    backgroundColor: Colors.light.cardSecondary,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
});
