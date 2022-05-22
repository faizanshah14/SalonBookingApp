import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {windowWidth} from '../utils/Dimensions';
import {freeGames, paidGames, sliderData} from '../model/data';
import ListItem from '../components/ListItem2';
const GameDetailsScreen = ({navigation, route}) => {
  const {photo, title, subTitle, isFree, price} = route.params;
  console.log(photo, title, subTitle, isFree, price);
  return (
    <ScrollView style={{flex: 1}}>
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* <Text>Game Details Screen</Text>
      <Text>{route.params?.title}</Text> */}
      <Image
        source={photo}
        style={{width: windowWidth, height: 200, borderRadius: 10, marginRight: 8}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <View style={{width: windowWidth - 100}}>
            <Text
              style={{
                color: '#333',
                fontFamily: 'Roboto-Medium',
                fontSize: 26,
              }}>
              {title}
            </Text>
            <Text
              numberOfLines={2}
              style={{
                color: '#333',
                fontFamily: 'Roboto-Medium',
                fontSize: 14,
                textTransform: 'uppercase',
              }}>
              {subTitle}
            </Text>
          </View>
        </View>

      </View>

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

export default GameDetailsScreen;
