import React, { useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../app/assets/global_style/colors';
import { Font } from '../app/assets/global_style/fontfamily';
import { fp, hp, wp } from '../app/assets/global_style/fontsize';
import CustomDTabs from '../app/components/CustomDTabs';
import TabViewComponent from '../app/components/Homepage';
import Check from '../app/components/check';
import Reserve from '../app/components/reserve';
import styles from './styles';
import WebView from 'react-native-webview';
import WebViewScreen from '../app/components/WebViewScreen';


const Tab = createBottomTabNavigator();

function MyTabs(props) {

   const {t, i18n} = useTranslation();
   const [showWebView, setShowWebView] = useState(false);
   const [webViewUrl, setWebViewUrl] = useState('');

//    React.useEffect(() => {
//         const backAction = () => {
//         console.log('yuss');
//         return false;
//         }

//         const backHandler = BackHandler.addEventListener(
//         'hardwareBackPress',
//         backAction,
//         );
    
//         return () => backHandler.remove();
//     }, []);
  const openWebView = (url) => {
    setWebViewUrl(url);
    setShowWebView(true);
  };

  const closeWebView = () => {
    setShowWebView(false);
    setWebViewUrl('');
  };

  const renderWebView = () => {
    if (showWebView) {
      return (
       
            <WebViewScreen
          route={{ params: { url: webViewUrl } }}
          onClose={() => closeWebView()}
        />
        
      );
    }

    return (
        <View style={styles.footerArea}>
            
            <Tab.Navigator
                initialRouteName="search"
                backBehavior='initialRoute'
                screenOptions={{
                    tabBarActiveTintColor: colors.black,
                    tabBarInactiveTintColor: colors.backgroundgrey,
                    tabBarLabelStyle: {
                        fontFamily: Font.lightBold,
                    },
                    tabBarShowLabel: false,
                    barStyle: {
                        backgroundColor: colors.white,
                    },
                    tabBarStyle: [styles.tabBarStyles, { display: !props.filterPopup || !props.filterPopup.modal ? 'flex' : 'none'}, Platform.OS == 'ios' ? styles.shadowItIos : styles.shadowItIos],
                }}>
                <Tab.Screen
                    name="reserve"
                    component={WebViewPlaceholder}
                    listeners={{
                        tabPress: e => {
                            e.preventDefault();
                            let url = 'https://res.destinia.com/my-account/multilogin?showTabs=true&defaultTab=login&mode=app&lang='+(props.language && props.language.code ? props.language.code : global.deviceLanguage)+'&return_url=https://res.destinia.com/my-account/app/purchases/all';
                            // CustomDTabs.init(url);
                            openWebView(url);
                        },
                    }}
                    options={{
                        tabBarIcon: ({ focused, color }) => (
                            <View style={focused ? [styles.icon] : styles.Icon}>
                                <View style={styles.polgon}>
                                    <View style={styles.iconWrap}>
                                        <Image
                                            source={focused ? require('../app/assets/icons/prueba_reservas1.png') : require('../app/assets/icons/prueba_reservas.png')}
                                            style={[{width: wp(0), height: '90%',  marginLeft: '37%', objectFit: 'contain'}]}
                                        />
                                    </View>
                                    <Text style={{ color: focused ? colors.orange : colors.grey, textAlign: 'center', fontFamily: Font.semiBold, marginBottom: hp(0), fontSize: fp(16) }}>
                                        {t('My_reservations')}
                                    </Text>
                                </View>
                            </View>
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="search"
                    component={TabViewComponent}

                    options={{
                        tabBarIcon: ({ focused, color }) => (
                            <View style={focused ? [styles.icon] : styles.Icon}>
                                <View style={styles.polgon}>
                                    <View style={styles.iconWrap}>
                                        <Image
                                            source={focused ? require('../app/assets/icons/lupa.png') : require('../app/assets/icons/lupa1.png')}
                                            style={[{width: wp(0), height: '90%',  marginLeft: '42%', objectFit: 'contain'}]}
                                        />
                                    </View>
                                    <Text style={{ color: focused ? colors.orange : colors.grey, textAlign: 'center', fontFamily: Font.semiBold, marginBottom: hp(0), fontSize: fp(16) }}>
                                        {t('Look_for')}
                                    </Text>
                                </View>
                            </View>
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="check"
                    component={Check}
                    options={{
                        tabBarIcon: ({ focused, color }) => (
                            <View style={focused ? [styles.icon] : styles.Icon}>
                                <View style={styles.polgon}>
                                    <View style={styles.iconWrap}>
                                        <Image
                                            source={focused ? require('../app/assets/icons/ProfileIcon.png') : require('../app/assets/icons/ProfileIcong.png')}
                                            style={[{width: wp(0), height: '90%',  marginLeft: '37%', objectFit: 'contain'}]}
                                        />
                                    </View>
                                    <Text style={{ color: focused ? colors.orange : colors.grey, textAlign: 'center', fontFamily: Font.semiBold, marginBottom: hp(0), fontSize: fp(16) }}>
                                        {t('My_account')}
                                    </Text>
                                </View>
                            </View>
                        ),
                        headerShown: false,
                        // header: ({ navigation, route, options }) => (
                        //     <HeaderComp
                        //         left="back"
                        //         title={"Sign up"}
                        //         navigation={props.navigation}
                        //     />
                        // ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}
return renderWebView();
}
const WebViewPlaceholder = () => <View />;

const mapStateToProps = (state) => {
	return {
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
 
 export default connect(mapStateToProps, mapDispatchToProps)(MyTabs);
