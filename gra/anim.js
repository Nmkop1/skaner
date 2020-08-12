import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect } from "react";

import {
  Pressable,
  Animated,
  StyleSheet,
  Text,
  View,
  ImagePropTypes,
} from "react-native";

const Fade = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(fadeAnim, {
      toValue: 1.5,

      friction: 1,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View style={{ ...props.style, transform: [{ scale: fadeAnim }] }}>
      {props.children}
    </Animated.View>
  );
};

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Fade style={{ width: 250, height: 250, backgroundColor: "black" }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
