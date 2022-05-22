import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {windowWidth} from '../utils/Dimensions';

export default function ListItem({
  photo,
  title,
  subTitle,
  isFree,
  price,
  onPress,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image
          source={photo}
          style={{width: 200, height: 150, borderRadius: 10, marginRight: 8}}
        />
        <View style={{width: windowWidth - 220}}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
            }}>
            {subTitle}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              textTransform: 'uppercase',
            }}>
            {title}
          </Text>
          <TouchableOpacity
            onPress={onPress}
            style={{
              backgroundColor: '#0aada8',
              marginTop: 20,
              padding: 10,
              width: 100,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'Roboto-Medium',
                fontSize: 14,
              }}>
              {isFree == 'Yes' && 'Book Now'}
              {isFree == 'No' && price}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
