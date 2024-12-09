import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className=" text-6xl border border-red-600 text-green-500">
          SplashScreen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
