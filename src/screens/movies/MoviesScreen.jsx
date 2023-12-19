import React, {useState, useEffect} from 'react';
import {View, FlatList, Image, Alert, SafeAreaView, Text} from 'react-native';
import SearchInput from '../../component/SearchInput/SearchInput';
import AppButton from '../../component/AppButton/AppButton';
import styles from './styles';
import images from '../../constants/images';
import ItemHome from '../../component/List/ItemHome';

/* TMDB MOVIES API CREDENTIALS  */

const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
const API_KEY = '04c35731a5ee918f014970082a0088b1';
const language = '&language=en-US';
const queryParam = '&query=';

const MoviesScreen = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [query, setQuery] = useState('');

  /* These is the function for getting movies from tmdb movies api */
  const fetchMovies = () => {
    fetch(
      URL + `${API_KEY}` + language + queryParam + query + '&page=' + pageNum,
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
        setTotalPages(json.total_pages);
      });
  };

  /* These is the function for search movies from tmdb movies api */
  const filterSearch = inputQuery => {
    setQuery(inputQuery);
    setPageNum(1);
    fetchMovies();
  };

  /* These is the function for next page using pagination from tmdb movies api */
  const nextPage = () => {
    if (pageNum < totalPages) {
      setPageNum(pageNum + 1);
    } else {
      Alert.alert('Next Page', 'You have reached the last page.');
    }
  };
  /* These is the function for prev page using pagination from tmdb movies api */
  const prevPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    } else {
      Alert.alert('Prev Page', 'You have reached the last page.');
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [pageNum]);

  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <AppButton
          title={'Prev Page'}
          style={styles.buttonStyle}
          buttonTitleStyle={styles.buttonTitleStyle}
          onPress={() => prevPage()}
        />
        <AppButton
          title={'Next Page'}
          style={styles.buttonStyle}
          buttonTitleStyle={styles.buttonTitleStyle}
          onPress={() => nextPage()}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image style={styles.searchIcon} source={images.search} />
        <SearchInput
          placeholder="Search movies by title ...."
          value={query}
          onChangeText={filterSearch}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: movies.length > 0 ? 130 : 20}}
        data={movies}
        renderItem={({item}) => {
          return <ItemHome item={item} />;
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default MoviesScreen;
