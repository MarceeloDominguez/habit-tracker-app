import { View, FlatList, Dimensions } from "react-native";
import React from "react";
import { HStack } from "./ui/hstack";
import { VStack } from "./ui/vstack";
import { Colors } from "@/constants/Colors";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import CustomBadge from "./shared/CustomBadge";
import { Bike, CircleCheckBig } from "lucide-react-native";

const windowWidth = Dimensions.get("window").width;

export default function HabitSlider() {
  return (
    <FlatList
      data={[...Array(5)]}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{
        gap: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
      }}
      renderItem={({ item }) => (
        <HStack
          className="p-4 rounded-md"
          style={{
            width: windowWidth * 0.6,
            backgroundColor: Colors.light.cardPrimary,
          }}
        >
          <VStack className="flex-1 gap-1">
            <Heading size="lg" className="line-clamp-1">
              Andar en bici
            </Heading>
            <Text size="sm" className="line-clamp-1">
              6:00 PM - 7:30 PM
            </Text>
            <CustomBadge
              title="Completado"
              containerStyle={{ marginTop: 6 }}
              titleStyle={{ color: "#09ac1e" }}
              icon={<CircleCheckBig color={"#09ac1e"} size={10} />}
              iconPosition="left"
            />
          </VStack>
          <View className="justify-center">
            <Bike color={Colors.light.text} size={50} />
          </View>
        </HStack>
      )}
    />
  );
}
