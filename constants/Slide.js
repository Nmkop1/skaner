import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Colors from "../constants/Colors";
const windowWidth = Dimensions.get("window").height;
console.log(windowWidth);
const Slide = (props) => {
  return (
    <View style={{ width: windowWidth }}>
      <Text>Jeden</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 170,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(250, 250, 250, 0.1)",
  },
});

export default Slide;
