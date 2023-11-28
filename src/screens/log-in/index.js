import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Images} from '../../theme';
import styles from './styles';

const LogIn = ({navigation}) => {
  return (
    <ImageBackground source={Images.iclogIn} style={styles.B_img}>
      <View style={styles.container}>
        <Text style={styles.heading}>LogIn</Text>
        <View style={styles.form}>
          <TextInput
            placeholder="Enter Email or Phone Number"
            style={styles.TextInput}
          />
          <TextInput placeholder="Enter Password" style={styles.TextInput} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
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
