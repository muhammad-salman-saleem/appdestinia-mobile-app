import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/global_style/colors';
import { fp, hp, hzp, vp, wp } from '../../../assets/global_style/fontsize';
import { Font } from '../../../assets/global_style/fontfamily';


export const styles = StyleSheet.create({
  view: {
    flex:1,
    backgroundColor:colors.white
    },
    uptitle:{
      paddingTop:hp(20),
      paddingBottom:hp(25),
      borderBottomWidth:hp(1),
      paddingLeft: hp(6),
      borderColor:colors.orange,
      width:'100%',
      flexDirection: 'row',
   },
   headtitle: {
    flexDirection: 'row',
   },
   headit:{
     fontSize:fp(25),
     fontFamily:Font.semiBold,
     color:colors.black,
     paddingVertical:vp(20),
     borderBottomWidth: 1,
     borderColor:colors.offgrey,
     
   },
   icnset:{
   },
   txtit:{
       fontSize:fp(28),
       fontFamily: Font.lightBold,
       color:colors.black_Z,
       alignSelf: 'flex-start',
       marginLeft: wp(10)
   },
   crossIconWrap: {
    // backgroundColor: 'pink',
    width: wp(50),
    justifyContent: 'center',
    alignItems: 'center'
    // height: hp(50)
   },
   crossIcon: {
    width: wp(18), 
    height: wp(20), 
    // marginLeft: wp(24),
    // marginVertical: '21%',
   },
    sech:{
        paddingHorizontal:hzp(20),
        paddingVertical:vp(20),
        backgroundColor:'#f7f7f7'
    },
    txt:{
      fontSize:fp(60),
      color:colors.black_Z
    },
    loct:{
      position:'absolute',
      right:10,
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
    fontFamily: Font.regular
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
      fontSize:fp(20),
      color:colors.black,
      fontFamily: Font.regular
    },
    divide:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:vp(15),
      paddingHorizontal:hzp(20)
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
      color:colors.black
    },
    txtorange:{
      fontSize:fp(20),
      color:colors.orange
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
     
    },
    border:{
      color: colors.orange,
      borderWidth:wp(1),
      borderColor:colors.orange,
      borderRadius:hp(10)
    },
    maingt:{
      borderColor:'#ed6217',
      borderWidth:2,
    borderRadius:wp(20),
      padding:wp(20),
      position:'relative',
      width:'100%',
    

    },
    input: {
        height: hp(80),
        margin: 0,
        width: '100%',
        fontSize: hp(20),
        color: colors.black_Z,
        fontFamily: Font.lightBold
      },
      inut:{
        width:'100%',
        marginBottom:hp(0),
        height: hp(50),
        margin: 0,
        marginBottom:hp(0),
        borderWidth: 1,
        padding: 10,
        borderRadius:wp(15),
        borderColor:colors.grey,
        backgroundColor:colors.white,
        flexDirection:'row',
        alignItems:'center'
      },
      scrollWrap: {
        height: '90%'
      },
      inut2:{
        width:'100%',
        borderBottomWidth: 1,
        padding: 0,
        borderRadius:wp(0),
        paddingHorizontal:wp(30),
        borderColor:colors.offgrey,
        backgroundColor:'#FFF',
        flexDirection:'row',
        alignItems:'center',
      },
      input3:{
        fontSize:fp(21),
        paddingVertical:vp(20),
        paddingRight:wp(15),
        color:colors.black,
        fontFamily: Font.regular
      },
     
      outer:{
        borderRadius:wp(30),
        borderWidth:wp(2),
        borderColor:colors.orange,
        marginBottom:hp(20),
        flexDirection:'row',
        width:'100%',
      
       marginTop:hp(40),
        marginHorizontal:hzp(4)
      },
      outer2:{
        borderRadius:wp(30),
        borderWidth:wp(2),
        borderColor:colors.white,
        marginBottom:hp(20),
        flexDirection:'row',
       
        width:'100%',
      
       marginTop:hp(40),
        marginHorizontal:hzp(4)
      },
      tabItem: {
        flexDirection: 'row', // Arrange icon and text horizontally
        alignItems: 'center', // Align items vertically within the row
        // paddingHorizontal: 10, // Add some horizontal padding
        width:'100%',
       
      },
      icon: {
        marginRight: 3, // Add space between icon and text
      },
      title: {
        fontSize: fp(20),
        padding: 0,
        color:'#ed6217',
      },
      title2:{
        fontSize: fp(20),
        padding: 0,
        color:'#c1c1c1',
      },
      logo:{
        fontSize:fp(50),
        textAlign:'center',
        color:colors.black,
        marginTop:hp(50),
        fontFamily:Font.medium,
       
      },
      // it:{
      //   backgroundColor:'green',

      // },
  });
  
  

