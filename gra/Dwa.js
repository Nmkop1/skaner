import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Dwa = (props) => {
  const fa1 = "ios-moon";
  const fa2 = "ios-star";
  const fa3 = "ios-thumbs-up";
  const fa4 = "ios-heart";
  const fa5 = "ios-car";
  const fa6 = "ios-happy";
  const fa7 = "ios-snow";
  const fa8 = "ios-sunny";
  const fa9 = "ios-cut";

  const fa = [fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9];

  const faConst = Math.floor(Math.random() * fa.length);

  const ico = <Ionicons name={fa[faConst]} style={styles.ico} />;

  return (
    <View style={styles.jeden}>
      {ico}
      <View style={styles.jedna}>
        <Text style={styles.j}> {props.jedna}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  jeden: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  ico: {
    fontSize: 20,
    color: Colors.kolor1,
  },
  jedna: {
    justifyContent: "center",
    alignItems: "center",
  },
  j: {
    marginLeft: -3,
  },
});

export default Dwa;
