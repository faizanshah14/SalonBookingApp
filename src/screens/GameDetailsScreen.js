import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {windowWidth} from '../utils/Dimensions';
import {freeGames, paidGames, sliderData} from '../model/data';
import {getAllServicesForSalon, createOrder} from '../services/SalonServices';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import ListItem from '../components/ListItem2';
const GameDetailsScreen = ({navigation, route}) => {
  const {id,photo, title, subTitle, isFree, price} = route.params;
  const [services, setServices] = React.useState([]);
  const [userid, setUserid] = React.useState(null);
  React.useState(() => {
    getAllServicesForSalon(id).then(res => {
      setServices(res.data);
      console.log(res.data);
    });
    AsyncStorage.getItem('user').then(res => {
        console.log('res',JSON.parse(res).id);
        setUserid(JSON.parse(res).id);
      });
  }, [id]);
  console.log(photo, title, subTitle, isFree, price);
  return (
    <ScrollView style={{flex: 1}}>
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* <Text>Game Details Screen</Text>
      <Text>{route.params?.title}</Text> */}
      <Image
        source={photo|| require('../assets/images/misc/shopIcon.png') }
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

      {services&& services.map(item => (
            <ListItem
              key={item.id}
              photo={require('../assets/images/misc/listIcon.png')}
              title={item.serviceName}
              subTitle={item.serviceDescription}
              price={item.price}
              onPress={async (items) => {
                console.log(item.id);
                const data = {
                  userId: userid,
                  salonId: id,
                  serviceId: item.id,
                }
                console.log(data);
                const res = await createOrder(data);
                console.log(res);
                if(res.status === 'ok'){
                  console.log('res');
                  navigation.navigate('Cart')
                }
              }}
            />
          ))}

    </View>
    </ScrollView>
  );
};

export default GameDetailsScreen;
