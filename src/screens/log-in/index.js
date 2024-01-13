import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Images} from '../../theme';
import styles from './styles';
import Tabs from '../../routes/tabs';
import {showToast} from '../../utility';

const LogIn = ({navigation}) => {
  // email,password state

  const [email, setemail] = useState(__DEV__ ? 'kashif@gmail.com' : '');
  const [password, setpassword] = useState(__DEV__ ? 'abc123' : '');

  // create code

  const userCreate = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        showToast({message: 'That email address is already in use!'});
        if (error.code === 'auth/email-already-in-use') {
          showToast({message: 'That email address is already in use!'});
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  // SignIn Codes

  const userSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('user logged in');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <ImageBackground source={Images.iclogIn} style={styles.B_img}>
      <View style={styles.container}>
        <Text style={styles.heading}>LogIn</Text>
        <View style={styles.form}>
          <TextInput
            value={email}
            onChangeText={txt => setemail(txt)}
            placeholder="Enter Email or Phone Number"
            style={styles.TextInput}
          />
          <TextInput
            value={password}
            onChangeText={txt => setpassword(txt)}
            placeholder="Enter Password"
            style={styles.TextInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => userCreate()}
          // onPress={userSignIn}
          // onPress={() => navigation.navigate('Tabs')}
          style={styles.button}>
          <Text style={styles.button_txt}>Log In</Text>
        </TouchableOpacity>
        <Text>or</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.txt1}> create account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LogIn;
