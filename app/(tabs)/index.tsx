import { View, Text } from "react-native";
import React from "react";
import "@/global.css"; // ✅ import tailwind CSS once here

export default function HomeScreen() {
  return (
    <View className="flex-1  items-center justify-center bg-black">
      <Text className="text-blue-500 text-2xl font-bold border border-red-500">
       Running on browser also ..... 🎉
      </Text>
    </View>
  );
}
