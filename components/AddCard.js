import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddCard = ({addCard}) => {
    // const [text, setText] = useState('');

    // const onChange = textValue => setText(textValue);

    return (
        <View>
            {/* <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange} /> */}
            {/* <TouchableOpacity style={styles.btn} onPress={() => addCard(text)}> */}
            <TouchableOpacity style={styles.btn} onPress={() => addCard()}>
                <Text style={styles.btnText}><Icon name="plus" size={20} />{/* Add Item */} Add Card</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default AddCard;