import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { Font } from "./fontfamily";
import { fp, hp, hzp, vp } from "./fontsize";

export const base = StyleSheet.create({
    container: {
        paddingHorizontal: hzp(20),
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: hzp(-4),
    },
    textDanger: {
        color: colors.rederror
    },
    textCenter: {
        textAlign: 'center'
    },
    w100:{
        width:'100%'
    },
    subrow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    rowcenter:{
        alignItems:'center'
    },
    col1: {
        width: '8.33333333%',
        paddingHorizontal: hzp(4),
    },
    col2: {
        width: '16.66666667%',
        paddingHorizontal: hzp(4),
    },
    col3: {
        width: '25%',
        paddingHorizontal: hzp(4),
    },
    col4: {
        width: '33.33333333%',
        paddingHorizontal: hzp(4),
    },
    col5: {
        width: '41.66666667%',
        paddingHorizontal: hzp(4),
    },
    col6: {
        width: '50%',
        paddingHorizontal: hzp(4),
    },
    col7: {
        width: '58.33333333%',
        paddingHorizontal: hzp(4),
    },
    col8: {
        width: '66.66666667%',
        paddingHorizontal: hzp(4),
    },
    col9: {
        width: '75%',
        paddingHorizontal: hzp(4),
    },
    col10: {
        width: '83.33333333%',
        paddingHorizontal: hzp(4),
    },
    col11: {
        width: '91.66666667%',
        paddingHorizontal: hzp(4),
    },
    col12: {
        width: '100%',
        paddingHorizontal: hzp(4),
    },
    // Button: {
    //     type: 'solid',
    //     titleStyle: {
    //         color: colors.green,
    //         fontSize: fp(20),
    //         fontFamily: Font.regular,
    //         borderRadius: 20,
    //     },
    //     buttonStyle: {
    //         paddingVertical: vp(73),
    //         borderRadius: fp(15),
    //     },
    // },
    // Statusbar 
    statusbar: {
        backgroundColor: colors.primary,
    },
    statusbar2: {
        backgroundColor: colors.lightgreen,
    },
    // image: {
    //     height: '100%',
    //     width: '100%',
    // }
    mt6:{
        marginTop:hp(30),
    },
    mt5:{
        marginTop:hp(25),
    },
    mt4:{
        marginTop:hp(20),
    },
    mt3:{
        marginTop:hp(15),
    },
    mt2:{
        marginTop:hp(10),
    },
    mt1:{
        marginTop:hp(5),
    },
    mb6:{
        marginBottom:hp(30),
    },
    mb5:{
        marginBottom:hp(25),
    },
    mb4:{
        marginBottom:hp(20),
    },
    mb3:{
        marginBottom:hp(15),
    },
    mb2:{
        marginBottom:hp(10),
    },
    mb1:{
        marginBottom:hp(5),
    },
    pt6:{
        paddingTop:hp(30),
    },
    pt5:{
        paddingTop:hp(25),
    },
    pt4:{
        paddingTop:hp(20),
    },
    pt3:{
        paddingTop:hp(15),
    },
    pt2:{
        paddingTop:hp(10),
    },
    pt1:{
        paddingTop:hp(5),
    },

    pb6:{
        paddingBottom:hp(30),
    },
    pb5:{
        paddingBottom:hp(25),
    },
    pb4:{
        paddingBottom:hp(20),
    },
    pb3:{
        paddingBottom:hp(15),
    },
    pb2:{
        paddingBottom:hp(10),
    },
    pb1:{
        paddingBottom:hp(5),
    },
    bottomShadow: {
        position: 'absolute',
        bottom: hp('200'),
        width: '100%',
        height: hp(200),
        backgroundColor: '#FFF',
        borderWidth: hp(2),
        zIndex: 99,
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,

        shadowColor: "green",
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    }

});