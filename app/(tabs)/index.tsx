import { StyleSheet, View } from "react-native";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";

export default function HomeScreen() {
  return (
    <View className="bg-slate-50 h-screen">
      <View className="p-5">
        <HStack space="md" className="mb-4">
          <Avatar size="md">
            <AvatarFallbackText>Jane Doe</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
          </Avatar>
          <VStack>
            <Text size="sm">Bienvenido de vuelta,</Text>
            <Heading size="sm">Jane Doe</Heading>
          </VStack>
        </HStack>
        <Heading size="3xl">Crea un hábito para {"\n"}el futuro</Heading>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
