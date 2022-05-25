import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';

import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';

import {freeGames, paidGames, sliderData} from '../model/data';
import {getAllSalons} from '../services/SalonServices';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

export default function HomeScreen({navigation}) {
  const [gamesTab, setGamesTab] = useState(1);
  const [salons, setSalons] = useState([]);
  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      setUser(JSON.parse(user));
    });
    getAllSalons().then(res => {
      setSalons(res.data);
      console.log(res.data);
    })
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Hello! {user?.firstName} {user?.lastName}
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5, marginTop: 15}}
          />
          <TextInput placeholder="Search" />
        </View>

        {/* <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View> */}
        {/* 
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        /> */}

        <View style={{marginVertical: 20}}>
          {/* <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          /> */}
        </View>

        {salons  &&
          salons?.map(item => (
            <ListItem
              key={item.id}
              photo={item.profilePicture || require('../assets/images/misc/shopIcon.png') }
              title={item.name}
              subTitle={item.contactNo}
              isFree={'Yes'}
              onPress={() => {
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                  photo: item.profilePicture,
                  subTitle: item.contactNo,
                });
              }}
            />
          ))}
        {/* {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))} */}
      </ScrollView>
    </SafeAreaView>
  );
}
