import React from 'react';
import { Touchable, View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { styles } from './style';
import WebView from 'react-native-webview';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import { Icons, IconsType } from '../../../assets/global_style/icon';
import { colors } from '../../../assets/global_style/colors';
import { Dimension } from '../../../assets/global_style/dimension';
import { connect } from 'react-redux';

const GetStarted = (props) => {
    return (
        <>
           <View style={styles.view}>
                <WebView 
                    source={{uri: 'https://res.destinia.com/my-account/multilogin?showTabs=true&defaultTab=register&mode=app&lang='+(props.language && props.language.code ? props.language.code : global.deviceLanguage)}} 
                    // source={{uri: 'https://google.com'}} 
                    style={{marginTop: '60'}}
                    
                />
            </View>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
      currency: state.CurrencyReducer.currency,
      language: state.LanguageReducer.language,
    };
  };
  
  export default connect(mapStateToProps)(GetStarted);