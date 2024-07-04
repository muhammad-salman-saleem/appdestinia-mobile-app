import { StyleSheet } from 'react-native';
import { colors } from '../../assets/global_style/colors';
import { Font } from '../../assets/global_style/fontfamily';
import { fp, hp, hzp, vp, wp } from '../../assets/global_style/fontsize';

export const styles = StyleSheet.create({
  view: {
   flex:1,
    backgroundColor: colors.red
  },
  txt: {
    fontSize: fp(60),
    color: '#000'
  },
  mainhef: {
    paddingTop: hp(60),

    textAlign: 'center',
    alignItems: 'center',
    paddingBottom: hp(10),
    backgroundColor: colors.white,
    marginBottom: hp(30),
  },
  head: {
    fontSize: fp(25),
    color: '#000'
  },
});



