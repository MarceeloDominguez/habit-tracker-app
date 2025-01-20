import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Heading } from "@/components/ui/heading";
import HeaderAvatar from "@/components/HeaderAvatar";
import HabitList from "@/components/HabitList";
import HabitSlider from "@/components/HabitSlider";
import ButtonFab from "@/components/ButtonFab";

export default function HomeScreen() {
  return (
    <>
      <ScrollView
        className="bg-slate-50 h-screen"
        showsVerticalScrollIndicator={false}
      >
        <View className="p-5">
          <HeaderAvatar />
          <Heading size="3xl">Crea un hábito para {"\n"}el futuro</Heading>
        </View>
        <HabitSlider />
        <View className="px-5 mb-24">
          <Heading size="lg" className="mb-4">
            Habitos de hoy
          </Heading>
          <HabitList />
        </View>
      </ScrollView>
      <ButtonFab />
    </>
  );
}

const styles = StyleSheet.create({});
