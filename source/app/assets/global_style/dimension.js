import { Dimensions } from 'react-native';
import { hp } from './fontsize';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Dimension = {
    windowWidth: width,
    width: '100%',
    height: '100%',
    start: {
        x: 0,
        y: 0,
    },
    end: {
        x: 1,
        y: 0,
    },
    medium: hp(20),
    semimedium: hp(18),
    small: hp(16),
    large: hp(22),
    semilarge: hp(25),
    big: hp(28),
    xl: hp(30),
    extrabig:hp(40),
    extrabig2:hp(50),
    verysmall: hp(14),
};
