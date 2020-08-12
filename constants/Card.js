import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
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

export default Card;
