import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';

const ItemScreen = ({item}) => {
  const navigation = useNavigation();
  let screenName;

  switch (item.id) {
    case '1':
      screenName = routes.NOTIFICATION_SCREEN;
      break;
    case '2':
      screenName = routes.MOVIES_SCREEN;
      break;
    default:
      console.warn('Unknown item ID:', item.id);
      screenName = routes.HOME_SCREEN;
      break;
  }
  const onPressHandler = () => {
    navigation.navigate(screenName);
  };
  return (
    <TouchableOpacity
      onPress={() => onPressHandler()}
      activeOpacity={0.8}
      style={styles.listStyle}>
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={item.image}
      />
      <Text>{item.screen}</Text>
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={item.icon}
      />
    </TouchableOpacity>
  );
};

export default ItemScreen;
