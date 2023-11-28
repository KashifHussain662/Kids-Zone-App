//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Images} from '../../../theme';

export default Cartoon = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Cartoon's</Text>
        <View style={{flexDirection: 'row', gap: 15, margin: 10}}>
          <Image source={Images.icCartoon5} />
          <Image source={Images.icCartoon1} />
        </View>
        <View style={{flexDirection: 'row', gap: 15, margin: 10}}>
          <Image source={Images.icCartoon2} />
          <Image source={Images.icCartoon3} />
        </View>
        <View style={{flexDirection: 'row', gap: 15, margin: 10}}>
          <Image source={Images.icCartoon4} />
          <Image source={Images.icCartoon6} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
  },
});
