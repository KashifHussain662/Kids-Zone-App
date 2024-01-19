import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../../theme';
import styles from './styles';
import {ColorGame} from './games';
import Cartoons from './cartoons';
import Rehymes from './rehymes';

const Home = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleItemClick = value => {
    setSelectedValue(value);
  };

  return (
    <SafeAreaView
      style={{backgroundColor: 'rgba(78, 78, 78, 0.66)', padding: 16}}>
      <ScrollView horizontal={true}>
        <Image source={Images.icBanner1} style={{marginRight: 10}} />
        <Image source={Images.icBanner4} style={{marginRight: 10}} />
        <Image source={Images.icBanner2} style={{marginRight: 10}} />
        <Image source={Images.icBanner3} style={{marginRight: 10}} />
      </ScrollView>
      <ScrollView>
        <View style={styles.state_container}>
          <TouchableOpacity onPress={() => handleItemClick(<Cartoons />)}>
            <Text style={styles.stateheading}>Cratoon</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleItemClick(<Rehymes />)}>
            <Text style={styles.stateheading}>Rehymes</Text>
          </TouchableOpacity>

          {/* Games */}
          <TouchableOpacity
            onPress={() =>
              handleItemClick(
                <View
                  style={{
                    paddingBottom: 300,
                  }}>
                  <View>
                    <ColorGame />
                  </View>
                </View>,
              )
            }>
            <Text style={styles.stateheading}>Games</Text>
          </TouchableOpacity>
        </View>

        {selectedValue}
      </ScrollView>
      <Cartoons />
    </SafeAreaView>
  );
};

export default Home;
