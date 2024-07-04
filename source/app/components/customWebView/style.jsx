import { StyleSheet } from 'react-native';
import { colors } from '../../assets/global_style/colors';
import { Font } from '../../assets/global_style/fontfamily';
import { fp, hp, hzp, vp, wp } from '../../assets/global_style/fontsize';

export const styles = StyleSheet.create({
  view: {
    alignSelf: 'stretch',
    flex: 1,
    maxHeight: '99%',
    backgroundColor:colors.blue
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
    marginTop: hp('30'),
    padding: hp('5'),
    backgroundColor:colors.blue,
   
  },
  topBarTitle:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:wp(10),
    paddingLeft:hzp(10),
    alignItems:'center',
  },
  crossIcon: {
    width: wp(12), 
    height: wp(12),
    objectFit: 'contain' 
  },
  crossover: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    // padding: hp(5),
    borderRadius: hp(50),
    width: wp(30), 
    height: wp(30),
    alignItems: 'center'
  }
  
});



