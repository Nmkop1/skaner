import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import { AppLoading } from "expo";
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import AppNavigator from "./navigation/AppNavigator";

import {
  useFonts,
  LibreBarcode39Text_400Regular,
} from "@expo-google-fonts/libre-barcode-39-text";

export default () => {
  // do czcionek
  let [fontsLoaded] = useFonts({
    LibreBarcode39Text_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />; // w czasie wgrywania czcionek
  } else {
    return <AppNavigator />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "LibreBarcode39Text_400Regular",
    fontSize: 40,
  },
});
