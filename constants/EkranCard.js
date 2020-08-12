import React from 'react';
import { View, StyleSheet } from 'react-native';


const EkranCard = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default EkranCard;
