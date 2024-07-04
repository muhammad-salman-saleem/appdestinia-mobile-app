import {React, useState, useEffect} from 'react';
import { View, Switch} from 'react-native';
import { StyleSheet, Text, TouchableOpacity, Linking, BackHandler, Alert} from 'react-native';
import { styles } from './style';
import WebView from 'react-native-webview';
import { Button, Icon, Image } from '@rneui/themed';
import { Icons, IconsType } from '../../assets/global_style/icon';
import { colors } from '../../assets/global_style/colors';
import { Dimension } from '../../assets/global_style/dimension';
import { fp, hp, wp } from '../../assets/global_style/fontsize';
import { base } from '../../assets/global_style/base';
import { Images } from '../../assets/global_style/images';
import CustomWebView from '../customWebView';
import {useTranslation} from 'react-i18next';
import { connect } from 'react-redux';
import CustomDTabs from '../CustomDTabs';
import { Font } from '../../assets/global_style/fontfamily';

let initWebview = false;
const Help = (props) => {
   const {t, i18n} = useTranslation();
   const [checked, setChecked] = useState(false);
   const [openWebView, setOpenWebview] = useState(null);
   useEffect(() => {
      const backAction = () => {
         if(initWebview) {
            setOpenWebview(null);
            props.setFilterPopup(null);
            initWebview = false;
         }
         else {
            props.onPress('menu');
         }

        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
  
      return () => backHandler.remove();
    }, []);
    
    return (
        <>
            {
               openWebView
               ?
               <CustomWebView
                  data={openWebView}
               />
               :
               <View style={styles.view}>
                  <View style={styles.mainhef}>
                     <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                        <TouchableOpacity
                           onPress={() => props.onPress('menu')}
                           style={{position: 'absolute', left: wp('10'),alignItems: 'center', width: wp(55), height: hp(60)}}
                        >
                           <Image
                              source={require('../../assets/icons/back.png')}
                              style={[{ width: wp('18'), height: wp('26'), marginTop: hp(15)}]}
                           />
                        </TouchableOpacity>
                        <Text style={styles.head}>{t('Ayuda')}</Text>
                     </View>
                  </View>
                  <View>
                     <View style={styles.mainit}>
                        <Text style={styles.txtonw}>{t('Tienes_alguna_pregunta')}</Text>
                        <View style={base.mt4}>
                           <Button 
                           buttonStyle={styles.buttonstylset}
                           containerStyle={{ width: '100%' }}
                           titleStyle={{ width: '100%', paddingHorizontal: hp(4), fontSize: fp(22), color: colors.black_Z, fontFamily: Font.regular }}
                           onPress={() => {
                              let url = 'https://destinia.com/m/faqs?mode=app&lang='+(props.language && props.language.code ? props.language.code : global.deviceLanguage);
                              // console.log(url);
                              // CustomDTabs.init(url);
                              initWebview = true;
                              setOpenWebview({
                                 url: url,
                                 title: t('Preguntas_frecuentes'),
                                 onPress: () => {
                                    initWebview = false;
                                    setOpenWebview(null);
										      props.setFilterPopup(null); 
                                 }
                              });
										props.setFilterPopup({ modal: 'help', data: null }); 
                            }}
                           style={styles.btn_met}
                           >{t('Preguntas_frecuentes')}</Button>
                        </View>
                        <View style={base.mt4}>
                           <Button
                           buttonStyle={styles.buttonstylset}
                           containerStyle={{ width: '100%' }}
                           titleStyle={{ width: '100%', fontSize: fp(22), color: colors.black_Z, fontFamily: Font.regular }}
                           style={styles.btn_met}
                           onPress={() => {
                              let url = 'https://res.destinia.com/contact/reservations?mode=app&lang='+(props.language && props.language.code ? props.language.code : global.deviceLanguage);
                              // CustomDTabs.init(url);
                              initWebview = true;
                              setOpenWebview({
                                 url: url,
                                 title: t('contact_us'),
                                 onPress: () => {
                                    initWebview = false;
                                    setOpenWebview(null);
										      props.setFilterPopup(null);
                                 }
                               });
										props.setFilterPopup({ modal: 'help', data: null });
                            }}
                           >{t('contact_us')}</Button>
                        </View>
                        <View style={base.mt4}>
                           <TouchableOpacity style={[base.w100, base.mb2]}
                           onPress={() => {
                              Linking.openURL('https://destinia.com/web/privacy_policy/'+(props.language && props.language.code ? props.language.code : 'en'));  
                           }}
                           >
                              <Text style={styles.txtlrft}>{t('Privacy_policy')}</Text>
                           </TouchableOpacity>
                           <TouchableOpacity
                              onPress={() => {
                                 Linking.openURL('https://destinia.com/web/cookies/'+(props.language && props.language.code ? props.language.code : 'en'));
                              }}
                           >
                              <Text style={styles.txtlrft}>{t('Cookies_policy')}</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                     {
                        false
                        &&
                        <View style={styles.mainit}>
                        <Text style={styles.txtonw}>¡También podemos ayudarte vía chat!</Text>
                        <View style={base.mt3}>
                              <Button
                                 buttonStyle={styles.buttonstylset}
                                 containerStyle={{ width: '100%' }}
                                 titleStyle={{ fontSize: fp(22), color: colors.black }}
                                 style={styles.btn_met}
                              >
                              
                                 <View style={styles.btnimg}>
                                    {/* <Image source={Images.boy} style={styles.image} /> */}
                              </View> 
                                 
                                 Iniciar conversación
                                 
                              
                              </Button>
                           </View>                   
                        </View>
                        }
                  </View>
               </View>
            }
            
        </>
    );
};

const mapStateToProps = (state) => {
   return {
     currency: state.CurrencyReducer.currency,
      filterPopup: state.FilterPopUpReducer.filterPopup,
      language: state.LanguageReducer.language,
   };
 };
 const mapDispatchToProps = (dispatch) => {
	return {
      setFilterPopup: (lang) => {
		   dispatch({ type: 'SET_FILTER_POPUP', payload: lang })
	   },
	};
 };
 export default connect(mapStateToProps, mapDispatchToProps)(Help);
 