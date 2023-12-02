import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {data} from './data';
import styles from './styles';
import {Images} from '../../theme';

const Learn = () => (
  <SafeAreaView style={{paddingBottom: 20, padding: 10}}>
    <View style={styles.Input}>
      <Image source={Images.icSearch} />
      <TextInput placeholder="search here" style={styles.Input_View} />
    </View>

    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.Learn}>
          <View>{item.Image}</View>
          <View>
            <Text style={styles.FlatListtxt}>{item.title}</Text>
          </View>
          <View>{item.icon}</View>
        </View>
      )}
    />
  </SafeAreaView>
);

export default Learn;
