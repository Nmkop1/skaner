import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import MainButton from "../constants/MainButton";
import EkranCard from "../constants/EkranCard";
import EkranText from "../constants/EkranText";
const Ekran2 = (props) => {
  return (
    <View style={styles.container}>
      <EkranCard>
        <EkranText>
          Teraz dla rozgrzewki umysłu pomyśl sobie dwucyfrową liczbę, np: 43
        </EkranText>
        <EkranText style={{ paddingBottom: "9%" }}>
          Nie mów głośno i idziemy Dalej
        </EkranText>
        <MainButton
          onPress={() => {
            props.navigation.navigate("Ekran3", {});
          }}
        >
          Dalej{" "}
        </MainButton>
      </EkranCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Ekran2;
