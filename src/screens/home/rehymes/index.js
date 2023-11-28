import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Images} from '../../../theme';

const Rehymes = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={Images.icRehymes} style={{margin: 10}} />
        <Image source={Images.icRehymes2} style={{margin: 10}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
});

export default Rehymes;
