import { View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Plus } from "lucide-react-native";

export default function ButtonFab() {
  return (
    <View
      className="w-14 h-14 justify-center items-center rounded-full absolute bottom-5 right-5"
      style={{ backgroundColor: Colors.light.cardSecondary }}
    >
      <Plus color={Colors.light.background} />
    </View>
  );
}
