import {StyleSheet, Platform} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: moderateScale(10), // Adjusted margin to avoid duplicate declaration
    position: 'relative',
  },
  poster: {
    width: moderateScale(170),
    height: moderateScale(170),
    borderRadius: 8,
    alignSelf: 'center',
  },
  listStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(20),
    padding: moderateScale(20),
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    elevation: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
    }),
  },
  imageStyle: {width: moderateScale(20), height: moderateScale(20)},
});

export default styles;
