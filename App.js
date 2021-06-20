// import 'react-native-gesture-handler';
// import React, { useEffect, useState } from 'react';
// import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
// import { v4 as uuidv4 } from 'uuid';
// import AddCard from './components/AddCard';
// import Header from './components/Header';
// import ListItem from './components/ListItem';
// import data from './data';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// import { NavigationContainer } from '@react-navigation/native';

// const Stack = createStackNavigator();

// const App = () => {
  


//   // const [items, setItems] = useState([
//   //   {id: uuidv4(), text: 'Milk'},
//   //   {id: uuidv4(), text: 'Eggs'},
//   //   {id: uuidv4(), text: 'Bread'},
//   //   {id: uuidv4(), text: 'Juice'},
//   // ]);
//   // const deleteItem = (id) => {
//   //   setItems(prevItems => {
//   //     return prevItems.filter(item => item.id != id);
//   //   });
//   // };

//   // const addCard = (text) => {
//   //   if(!text) {
//   //     Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
//   //   } else {
//   //     setItems(prevItems => {
//   //       return [{id: uuidv4(), text}, ...prevItems];
//   //     });
//   //   }
//   // };


//   // const [cards, setCards] = useState([]);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const { data } = await axios.get('/api/cards');
//   //     setCards(data);
//   //   };
//   //   fetchData();
//   // }, []);

  

//   // useEffect(() => {
//   //   fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=4')
//   //     .then((response) => response.json())
//   //     .then((json) => setCards(json.cards))
//   //     .catch((error) => console.error(error))
//   //     .finally(() => setLoading(false));
//   // }, []);
//   // console.log(data.Cards)

  


//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <Header />
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </View>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 0,
//   },

// });

// export default App;












// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';

// // function HomeScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Home Screen</Text>
// //       <Button
// //         title="Go to Details"
// //         onPress={() => navigation.navigate('Details')}
// //       />
// //     </View>
// //   );
// // }

// // function DetailsScreen() {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Details Screen</Text>
// //     </View>
// //   );
// // }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: 'My home',
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }} 
//       />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;





















import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './screens/HomeStackScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HistoryScreen from './screens/HistoryScreen';
import { Provider } from 'react-redux';
import store from './store';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator 
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: {
              // your styles for the label
              fontSize: 30
            }
          }}>
          <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarBadge: 3 }} />
          <Tab.Screen name="History" component={HistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}