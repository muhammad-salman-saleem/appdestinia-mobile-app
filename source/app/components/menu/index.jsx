import { Image } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BackHandler, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { hp, wp } from '../../assets/global_style/fontsize';
import CustomDTabs from '../CustomDTabs';
import { styles } from './style';
import CustomWebView from '../customWebView';

const Menu = (props) => {
   const {t, i18n} = useTranslation();
   const [openWebView, setOpenWebview] = useState(null);

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
                <Text style={styles.head}>{t('Hola_viajero')}</Text>
                <Text  style={[styles.head2, styles.ptop1]}>{t('Dónde_quieres_ir')}</Text>
                </View>
                <View>
                    <View style={styles.menuarea}>
                        <View style={styles.menudivde}>
                            <TouchableOpacity
                                style={styles.menuTab}
                                onPress={() => {
                                    let url = 'https://res.destinia.com/my-account/multilogin?showTabs=true&defaultTab=login&mode=app&lang='+(props.language && props.language.code ? props.language.code : global.deviceLanguage)+'&return_url=https%3A%2F%2Fres.destinia.com%2Fmy-account%2Fapp%2Fprofile';
                                    // CustomDTabs.init(url);
                                    initWebview = true;
                                    setOpenWebview({
                                       url: url,
                                       title: t('Mi_perfil'),
                                       onPress: () => {
                                          initWebview = false;
                                          setOpenWebview(null);
                                          props.setFilterPopup(null); 
                                       }
                                    });
                                 props.setFilterPopup({ modal: 'help', data: null }); 
                                  }}
                                // onPress={() => {
                                //     let url = 'https://res.destinia.com/my-account/multilogin?showTabs=true&defaultTab=login&mode=app&lang='+(props.language && props.language.code ? props.language.code : global.deviceLanguage)+'&return_url=https%3A%2F%2Fres.destinia.com%2Fmy-account%2Fapp%2Fprofile';
                                //     CustomDTabs.init(url);
                                // }}
                            >
                                <View style={styles.iconarea}>
                                    <Image
                                        source={require('../../../app/assets/icons/ProfileIcon.png')}
                                        style={[{width: wp(24), height: hp(24), objectFit: 'contain', marginHorizontal: '10%'}]}
                                    />
                                </View>
                                <View style={styles.txtare}>
                                    <Text style={styles.txtrt}>{t('Mi_perfil')}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menudivde}>
                            <TouchableOpacity
                                style={styles.menuTab}
                                onPress={() => {
                                    let url = 'https://res.destinia.com/my-account/multilogin?showTabs=true&defaultTab=login&mode=app&lang='+(props.language && props.language.code ? props.language.code : global.deviceLanguage)+'&return_url=https%3A%2F%2Fres.destinia.com%2Fmy-account%2Fapp%2Fcoupons';
                                    // CustomDTabs.init(url);
                                    initWebview = true;
                                    setOpenWebview({
                                       url: url,
                                       title: t('Bonos_y_cupones'),
                                       onPress: () => {
                                          initWebview = false;
                                          setOpenWebview(null);
                                                    props.setFilterPopup(null); 
                                       }
                                    });
                                 props.setFilterPopup({ modal: 'help', data: null }); 
                                  }}
                            >   
                                <View style={styles.iconarea}>
                                    <Image
                                        source={require('../../../app/assets/icons/gift-card.png')}
                                        style={[{width: wp(27), height: hp(27), objectFit: 'contain', marginHorizontal: '10%'}]}
                                    />
                                </View>
                                <View style={styles.txtare}>
                                    <Text style={styles.txtrt}>{t('Bonos_y_cupones')}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menudivde}>
                        
                        <TouchableOpacity
                                style={styles.menuTab}
                                onPress={() => {
                                    let url = 'https://destinia.com/rewards?mode=app&lang='+(props.language && props.language.code ? props.language.code : global.deviceLanguage);
                                    // CustomDTabs.init(url);
                                    initWebview = true;
                                    setOpenWebview({
                                       url: url,
                                       title: t('Destinia_Rewards'),
                                       onPress: () => {
                                          initWebview = false;
                                          setOpenWebview(null);
                                                    props.setFilterPopup(null); 
                                       }
                                    });
                                 props.setFilterPopup({ modal: 'help', data: null }); 
                                  }}
                                // onPress={() => {
                                //     let url = 'https://destinia.com/rewards?mode=app&lang='+(props.language && props.language.code ? props.language.code : global.deviceLanguage);
                                //     CustomDTabs.init(url);
                                // }}
                            >   
                            <View style={styles.iconarea}>
                                <Image
                                    source={require('../../../app/assets/icons/dollar.png')}
                                    style={[{width: wp(24), height: hp(30), objectFit: 'contain', marginHorizontal: '10%'}]}
                                />
                            </View>
                            <View style={styles.txtare}>
                                <Text style={styles.txtrt}>{t('Destinia_Rewards')}</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.menudivde}>
                            <TouchableOpacity
                                style={styles.menuTab}
                                onPress={() => props.onPress('settings')}
                            >
                                <View style={styles.iconarea}>
                                    <Image
                                        source={require('../../../app/assets/icons/cog.png')}
                                        style={[{width: wp(24), height: hp(30), objectFit: 'contain', marginHorizontal: '10%'}]}
                                    />
                                </View>
                                <View style={styles.txtare}>
                                    <Text style={styles.txtrt}>{t('Ajustes_notificaciones')}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menudivde}>
                            <TouchableOpacity
                                style={styles.menuTab}
                                onPress={() => props.onPress('help')}
                            >
                            <View style={styles.iconarea}>
                                <Image
                                    source={require('../../../app/assets/icons/question.png')}
                                    style={[{width: wp(24), height: hp(26), objectFit: 'contain', marginHorizontal: '10%'}]}
                                />
                            </View>
                            <View style={styles.txtare}>
                                <Text style={styles.txtrt}>{t('Ayuda')}</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
      currency: state.CurrencyReducer.currency,
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

export default connect(mapStateToProps,mapDispatchToProps)(Menu);