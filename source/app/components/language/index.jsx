import { Icon } from '@rneui/themed';
import { React, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, TouchableOpacity, View, Image, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import '../../../i18n';
import { base } from '../../assets/global_style/base';
import { colors } from '../../assets/global_style/colors';
import { Dimension } from '../../assets/global_style/dimension';
import { IconsType } from '../../assets/global_style/icon';
import { styles } from './style';
import { hp, wp } from '../../assets/global_style/fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Language = (props) => {
   const langs = [
      {
         label: 'Español',
         code: 'es'
      },
      {
         label: 'English',
         code: 'en'
      },
      {
         label: 'Français',
         code: 'fr'
      },
      {
         label: 'Italiano',
         code: 'it'
      },
      {
         label: 'Deutsch',
         code: 'de'
      },
      {
         label: 'Português',
         code: 'pt'
      },
      // {
      //    label: 'العربية',
      //    code: 'ar',
      //    disabled: true
      // }
   ];
   
   let defaultLang = langs.filter((l) => {
      return l.code == global.deviceLanguage
   });

   const [languages, setLangauges] = useState([]);

   const [checked, setChecked] = useState(false);
   const [selected, setSelected] = useState(
      props.language && props.language
         ? props.language
         :
         (
            defaultLang.length
            ?
            defaultLang[0]
            :
            {
               label: 'English',
               code: 'en'
            }
         )
   );
   const { t, i18n } = useTranslation();

   useEffect(() => {
         let l = langs;
         if(props.language) {
            l = [props.language];
            l = [...l, ...langs.filter((i) => i.code !== props.language.code)];
         }
         else if(defaultLang && defaultLang.length > 0) {
            l = [...defaultLang, ...langs.filter((i) => i.code !== defaultLang[0].code)];
         }
         setLangauges(l);

      const backAction = () => {
         props.onPress('settings')
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
  
      return () => backHandler.remove();
    }, []);

   
   const changeLanguage = value => {

      i18n
         .changeLanguage(value.code)
         .then(async () => {
            setSelected(value);
            props.setLangauge(value);
            await AsyncStorage.setItem('language', JSON.stringify(value));
         })
         .catch(err => console.log(err));
      ;
   };

   return (
      <>
         <View style={styles.view}>
            <View style={styles.mainhef}>
               <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                  <TouchableOpacity
                     onPress={() => props.onPress('settings')}
                     style={{position: 'absolute', left: wp('10'),alignItems: 'center', width: wp(55), height: hp(60)}}
                  >
                     <Image
                        source={require('../../assets/icons/back.png')}
                        style={[{ width: wp('18'), height: wp('26'), marginTop: hp(15)}]}
                     />
                  </TouchableOpacity>
                  <Text style={styles.head}>{t('idioma')}</Text>
                </View>
            </View>
            <View>
               <View style={styles.mainit}>
                  <Text style={styles.txtonw}>{t('select_your_language')} </Text>
                  <View style={base.mt2}>
                     <ScrollView style={{ height: '88%' }}>
                        <>
                           {
                              languages.map((item, i) => {
                                 return !i.disabled ?
                                    <TouchableOpacity
                                       key={`lang` + i}
                                       style={{ flex: 1, flexDirection: 'row' }}
                                       onPress={() => {
                                          changeLanguage(item);
                                       }}
                                    >
                                       <View
                                          key={`lang` + item.code}
                                          style={selected && item.code == selected.code ? [styles.divide, styles.border] : styles.divide}
                                       >

                                          <View style={styles.left}>
                                             <Text style={selected && item.code == selected.code ? styles.txtorange : styles.txtblack}>
                                                {item.label}
                                             </Text>
                                          </View>

                                          <View style={styles.right}>
                                             {
                                                selected && item.code == selected.code
                                                &&
                                                <View style={styles.righttxt}>
                                                   <Image source={require('../../assets/icons/check.png')} style={styles.icondf} />
                                                   {/* <Icon containerStyle={styles.icondf} style={styles.icondf} type={IconsType.material} name={`check`} color={colors.orange} size={Dimension.big} /> */}
                                                </View>
                                             }
                                          </View>
                                       </View>
                                    </TouchableOpacity>
                                    :
                                    null
                              })
                           }
                        </>
                     </ScrollView>
                  </View>
               </View>
            </View>
         </View>

      </>
   );
};

const mapStateToProps = (state) => {
   return {
      language: state.LanguageReducer.language,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      setLangauge: (lang) => {
         dispatch({ type: 'SET_LANGUAGE', payload: lang })
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Language);