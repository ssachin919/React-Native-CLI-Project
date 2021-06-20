import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function DetailsScreen({ route, navigation }) {
    const {cards} = route.params;
    console.log(cards);
    return (
      <View style={styles.container}>
        <Text style={styles.itemText}>{cards[0].code}</Text>
        <Image
            style={styles.displayImage}
            source={{
            // uri: item.image,
            uri: cards[0].images.png,
            }}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      alignItems: 'center'
    },
    itemText: {
        textAlign:"center",
        fontSize: 40,
    },
    displayImage: {
        height: 455,
        width: 325,
    },
});

export default DetailsScreen;