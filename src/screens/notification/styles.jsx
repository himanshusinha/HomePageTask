import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonStyle: {
    width: moderateScale(200),
    height: moderateScale(50),
    borderRadius: moderateScale(10),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleStyle: {color: 'white', fontSize: textScale(12)},
});
export default styles;
