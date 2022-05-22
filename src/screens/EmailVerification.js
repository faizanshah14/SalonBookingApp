import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid
} from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { emailVerification } from '../services/AuthApis';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
;
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const LoginScreen = ({navigation}) => {

  const [verificationCode, setVerificationCode] = React.useState('');

  async function submitHandler(e) {
    e.preventDefault();
    // const verificationCode = e.target.elements.verificationCode.value;
    // const password = e.target.elements.password.value;
    console.log(verificationCode);
    const res = await emailVerification(verificationCode);
    console.log(res);
    if(res.result === 'ok'){
      ToastAndroid.show('Verification Successful', ToastAndroid.SHORT);
      navigation.navigate('Login');
    }else{
      ToastAndroid.show('Invalid Verification Code', ToastAndroid.SHORT);
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
          Enter Verification Code
        </Text>

        <InputField
          label={'Verification Code'}
          icon={
            <MaterialIcons
            name="code"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
          value={verificationCode}
          onChangeText={text => setVerificationCode(text)}
        />

        
        <CustomButton label={"Submit"} onPress={submitHandler} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
