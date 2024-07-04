import { createTheme } from '@rneui/themed';
import { colors } from './colors';
import { Font } from './fontfamily';
import { fp, hp, hzp, vp } from './fontsize';
export const Theme = createTheme({
    components: {

        Button: {
            type: 'solid',
            titleStyle: {
                color: colors.white,
                fontSize: fp(16),
                fontFamily: Font.regular,
                textAlign: 'center',
                alignItems: 'center',
            },
            buttonStyle: {
                borderRadius: hp(5),
                paddingVertical: vp(18),
                paddingHorizontal: hzp(18),
                backgroundColor: colors.primary,
                width:'100%',
                maxWidth:'100%',
            },
            containerStyle: {
                borderRadius: hp(10),
               
            },
        },
        Text: {
            h1Style: {
                fontSize: fp(24),
                fontFamily: Font.semiBold,
                color: colors.black,
            },
            h2Style: {
                fontSize: fp(22),
                fontFamily: Font.semiBold,
                color: colors.black,
            },
            h3Style: {
                fontSize: fp(20),
                fontFamily: Font.semiBold,
                color: colors.black,
            },
            h4Style: {
                fontSize: fp(18),
                fontFamily: Font.semiBold,
                color: colors.black,
            },
            fontSize: fp(16),
            fontFamily: Font.semiBold,
            color: colors.black,
        },
        Input: {
            labelStyle: {
                color: colors.black,
                fontFamily: Font.medium,
                fontSize: fp(16),
                fontWeight: 'normal',
                lineHeight: fp(20)
            },
            placeholderTextColor: colors.lightgrey,
            placeholder: {
                color: colors.lightgrey,
            },
            inputContainerStyle: {
                fontFamily: Font.regular,
                borderColor: colors.offgrey,
                borderRadius: hp(10),
                paddingVertical: vp(10),
                paddingHorizontal: hzp(15),
                borderWidth: 1,
                marginLeft: hzp(-10),
                height: hp(60),
            },
            containerStyle: {
                paddingRight: vp(-10),
            },
            selectionColor: colors.primary,
            errorStyle: {
                color: colors.rederror,
                fontFamily: Font.regular,
                fontSize: fp(14),
                margin: 0,
                paddingBottom: 5,
            },
            fontFamily: Font.regular,
            fontSize: fp(16),
        },
    },
});
