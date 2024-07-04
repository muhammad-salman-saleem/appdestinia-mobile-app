
import { StyleSheet } from 'react-native';
import { colors } from '../app/assets/global_style/colors';
import { Font } from '../appassets/global_style/fontfamily';
import { fp, hp, hzp, vp, wp } from '../app/assets/global_style/fontsize';
const styles = StyleSheet.create({
    footerArea: {
        flex: 1,
        justifyContent: 'flex-end',
        // backgroundColor: 'navy',
    },
    tabBarStyles:{
       
        position: 'absolute',
        backgroundColor: colors.white,
        // borderRightWidth: hp(1),
        height: hp(90),
        paddingTop: hp(25),
        paddingHorizontal: hp(20),
        alignItems: 'center',
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        zIndex: 999
    },
    shadowIt: {
        position: 'absolute',
        backgroundColor: 'tranparent',
        borderColor: '#FFF',
        borderWidth: hp(0),
        backgroundColor: '#FFF',
        borderWidth: hp(1),
        bottom: hp('120'),
        width: '100%',
        height: hp('-10'),
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        shadowColor: "green",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 5,
        zIndex: 1
    },
    shadowItIos: {
        borderColor: 'rgba(216,216,216, 0.1)',
        borderTopWidth: hp(1),
        borderWidth: hp(1),
        height: hp(100),
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        shadowColor: "navy",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        zIndex: 1
    },
    iconB: {
        height: hp(60),
        width: hp(60),
        borderRadius: hp(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        width: '100%',
        height: '100%',
    },
    Image1: {
        display: 'none'
    },
    polgon: {
        width: wp(150),
        height: wp(89),
        position: 'relative',
        textAlign: 'center',
    },
    IconB: {
        height: hp(60),
        width: hp(60),
        borderRadius: hp(30),
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconWrap: {
        height: hp(40),
        width: '100%',
        justifyContent: 'center'
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS == 'ios' ? hp(15) : hp(15),
    },
    Icon: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: Platform.OS == 'ios' ? hp(15) : hp(15),
    },
    icondf: {
        // position:'absolute',
        // left:0,
        // right:0,
        // top:0,
        // zIndex:99,
        // marginTop:hp(22)
    },

});
export default styles;