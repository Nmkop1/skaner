import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainButton from '../constants/MainButton';
import EkranCard from "../constants/EkranCard"
import EkranText from "../constants/EkranText"


const Ekran3 = props => {


    return (
        <View style={styles.container}>

            <EkranCard>
                <EkranText style={{ paddingBottom: "9%" }}>Patrząc w kamerę dodaj cyfry wybranej liczby
                np.: 4+3=7</EkranText>
                <MainButton onPress={() => {
                    props.navigation.replace('Ekran4', {

                    });
                }}>Dalej </MainButton>
            </EkranCard>




        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Ekran3;