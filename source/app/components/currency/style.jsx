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
  marginBottom:hp(10),
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
      color:colors.black_Z,
      paddingLeft:wp(10),
    },
    txtonw:{
      textAlign:'center',
      fontSize:fp(20),
      color:colors.black_Z,
      fontFamily: Font.lightBold
    },
    divide:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:vp(15),
      paddingHorizontal:hzp(20),
    },
    left:{
      width:'80%',
    },
    full:{
      width:'100%'
    },
    right:{
      width:'20%'
    },
    txtblack:{
      fontSize:fp(20),
      color:colors.black_Z,
      fontFamily: Font.regular
    },
    txtorange:{
      fontSize:fp(20),
      color:colors.orange,
      fontFamily: Font.regular
    },
    txtblue:{
      fontSize:fp(20),
      color:colors.blue,
      textAlign:'right'
    },
    mainit:{
    padding:wp(20)
    },
    righttxt:{
      textAlign:'right',
      flexDirection:'row',
      justifyContent:'flex-end'
    },
    icondf:{
      textAlign:'right',
      width: wp('19'),
      height: hp('15'),
      marginTop: hp('5')
    },
    border:{
      color: colors.orange,
      borderWidth:wp(1),
      borderColor:colors.orange,
      borderRadius:hp(10)
    }
  });
  
  

