//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {detail} from './data';
import {SwitchButton} from '../../components';
import styles from './styles';
// create a component
const Setting = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={detail}
        renderItem={({item}) => (
          <View style={styles.flatList}>
            <View style={styles.flatListContainer}>
              <Text style={styles.flatListText}>{item.title}</Text>
              <Text>{item.btn}</Text>
            </View>
            <Text style={styles.flatListText1}>{item.Dscrpt}</Text>
          </View>
        )}
      />
    </View>
  );
};

// define your styles

export default Setting;
