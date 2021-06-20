import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToHistory } from '../actions/PressActions';

const ListItem2 = ({item}) => {
    // console.log(item.item);
    return (
        <TouchableOpacity style={styles.listItem} >
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                    {item.item.cards[0].code}
                    {/* {item.code} */}
                </Text>
                <Text style={styles.listItemSmallText}>
                    {/* This is {item.value} of {item.suit}. */}
                    This is {item.item.cards[0].value} of {item.item.cards[0].suit}.
                </Text>
                {/* <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)} /> */}
                <Image
                    style={styles.tinyLogo}
                    source={{
                    // uri: item.image,
                    uri: item.item.cards[0].image,
                    }}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    },
    listItemSmallText: {
        fontSize: 12,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
    width: 66,
    height: 58,
    },
});

export default ListItem2;