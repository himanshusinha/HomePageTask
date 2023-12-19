import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: moderateScale(10),
  },
  inputContainer: {
    borderWidth: 0.5,
    borderColor: 'grey',
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    paddingStart: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(45),
  },
  searchIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  titleheadingStyle: {
    fontSize: textScale(12),
    fontWeight: 'bold',
    color: 'black',
    top: moderateScale(8),
  },
  titleStyle: {
    fontSize: textScale(12),
    fontWeight: 'bold',
    color: 'black',
    top: moderateScale(8),
    alignSelf: 'center',
  },
  buttonStyle: {
    width: moderateScale(100),
    height: moderateScale(50),
    borderRadius: moderateScale(10),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleStyle: {color: 'white', fontSize: textScale(12)},
});
export default styles;
