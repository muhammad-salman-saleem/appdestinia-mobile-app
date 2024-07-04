import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../assets/global_style/colors';
import { Font } from '../../assets/global_style/fontfamily';
import { fp, hp, hzp, vp, wp } from '../../assets/global_style/fontsize';

export const styles = StyleSheet.create({
  view: {
  flex:1,
  backgroundColor:colors.white
  },
  txt:{
    fontSize:fp(60),
    color:'#000'
  },
  mainhef:{
    paddingTop:hp(70),

textAlign:'center',
alignItems:'center',
borderBottomWidth:hp(1),
borderColor:colors.orange,
paddingBottom:hp(10),
backgroundColor:colors.white

  },
  head:{
    fontSize:fp(30),
    color:'#000',
    fontFamily: Font.lightBold
  },
  head2:{
    fontSize:fp(20),
    color:colors.orange,
    fontFamily: Font.regular
  },
  ptop1: {
    paddingTop: hp(10)
  },
  menudivde:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingHorizontal:hzp(10),
    marginBottom:hp(25),
  },
  menuarea:{
    marginTop:hp(30),
    paddingLeft:wp(5)
  },
  iconarea:{
    width:wp(38),
    position:'relative',
    top:hp(5),
    alignItems: 'center',
    height: wp(35),
    paddingTop: hp(1)
  },
  menuTab:{
    flex: 1,
    flexDirection: 'row'
  },
  txtare:{
  },
  txtrt:{
    fontSize:fp(24),
    paddingTop: Platform.OS == 'ios' ? hp(5) : hp(3),
    color:colors.black,
    paddingLeft:wp(10),
    fontFamily: Font.regular
  },
});



