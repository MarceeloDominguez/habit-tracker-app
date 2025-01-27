import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { NotebookPen } from "lucide-react-native";
import { Text } from "@/components/ui/text";

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
  const [selectedCategory, setSelectedCategory] = useState("Deportes");

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar backgroundColor={Colors.light.cardSecondary} style="light" />
      <Stack.Screen
        options={{
          headerTitle: "Agregar un nuevo habito",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.light.cardSecondary },
          headerTintColor: Colors.light.background,
        }}
      />
      <Input className="bg-red-900/20 mb-4" style={styles.input}>
        <InputField
          placeholder="Por ej.: Jugar al tenis..."
          className="text-white"
        />
        <InputSlot className="pr-3">
          <InputIcon as={NotebookPen} className="text-slate-50/50" />
        </InputSlot>
      </Input>
      <View>
        <Text size="md" className="text-slate-50 font-bold my-1">
          Selecciona una categoria
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
                    ? Colors.light.cardPrimary
                    : Colors.light.cardSecondary,
                borderWidth: 1,
                borderColor:
                  selectedCategory === item
                    ? Colors.light.cardPrimary
                    : Colors.light.text,
              }}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                size="sm"
                style={{
                  color:
                    selectedCategory === item
                      ? Colors.light.text
                      : Colors.light.background,
                  fontWeight: "bold",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.cardSecondary,
    padding: 20,
  },
  input: {
    borderRadius: 10,
    borderWidth: 0,
    height: 40,
  },
});
