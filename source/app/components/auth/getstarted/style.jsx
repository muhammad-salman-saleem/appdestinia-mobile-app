import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/global_style/colors';
import { Font } from '../../../assets/global_style/fontfamily';
import { fp, hp, hzp, vp, wp } from '../../../assets/global_style/fontsize';

export const styles = StyleSheet.create({
  view: {
    alignSelf: 'stretch',
    flex: 1,
    marginTop: hp('40'),
  },
  txt:{
    fontSize:fp(60),
    color:'#000'
  },
  title_ti:{
    color:colors.white,
    fontSize:fp(20)
  },
  topBar: {
    marginTop: hp('40'),
    padding: hp('5'),
    backgroundColor:colors.blue,
   
  },
  topBarTitle:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:wp(10),
    paddingHorizontal:hzp(30),
    alignItems:'center',
  },
  
});



