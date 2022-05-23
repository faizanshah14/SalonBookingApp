import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { login } from '../services/AuthApis';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
;
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = React.useState('hassan@gmail.com');
  const [password, setPassword] = React.useState('123456789');
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);

  async function loginHandler(e) {
    e.preventDefault();
    // const email = e.target.elements.email.value;
    // const password = e.target.elements.password.value;
    console.log(email, password);
    const res = await login(email, password);
    console.log(res);
    if(res.result === 'ok'){
      try {
        await AsyncStorage.setItem('token', res?.data?.accessToken);
        await AsyncStorage.setItem('user', JSON.stringify(res.data));
        navigation.navigate('AppStack');
      } catch (e) {
        console.log(e)
      }
    }
  }
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{transform: [{rotate: '-5deg'}], width: 250, height: 250}}
            source={require('../assets/images/misc/hair-salon.png')}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          value={password}
          onChangeText={text => setPassword(text)}
          // fieldButtonLabel={"Forgot?"}
          // fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={loginHandler} />

        {/* <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ...
        </Text> */}

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
