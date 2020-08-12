import React from "react";
import { View, StyleSheet } from "react-native";
import MainButton from "../constants/MainButton";
import EkranCard from "../constants/EkranCard";
import EkranText from "../constants/EkranText";

const Ekran4 = (props) => {
  return (
    <View style={styles.container}>
      <EkranCard>
        <EkranText>
          I na koniec odejmij od wybranej liczby, liczbę otrzymaną z dodawania,
          np: 43-7=36
        </EkranText>
        <EkranText style={{ paddingBottom: "9%" }}>
          Zapamiętaj otrzymaną liczbę i przechodząc Dalej, znajdź kartę
          odpowiadającą twojej liczbie
        </EkranText>
        <MainButton
          onPress={() => {
            props.navigation.navigate("Gra", {});
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

export default Ekran4;
