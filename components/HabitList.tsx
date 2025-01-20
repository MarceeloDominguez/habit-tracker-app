import { View } from "react-native";
import React from "react";
import { HStack } from "./ui/hstack";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "./ui/vstack";
import { AlarmClock } from "lucide-react-native";
import { Colors } from "@/constants/Colors";

export default function HabitList() {
  return (
    <View className="gap-4">
      {[...Array(10)].map((item, i) => (
        <HStack
          space="md"
          key={i}
          className="p-3 rounded-md"
          style={{ backgroundColor: Colors.light.cardThird }}
        >
          <Avatar size="md">
            <AvatarFallbackText>Jane Doe</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
          </Avatar>
          <VStack className="flex-1">
            <Heading size="sm" className="line-clamp-1">
              Video gaming
            </Heading>
            <Text size="sm" className="line-clamp-1">
              8:00 PM - 8:30 PM
            </Text>
          </VStack>
          <View className="justify-center">
            <AlarmClock color={Colors.light.cardSecondary} />
          </View>
        </HStack>
      ))}
    </View>
  );
}
