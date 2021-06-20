import React from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from 'react-redux';
import ListItem2 from '../components/ListItem2';

function HistoryScreen() {
    
    const historyOfCards = useSelector(state => state);

    return (
        <View style={styles.container}>
            <FlatList 
            // data={items}
            // data={data.Cards}
            data={historyOfCards}
            renderItem={({item}) => <ListItem2 item={item} />}
            keyExtractor={(item) => item.id}
            />
        </View>
        
    );  
    
    
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
    },
  
});

export default HistoryScreen; 