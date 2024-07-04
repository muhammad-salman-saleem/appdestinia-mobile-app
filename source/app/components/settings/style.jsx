import { StyleSheet } from 'react-native';
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
      color:colors.black_Z
    },
    mainhef:{
      paddingTop:hp(60),
  
  textAlign:'center',
  alignItems:'center',
  paddingBottom:hp(10),
  backgroundColor:colors.white,
  marginBottom:hp(30),
    },
    head:{
      fontSize:fp(25),
      color:colors.black_Z,
      marginTop: hp('10'),
    fontFamily: Font.lightBold
    },
    head2:{
      fontSize:fp(20),
      paddingTop:hp(5),
      color:colors.orange
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
      width:wp(30),
      position:'absolute',
      top:hp(75),
      left:wp(20),
    },
    txtare:{
      flex:1,
    },
    txtrt:{
      fontSize:fp(19),
      paddingTop:hp(5),
      color:colors.black,
      paddingLeft:wp(10),
    },
    txtonw:{
      textAlign:'center',
      fontSize:fp(24),
      color:colors.black,
      fontFamily: Font.lightBold

    },
    divide:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:vp(15),
    },
    left:{
      width:'50%',
    },
    right:{
      width:'50%',
      alignItems: 'flex-end'
    },
    txtblack:{
      fontSize:fp(24),
      color:colors.black,
      fontFamily: Font.regular
    },
    txtblue:{
      fontSize:fp(24),
      color:colors.blue,
      textAlign:'right',
      fontFamily: Font.lightBold
    },
    mainit:{
    padding:wp(20)
    },
    switch: {
      // transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
    }
  });
  
  

