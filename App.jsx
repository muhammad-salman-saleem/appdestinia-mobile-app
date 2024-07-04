import React from 'react';
import { NativeModules, Platform , AppState} from 'react-native';
import {base} from './source/app/assets/global_style/base';
import {Theme} from './source/app/assets/global_style/theme';
import StackScreens from './source/navigation/stack';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import store from './source/redux/store';
import { Provider } from 'react-redux';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';

global.deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;
global.deviceLanguage = deviceLanguage ? deviceLanguage.split('_')[0] : 'en';
const App = () => {
  
  const handleAppStateChange = async (nextAppState) => {
    if (nextAppState == 'active') {
        request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
          .then(async (result) => {
            if (result == RESULTS.GRANTED) {
              console.log('Tracking!');
              // do something related to tracking

            } else {
              console.log('Not Tracking!');
            }
          })
          .catch((error) => {
            console.log('error in request tracking permissions: ', error);
          });
      }
  }

  React.useEffect(() => {
    let subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => {
        subscription.remove();
    };
  }, []);
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme} >
        <NavigationContainer>
        <StatusBar
            backgroundColor={'#fff'}
            barStyle="dark-content"
            translucent={true}
          />
          <StackScreens />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
