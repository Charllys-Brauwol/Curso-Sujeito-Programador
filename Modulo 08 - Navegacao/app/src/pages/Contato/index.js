import React from "react";
import { View, Text, Button } from 'react-native';

import { useNavigation, StackActions } from '@react-navigation/native'

export default function Contato() {
    const navigation = useNavigation();

    function voltarHome() {
        navigation.dispatch(StackActions.popToTop())
    }

    return (
        <View>
            <Text>Contatos</Text>
            <Button title="Home" onPress={voltarHome} />
        </View>
    );
}
