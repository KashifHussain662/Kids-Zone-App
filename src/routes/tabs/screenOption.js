import {Image, View} from 'react-native';
import {Images} from '../../theme';

export let screenOptions = {
  headerShown: true,
  headerTitleStyle: {
    color: '#000',
    fontWeight: '800',
  },

  headerStyle: {
    backgroundColor: 'transparent',
  },
  // headerLeft: () => {
  //   return (
  //     <Image
  //       style={{marginLeft: 24, height: 35, width: 30}}
  //       source={Images.icLeft}
  //     />
  //   );
  // },
  headerRight: () => {
    return <Image style={{marginRight: 15}} source={Images.icaccountLogo} />;
  },
};
