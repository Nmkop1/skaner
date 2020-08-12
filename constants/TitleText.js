import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../constants/Kolor";
import Kolor from "../constants/Kolor";

const TitleText = (props) => <Text style={styles.title}>{props.children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: Kolor.kolor1,
    paddingTop: 20,
  },
});

export default TitleText;
