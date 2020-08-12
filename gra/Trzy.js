import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



const Trzy = props => {
    return (
        <View style={styles.jeden}>
            {props.jedna}
        </View >
    )
}




const styles = StyleSheet.create({

    jeden: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 3,
        width: "9%",
        height: "11.1%",



    }
});

export default Trzy;