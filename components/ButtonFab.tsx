import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Plus } from "lucide-react-native";
import { Link } from "expo-router";

export default function ButtonFab() {
  return (
    <Link href={"/formhabit"} asChild>
      <Pressable
        className="w-14 h-14 justify-center items-center rounded-full absolute bottom-5 right-5"
        style={styles.container}
      >
        <Plus color={Colors.light.background} />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.cardSecondary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
