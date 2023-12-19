import {View, Text, Alert} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigation from './src/navigations/AppNavigation';
import messaging from '@react-native-firebase/messaging';
const App = () => {
  useEffect(() => {
    getDeviceToken();
  }, []);
  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log(token);
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(
        'A new fcm message arrived in foreground mode!!',
        JSON.stringify(remoteMessage),
      );
      return unsubscribe;
    });
  }, []);
  return <AppNavigation />;
};

export default App;
