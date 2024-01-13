import React, {Component, useEffect, useState} from 'react';
import RootStack from './routes';
import auth from '@react-native-firebase/auth';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';

const KidsZone = () => {
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <View style={{flex: 1}}>
      <RootStack />
      <Toast />
    </View>
  );
};

export default KidsZone;
