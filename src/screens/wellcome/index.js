import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {Images} from '../../theme';
import styles from './styles';
const Wellcome = ({navigation}) => {
  return (
    <ImageBackground source={Images.icWellcome} style={styles.B_img}>
      <View style={styles.container}>
        <Text style={styles.heading}>Hello</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={styles.button}>
          <Text style={styles.button_txt}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Wellcome;
