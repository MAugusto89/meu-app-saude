import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.viewButtons}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('IMC')}>
                <Text style={styles.buttonText}>IMC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ICQ')}>
                <Text style={styles.buttonText}>ICQ</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 8,
        paddingTop: '10%',
        alignItems:'center',
        backgroundColor: '#F5FCFF',
    },
    title:{
        fontSize: 20,
        marginBottom: 20,
        alignSelf: 'center',
    },
    viewButtons:{
        flexDirection: 'row',
        padding: 8,
    },
    button:{
        margin: 2,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        width: 200,
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})