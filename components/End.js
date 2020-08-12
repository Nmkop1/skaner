import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Animated,
  BackHandler,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainButton from "../constants/MainButton";
import Kolor from "../constants/Kolor";

const X = (props) => {
  const [zmiana, setZmiana] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setZmiana((zmiana) => !zmiana);
    }, 1500);
    return () => clearInterval(timer);
  }, []);
  const text = "Twoja kart to...";

  const display = zmiana ? text : " ";
  return (
    <View style={styles.containerText}>
      <Text style={styles.text}> {display} </Text>
    </View>
  );
};
const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 8000,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const End = (props) => {
  const [raz, setRaz] = useState(true);
  const [zmiana, setZmiana] = useState(true);
  const fa1 = "ios-moon";
  const fa2 = "ios-star";
  const fa3 = "ios-thumbs-up";
  const fa4 = "ios-heart";
  const fa5 = "ios-car";
  const fa6 = "ios-happy";
  const fa7 = "ios-snow";
  const fa8 = "ios-sunny";
  const fa9 = "ios-cut";
  index = props.navigation.getParam("index");
  const fa = [fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9];
  const ico = <Ionicons name={fa[index]} size={90} color={Kolor.kolor1} />;

  useEffect(() => {
    const timer = setTimeout(() => {
      setZmiana(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRaz(false);
    }, 12500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", exit);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", exit);
    };
  }, [exit]);

  const exit = () => {
    BackHandler.exitApp();
    return true;
  };

  return (
    <ImageBackground
      source={require("../foto/tlo_liczby1.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      {zmiana ? (
        <X />
      ) : (
        <View style={styles.container}>
          <View>
            <FadeInView>{ico}</FadeInView>
          </View>
        </View>
      )}
      {raz ? null : (
        <>
          <View style={styles.bingoTextWrap}>
            <Text style={styles.bingoText}>Wygrałem !!!</Text>
          </View>
          <View style={styles.buttonsWrap}>
            <View style={styles.viewText}>
              <Text style={styles.textButtons}>Może jeszcze raz</Text>
            </View>
            <View style={styles.buttons}>
              <View style={styles.viewButtons}>
                <MainButton
                  style={styles.buttonText}
                  onPress={() => {
                    props.navigation.replace("Ekran2", {});
                  }}
                >
                  TAK
                </MainButton>
              </View>
              <View>
                <MainButton
                  style={styles.buttonText}
                  onPress={() => {
                    exit();
                  }}
                >
                  NIE
                </MainButton>
              </View>
            </View>
          </View>
        </>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
    paddingBottom: "20%",
  },
  containerText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonsWrap: {
    width: "100%",
    height: "20%",
    position: "absolute",
    bottom: "5%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  viewText: {
    alignItems: "center",
    justifyContent: "center",
  },
  viewButtons: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "3%",
  },
  textButtons: {
    color: "white",

    fontSize: 22,
    paddingBottom: "5%",
  },
  bingoTextWrap: {
    width: "100%",
    height: "20%",
    position: "absolute",
    top: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  bingoText: {
    textAlign: "center",
    color: "white",
    fontFamily: "lato-bold",
    fontSize: 40,
  },
});

export default End;
