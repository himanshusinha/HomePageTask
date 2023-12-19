import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../List/styles';

const AppButton = ({onPress, title, style, buttonTitleStyle, buttonStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      buttonTitleStyle={buttonStyle}
      buttonStyle={buttonStyle}>
      <Text style={buttonTitleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
