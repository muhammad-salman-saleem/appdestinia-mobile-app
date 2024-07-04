import { Icon } from '@rneui/themed';
import { React, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, TouchableOpacity, View, Image, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { base } from '../../assets/global_style/base';
import { colors } from '../../assets/global_style/colors';
import { Dimension } from '../../assets/global_style/dimension';
import { IconsType } from '../../assets/global_style/icon';
import { styles } from './style';
import { hp, wp } from '../../assets/global_style/fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Currency = (props) => {
   const defaultSelected = props.currency && props.currency ? props.currency : { label: 'EUROS', code: "€", iso3: "EUR" };
   const { t, i18n } = useTranslation();
   const [checked, setChecked] = useState(false);
   const [selected, setSelected] = useState(defaultSelected);
   const [currencies, setCurrencies] = useState([]);

   const ucwords = (str) => {
      return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
   }

   useEffect(() => {

      let l = [
         { label: t('Euros'), code: "€", iso3: "EUR" },
         { label: t('US Dollar'), code: "$", iso3: "USD" },
         { label: t('Brithis Pound'), code: "£", iso3: "GBP" },
         { label: t('Bitcoin'), code: "mBTC", iso3: "mBTC" },
         { label: t('Bitcoin Cash'), code: "mBCH", iso3: "mBCH" },
         { label: t('Japanese Yen'), code: "¥", iso3: "JPY" },
         { label: t('Saudi Riyal'), code: "SAR", iso3: "SAR" },
         { label: t('Czech Republic Koruna'), code: "CZK", iso3: "CZK" },
         { label: t('Danish Krone'), code: "Dkr", iso3: "DKK" },
         { label: t('Norwegian Krone'), code: "Nkr", iso3: "NOK" },
         { label: t('Swedish Krona'), code: "Skr", iso3: "SEK" },
         { label: t('Kuwaiti Dinar'), code: "KWD", iso3: "KWD" },
         { label: t('United Arab Emirates Dirham'), code: "AED", iso3: "AED" },
         { label: t('Moroccan Dirham'), code: "MAD", iso3: "MAD" },
         { label: t('Australian Dollar'), code: "AU$", iso3: "AUD" },
         { label: t('Canadian Dollar'), code: "CA$", iso3: "CAD" },
         { label: t('Hong Kong Dollar'), code: "HKD", iso3: "HKD" },
         { label: t('New Zealand Dollar'), code: "NZ$", iso3: "NZD" },
         { label: t('Hungarian Forint'), code: "Ft", iso3: "HUF" },
         { label: t('Swiss Franc'), code: "CHF", iso3: "CHF" },
         { label: t('Ukrainian Hryvnia'), code: "UAH", iso3: "UAH" },
         { label: t('Paraguayan Guarani'), code: "PYG", iso3: "PYG" },
         { label: t('Georgian Lari'), code: "GEL", iso3: "GEL" },
         { label: t('Moldovan Leu'), code: "MDL", iso3: "MDL" },
         { label: t('Romanian Leu'), code: "RON", iso3: "RON" },
         { label: t('Bulgarian Lev'), code: "BGN", iso3: "BGN" },
         { label: t('Egyptian Pound'), code: "EGP", iso3: "EGP" },
         { label: t('Turkish Lira'), code: "TRY", iso3: "TRY" },
         { label: t('New Taiwan Dollar'), code: "TWD", iso3: "TWD" },
         { label: t('Israeli New Shekel'), code: "ILS", iso3: "ILS" },
         { label: t('Peruvian Nuevo Sol'), code: "S/.", iso3: "PEN" },
         { label: t('Argentine Peso'), code: "AR$", iso3: "ARS" },
         { label: t('Chilean Peso'), code: "CL$", iso3: "CLP" },
         { label: t('Colombian Peso'), code: "$", iso3: "COP" },
         { label: t('Dominican Peso'), code: "DOP", iso3: "DOP" },
         { label: t('Mexican Peso'), code: "MX$", iso3: "MXN" },
         { label: t('Uruguayan Peso'), code: "UYU", iso3: "UYU" },
         { label: t('Brazilian Real'), code: "R$", iso3: "BRL" },
         { label: t('Qatari Rial'), code: "QAR", iso3: "QAR" },
         { label: t('Russian Rouble'), code: "RUB", iso3: "RUB" },
         { label: t('South Korean Won'), code: "₩", iso3: "KRW" },
         { label: t('Chinese Yuan'), code: "CNY", iso3: "CNY" },
      ];
      l = [...[defaultSelected], ...l.filter((i) => i.iso3 !== defaultSelected.iso3)];
      setCurrencies(l);


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
                  <Text style={styles.head}>{t('Moneda')}</Text>
                </View>
            </View>
            <View>
               <View style={styles.mainit}>
                  <Text style={styles.txtonw}>{t('Selecciona_tu_moneda')}</Text>
                  <View style={[base.mt2]}>
                     <ScrollView style={{ height: '89%' }}>
                        {
                           currencies.map((item, i) => {
                              return !i.disabled ?
                                 <TouchableOpacity
                                 key={`curr` + i}

                                    style={{ flex: 1, flexDirection: 'row' }}
                                    onPress={async () => {
                                       props.setCurrency(item);
                                       setSelected(item);
                                       await AsyncStorage.setItem('currency', JSON.stringify(item));
                                    }}
                                 >
                                    <View
                                       style={[
                                          styles.divide,
                                          item.code == selected.code ? styles.border : {},
                                          (i === (currencies.length - 1) ? {marginBottom: hp(30)} : {})
                                       ]}
                                    >

                                       <View style={styles.left}>
                                          <Text style={item.code == selected.code ? styles.txtorange : styles.txtblack}>
                                             {(item.label)} ({item.code})
                                          </Text>
                                       </View>
                                       <View style={styles.right}>
                                          {
                                             item.code == selected.code
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
      currency: state.CurrencyReducer.currency,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      setCurrency: (c) => {
         dispatch({ type: 'SET_CURRENCY', payload: c })
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);