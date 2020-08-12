import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Ekran1 from "../gra/Ekran1";
import Ekran2 from "../gra/Ekran2";
import Ekran3 from "../gra/Ekran3";
import Ekran4 from "../gra/Ekran4";
import Gra from "../gra/Gra";
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: "purpure",
  },
  headerTitleStyle: {
    fontFamily: "Inter_900Black",
  },
  headerBackTitleStyle: {
    fontFamily: "Inter_900Black",
  },
  headerTintColor: "blue",
};

const SkanerStackNavigator = createStackNavigator();
export const SkanerNavigator = () => {
  return (
    <SkanerStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <SkanerStackNavigator.Screen
        name="Ekran1"
        component={Ekran1}
        // options={productsOverviewScreenOptions}
      />
      <SkanerStackNavigator.Screen
        name="Ekran2"
        component={Ekran2}
        // options={productDetailScreenOptions}
      />
      <SkanerStackNavigator.Screen
        name="Ekran3"
        component={Ekran3}
        // options={productsOverviewScreenOptions}
      />
      <SkanerStackNavigator.Screen
        name="Ekran4"
        component={Ekran4}
        // options={productsOverviewScreenOptions}
      />
      <SkanerStackNavigator.Screen
        name="Gra"
        component={Gra}
        // options={productsOverviewScreenOptions}
      />
    </SkanerStackNavigator.Navigator>
  );
};
