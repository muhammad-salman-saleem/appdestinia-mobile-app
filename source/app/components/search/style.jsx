import { StyleSheet } from 'react-native';
import { colors } from '../../assets/global_style/colors';
import { Font } from '../../assets/global_style/fontfamily';
import { fp, hp, hzp, vp, wp } from '../../assets/global_style/fontsize';

export const styles = StyleSheet.create({
    view: {
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: 'green',
    },
    txt:{
        fontSize:fp(60),
        color:'#000'
    },
});



