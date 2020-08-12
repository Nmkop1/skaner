import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../constants/Kolor";

const PodText = (props) => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 25,
  },
});

export default PodText;
