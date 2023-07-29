import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Pessoas(props) {
    return (
        <View style={styles.areaPessoa}>
            <Text style={styles.textoPessoas}>{props.data.nome}</Text>
            <Text style={styles.textoPessoas}>{props.data.idade} anos</Text>
            <Text style={styles.textoPessoas}>{props.data.email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    areaPessoa: {
        backgroundColor: '#121212',
        height: 200,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoPessoas: {
        color: '#fff',
        fontSize: 20
    }
})


export default Pessoas;