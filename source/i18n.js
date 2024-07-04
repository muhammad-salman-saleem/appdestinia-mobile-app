import { NativeModules, Platform } from 'react-native';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locale/en.json';
import es from './locale/es.json';
import fr from './locale/fr.json';
import it from './locale/it.json';
import de from './locale/de.json';
import pt from './locale/pt.json';


let allLnags = ['en', 'es', 'fr', 'it', 'de', 'pt'];
i18n.use(initReactI18next).init({
  compatibilityJSON:'v2',
  lng: global.deviceLanguage && allLnags.includes(global.deviceLanguage) ? global.deviceLanguage : 'en',
  fallbackLng: global.deviceLanguage && allLnags.includes(global.deviceLanguage) ? global.deviceLanguage : 'en',
  resources: {
    en: en,
    es: es,
    fr: fr,
    it: it,
    de: de,
    pt: pt,
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
  
export default i18n;