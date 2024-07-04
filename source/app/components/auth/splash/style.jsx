import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/global_style/colors';
import { Font } from '../../../assets/global_style/fontfamily';
import { fp, hp, hzp, vp, wp } from '../../../assets/global_style/fontsize';

export const styles = StyleSheet.create({
    main: {
        alignSelf: 'stretch',
        flex: 1,
        paddingTop: hp('35'),
    },
    slide: {
        flexGrow: 1,
        alignItems: 'center',
        flexDirection:'column',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
    },
    inview:{
        position:'relative',
        bottom:hp(100),
        color:colors.black_Z,
    },
     
    title: {
        fontSize: fp(30),
        fontWeight: 'medium',
        textAlign: 'center',
        color:colors.black_Z
    },
    secScreenTitle: {
        fontSize: fp(22),
        fontWeight: 'medium',
        textAlign: 'center',
        color:colors.black_Z,
    },
    strong: {
        fontWeight: 'bold',
        fontSize: fp(30),
        textAlign: 'center',
        color:colors.black_Z
    },
    unl: {
        textDecorationLine: 'underline'
    },
    dspt: {
        paddingHorizontal:hzp(10),
        marginBottom:hp(20),
        marginTop:hp(10)
    },
    textdspt:{
        fontSize: fp(25),
        textAlign: 'center',
        color:colors.black_Z,
    },
    lastLine: { 
        fontSize: fp(20), 
        color: colors.black_Z, 
        marginTop: hp(20), 
        textAlign: 'center', 
        textDecorationLine: 'underline', 
        paddingBottom: '1%' 
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit:'contain',
        resizeMode: 'contain',
        paddingTop:hp(100),
    },
    imgmain:{
        //flex:1,
        //justifyContent:'flex-start',
       backgroundColor:'#fff',
        width:'100%',
        paddingTop:hp(160),
        //overflow:'hidden'
    },
    buttonset:{
         width:'100%',
        marginTop:hp(20),
        paddingHorizontal: hp(10)
    },
    btn_met:{
        width:'100%',    
        backgroundColor:'#ffd212',
    },
    dotStyle: {
        marginBottom: hp('100'),
        backgroundColor: 'rgba(0, 0, 0, .2)'
    },
    activeDotStyle: {
        marginBottom: hp('100'),
        backgroundColor: colors.orange
    },
    dNone: { transform: [{ scale: 0 }] },
    polgon: {
        flexDirection: 'row',
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: hp('80'),

    },
    polgonIcon: {
        backgroundColor: colors.offgrey,
        marginHorizontal: hp('4'),
        borderRadius: hp('50'),
        overflow: 'hidden',
        width: hp('12'),
        height: hp('12'),
    },
    polgonIconActive: {
        backgroundColor: colors.orange,
    }
});
