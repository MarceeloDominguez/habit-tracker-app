import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Text } from "./ui/text";
import { Colors } from "@/constants/Colors";
import { Clock } from "lucide-react-native";

export default function TimePicker() {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [isStartPickerVisible, setStartPickerVisible] = useState(false);
  const [isEndPickerVisible, setEndPickerVisible] = useState(false);

  const handleConfirmStart = (time: Date) => {
    setStartPickerVisible(false);
    if (endTime && time >= endTime) {
      alert("La hora de inicio debe ser menor que la hora de final.");
      return;
    }
    setStartTime(time);
  };

  const handleConfirmEnd = (time: Date) => {
    setEndPickerVisible(false);
    if (startTime && time <= startTime) {
      alert("La hora de final debe ser mayor que la hora de inicio.");
      return;
    }
    setEndTime(time);
  };

  return (
    <View className="mt-6">
      <Text
        size="md"
        className="font-bold mb-3"
        style={{ color: Colors.light.text }}
      >
        Seleccionar hora de Inicio
      </Text>
      <TouchableOpacity
        onPress={() => setStartPickerVisible(true)}
        style={{ height: 40, borderRadius: 10 }}
        className="bg-slate-300/30 items-center justify-center mb-6 flex-row gap-2"
      >
        <Clock color={Colors.light.cardSecondary} size={16} />
        <Text size="sm" className="text-slate-700 font-bold">
          {startTime
            ? startTime.toLocaleTimeString()
            : "Seleccionar un horario"}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isStartPickerVisible}
        mode="time"
        onConfirm={handleConfirmStart}
        onCancel={() => setStartPickerVisible(false)}
      />

      <Text
        size="md"
        className="font-bold mb-3"
        style={{ color: Colors.light.text }}
      >
        Seleccionar hora de finalización
      </Text>
      <TouchableOpacity
        onPress={() => setEndPickerVisible(true)}
        style={{ height: 40, borderRadius: 10 }}
        className="bg-slate-300/30 items-center justify-center flex-row gap-2"
      >
        <Clock color={Colors.light.cardSecondary} size={16} />
        <Text size="sm" className="text-slate-700 font-bold">
          {endTime ? endTime.toLocaleTimeString() : "Seleccionar un horario"}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isEndPickerVisible}
        mode="time"
        onConfirm={handleConfirmEnd}
        onCancel={() => setEndPickerVisible(false)}
      />
    </View>
  );
}
