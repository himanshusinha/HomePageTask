import {Alert, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import AppButton from '../../component/AppButton/AppButton';
import messaging from '@react-native-firebase/messaging';
import {
  db,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  limit,
} from '../../config/firebaseConfig';
import axios from 'axios';

const NotificationsScreen = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (token) {
      addTokens();
    }
  }, [token]);

  /* These is the function for fetch token from firebase firestore */
  useEffect(() => {
    const fetchToken = async () => {
      const deviceToken = await messaging().getToken();
      console.log(deviceToken);
      setToken(deviceToken);
    };

    fetchToken();
  }, []);

  /* These is the function for adding firebase device token from  */
  const addTokens = async () => {
    try {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHour = hours % 12 || 12;
      const formattedTimestamp = `${formattedHour}:${minutes}:${seconds} ${ampm}`;
      const tokensCollection = collection(db, 'tokens');

      await addDoc(tokensCollection, {
        token: token,
        timestamp: formattedTimestamp,
      });
      console.log('Token added to Firestore');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  /* These is the function for latest fcm device token from  */
  const getLatestToken = async () => {
    try {
      const tokensCollection = collection(db, 'tokens');
      const querySnapshot = await getDocs(
        query(tokensCollection, orderBy('timestamp', 'desc'), limit(1)),
      );

      let latestToken = null;
      querySnapshot.forEach(doc => {
        latestToken = doc.data().token;
      });

      console.log('Latest Token:', latestToken);
      return latestToken;
    } catch (e) {
      console.error('Error fetching latest token: ', e);
      return null;
    }
  };

  /* These is the function for sending notification on device  */
  const sendNotifications = async tokens => {
    try {
      const data = {
        registration_ids: tokens,
        notification: {
          body: 'Click to open notifications',
          title: 'Hurrah !!! New notification arrive',
        },
      };

      const config = {
        method: 'post',
        url: 'https://fcm.googleapis.com/fcm/send',
        headers: {
          Authorization:
            'key=AAAA6Yd61FY:APA91bE9BhFzEK5xaq24K6i0BdloatVq-eApbsk2niaSUu43WWaUXdywONGYw4s_GUibKL6bG7YWEEMphy0YteiaIGQds4S0xAv8KHm90G5fZfOtH97MYKtZsphQ7TwarKSfgjjkaKyy', // Replace with your actual key
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      };

      const response = await axios(config);

      if (response.data && response.data.success === 1) {
        const messageId = response.data.results[0]?.message_id;
        const notificationTitle = data.notification.title;

        Alert.alert(
          'Notification Sent',
          notificationTitle,
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else {
        console.error('Error in sending notification:', response.data);
        Alert.alert('Error', 'Failed to send notification.');
      }
    } catch (err) {
      console.error('Error sending notification:', err);
      Alert.alert('Error', 'Failed to send notification.');
    }
  };

  return (
    <View style={styles.container}>
      <AppButton
        title={'Send Push Notifications'}
        style={styles.buttonStyle}
        buttonTitleStyle={styles.buttonTitleStyle}
        onPress={async () => {
          const latestToken = await getLatestToken();
          if (latestToken) {
            sendNotifications([latestToken]);
          }
        }}
      />
    </View>
  );
};

export default NotificationsScreen;
