import { Dimensions, View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "./ui/text";
import { Colors } from "@/constants/Colors";
import { Bike, CircleX } from "lucide-react-native";
import CustomBadge from "./shared/CustomBadge";
import { Habit } from "@/app/(tabs)/explore";
import { Heading } from "./ui/heading";

const { width } = Dimensions.get("window");

type HabitListCardProps = {
  habit: Habit;
};

export default function HabitListCard({ habit }: HabitListCardProps) {
  return (
    <View style={{ width: width / 2 - 27 }}>
      <View
        className="items-center justify-center rounded-lg"
        style={{ elevation: 6, backgroundColor: "#fff" }}
      >
        <View
          className="h-[45px] absolute top-0 left-0 right-0 rounded-tl-lg rounded-tr-lg"
          style={{ backgroundColor: Colors.light.cardSecondary }}
        />
        <View
          className="w-[60px] h-[60px] items-center justify-center rounded-full border-[2px] border-slate-50"
          style={styles.containerIcon}
        >
          <Bike color={Colors.light.text} size={35} />
        </View>
        <View className="my-2 items-center justify-center gap-1">
          <Heading size="sm">{habit.name}</Heading>
          <Text size="xs">7:40 PM - 8:00 PM</Text>
        </View>
        <View className="my-2">
          <CustomBadge
            title="Por hacer"
            containerStyle={{
              backgroundColor: Colors.light.cardSecondary,
            }}
            titleStyle={{ color: Colors.light.background }}
            icon={<CircleX color={Colors.light.background} size={10} />}
            iconPosition="left"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerIcon: {
    backgroundColor: Colors.light.cardSecondary,
    marginTop: 14,
  },
});
