import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {Images} from '../../theme';
import styles from './styles';
import Tabs from '../../routes/tabs';

const SignIn = ({navigation}) => {
  return (
    <ImageBackground source={Images.ichome} style={styles.B_img}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LogIn')}
          style={styles.button}>
          <Text style={styles.button_txt}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={styles.button}>
          <Image source={Images.icggl} />
          <Text style={styles.button_txt}>sign with google</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignIn;
