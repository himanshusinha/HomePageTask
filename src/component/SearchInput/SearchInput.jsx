// SearchInput.js

import React from 'react';
import {TextInput} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';

const SearchInput = ({placeholder, value, onChangeText}) => {
  return (
    <TextInput
      style={{paddingStart: moderateScale(10)}}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default SearchInput;
