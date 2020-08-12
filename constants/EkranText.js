import React from "react";
import { Text, StyleSheet } from "react-native";

const EkranText = (props) => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 30,
    paddingHorizontal: "3%",
    paddingVertical: "1%",
  },
});

export default EkranText;
