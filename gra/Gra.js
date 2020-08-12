import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import JedenElement from "./JedenElement";
import Dwa from "./Dwa";
import Trzy from "./Trzy";
import MainButton from "../constants/MainButton";
import Card from "../constants/Card";
import EkranText from "../constants/EkranText";
import Spinner from "react-native-loading-spinner-overlay";
import Colors from "../constants/Colors";

const Gra = (props) => {
  const noConst = Math.floor(Math.random() * 8);

  const [index, setIndex] = useState(noConst);
  const tab = new Array(99);

  const liczby = tab.fill(1).map((el, i) => i + 1);
  const [zmiana, setZmiana] = useState(true);
  const [spinner, setSpinner] = useState(true);

  const filter = liczby.filter((liczba, id) => liczba % 9 === 0);
  const antyfilter = liczby.filter((liczba) => !(liczba % 9 === 0));

  const jeden = filter.map((jedna) => (
    <JedenElement key={jedna} jedna={jedna} index={index} />
  ));

  const dwa = antyfilter.map((jedna) => <Dwa key={jedna} jedna={jedna} />);

  const trzy = [...jeden, ...dwa].sort((a, b) => {
    if (a.props.jedna > b.props.jedna) {
      return 1;
    }
    if (a.props.jedna < b.props.jedna) {
      return -1;
    }
    return 0;
  });

  const gra = trzy.map((jedna, id) => <Trzy key={id} jedna={jedna} />);

  useEffect((props) => {
    const timer = setTimeout(() => {
      setZmiana(false);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinner(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  //   return zmiana ? (
  //     <View style={styles.container}>
  //       <Spinner
  //         visible={spinner}
  //         textContent={"Loading..."}
  //         textStyle={styles.spinnerTextStyle}
  //         color={Colors.kolor1}
  //         overlayColor={"rgba(255, 255, 255, 0.9)"}
  //       />
  //       <View style={styles.liczby}>{gra}</View>
  //     </View>
  //   ) : (
  //     <End />
  //   );
  // };
  return (
    <View style={styles.container}>
      <View style={styles.liczby}>{gra}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  liczby: {
    marginTop: "6%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  spinnerTextStyle: {
    color: Colors.kolor1,
  },
  ekranText: {
    lineHeight: 25,
    paddingHorizontal: "2%",
    paddingVertical: "0%",
  },
});

export default Gra;
