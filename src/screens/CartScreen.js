import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {windowWidth} from '../utils/Dimensions';
import {freeGames, paidGames, sliderData} from '../model/data';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import {getAllOrdersForSaloon} from '../services/SalonServices';
import ListItem from '../components/ListItem2';
const CartScreen = ({navigation}) => {
  const [userid, setUserid] = React.useState(null);
  const [services, setServices] = React.useState([]);
  React.useState(() => {
    AsyncStorage.getItem('user').then(res => {
        const uId = JSON.parse(res).id;
        console.log('uId',uId);
        getAllOrdersForSaloon(uId).then(res => {
          setServices(res.data);
          console.log(res.data);
        }).catch(err => console.error(err));
        setUserid(JSON.parse(res).id);
      }).catch(err => console.error(err));
  }, []);
  return (
    <ScrollView style={{flex: 1 , marginTop:20}}>
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* <Text>Game Details Screen</Text>
      <Text>{route.params?.title}</Text> */}
      {services.flat().length > 0 && services.map(item => (
            <ListItem
              key={item.id}
              photo={require('../assets/images/misc/listIcon.png')}
              title={item.serviceName}
              subTitle={item.serviceDescription}
              price={item.price}
              showButton = {false}
            />
          ))}

    </View>
    </ScrollView>
  );
};

export default CartScreen;
