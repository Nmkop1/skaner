import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SkanerNavigator } from "./SkanerNavigator";

import "react-native-gesture-handler";
const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <SkanerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
