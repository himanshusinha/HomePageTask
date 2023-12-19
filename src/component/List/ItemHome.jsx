import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const ItemHome = ({item}) => {
  const subStringTitle =
    item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title;

  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.poster}
        source={{
          uri: item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : 'https://cringemdb.com/img/movie-poster-placeholder.png',
        }}
      />

      <Text style={styles.titleStyle}>{subStringTitle}</Text>
    </View>
  );
};

export default ItemHome;
