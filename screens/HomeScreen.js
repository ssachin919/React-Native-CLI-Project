import * as React from 'react';
import { FlatList } from "react-native-gesture-handler";
import AddCard from "../components/AddCard";
import ListItem from "../components/ListItem";
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

function HomeScreen({navigation}) {
    const [isLoading, setLoading] = React.useState(true);
    const [cards, setCards] = React.useState([]);

    const addCard = () => {
        console.log(1);
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        .then((response) => response.json())
        .then((json) => setCards(prevItems => {
          console.log(json);
          return [json, ...prevItems];
        }))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        });
    };


    

    return (
    <View style={styles.container}>
        <AddCard addCard={addCard} />
        <FlatList 
          // data={items}
          // data={data.Cards}
          data={cards}
          renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
          keyExtractor={(item) => item.deck_id}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
    },
  
});

export default HomeScreen;