import React from "react";
import { HStack } from "./ui/hstack";
import { Avatar, AvatarFallbackText, AvatarImage } from "./ui/avatar";
import { VStack } from "./ui/vstack";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

export default function HeaderAvatar() {
  return (
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
  );
}
