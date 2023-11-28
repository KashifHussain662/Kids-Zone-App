import {Image, View} from 'react-native';
import {Images} from '../../theme';

export let screenOptions = {
  headerShown: true,
  headerTitleStyle: {
    color: '#000',
    fontWeight: '800',
  },

  headerStyle: {
    backgroundColor: 'Gray',
  },
  headerRight: () => {
    return <Image style={{marginRight: 15}} source={Images.icaccountLogo} />;
  },
};
