import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MainButton from '../constants/MainButton';
import EkranCard from "../constants/EkranCard"
import EkranText from "../constants/EkranText"


const Start = props => {
    const [zmiana, setZmiana] = useState(true)
    useEffect((props) => {
        const timer = setTimeout(() => {
            setZmiana(false)
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <EkranCard>

                <EkranText style={{ fontFamily: "lato-bold", }}>
                    Może sie sprawdzimy.
                    </EkranText>
                <EkranText style={{ paddingBottom: "9%" }}>
                    Spróbuję odgadnąć co widzisz. Patrz tylko w kamerę frontową telefonu.</EkranText>
                <MainButton onPress={() => {
                    props.navigation.replace('Ekran2', {
                    });
                }}>Dalej </MainButton>
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

export default Start;