import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {windowWidth} from '../utils/Dimensions';
import {freeGames, paidGames, sliderData} from '../model/data';
import ListItem from '../components/ListItem2';
const CartScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1 , marginTop:20}}>
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* <Text>Game Details Screen</Text>
      <Text>{route.params?.title}</Text> */}
      { paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() => {

              }}
            />
          ))}

    </View>
    </ScrollView>
  );
};

export default CartScreen;
