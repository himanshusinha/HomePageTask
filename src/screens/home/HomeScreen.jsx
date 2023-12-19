import {View, FlatList} from 'react-native';
import React from 'react';
import {data} from '../../constants/list';
import ItemScreen from '../../component/List/ItemScreen';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <ItemScreen item={item} />;
        }}
      />
    </View>
  );
};

export default HomeScreen;
