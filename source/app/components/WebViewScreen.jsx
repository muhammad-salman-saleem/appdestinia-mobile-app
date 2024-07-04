import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, BackHandler, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from './customWebView/style';
import { useTranslation } from 'react-i18next';

function WebViewScreen({ route, navigation, onClose }) {
  const { url } = route.params;
  const {t, i18n} = useTranslation();
  useEffect(() => {
    const backAction = () => {
      onClose(); 
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [onClose]);

  return (
    <>
      <View style={styles.view}>
        <View style={styles.topBar}>
          <View style={styles.topBarTitle}>
            <Text style={styles.title_ti}>{t('My_reservations')}</Text>
            <TouchableOpacity
              onPress={onClose} 
              style={styles.crossover}
            >
              <Image
                source={require('../assets/icons/chevron-left.png')}
                style={styles.crossIcon}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
        </View>
        <WebView
          source={{ uri: url }}
          style={{ marginTop: '20' }}
          originWhitelist={['*']}
          onShouldStartLoadWithRequest={(event) => {
            if (event.url.slice(0, 6) === 'mailto' || event.url.slice(0, 3) === 'tel') {
              Linking.openURL(event.url);
              return false;
            }
            return true;
          }}
        />
      </View>
    </>
  );
}

export default WebViewScreen;
