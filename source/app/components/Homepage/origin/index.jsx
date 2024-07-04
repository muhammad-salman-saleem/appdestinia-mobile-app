import { View, Text, TextInput, ScrollView, Touchable, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { base } from '../../../assets/global_style/base'

import { Icon, Image } from '@rneui/themed'
import { Icons, IconsType } from '../../../assets/global_style/icon'
import { Dimension } from '../../../assets/global_style/dimension'
import { styles } from './style'
import { hp, wp } from '../../../assets/global_style/fontsize'
import { colors } from '../../../assets/global_style/colors'
import { useTranslation } from 'react-i18next'
import { API } from '../../../../apis'
import { connect } from 'react-redux'

const Origen = (props) => {

    let timeDelay = null;
    let stations = props.tab == 'flight' ? ["AIRPORT"] : ["COAST","ARCHIPELAGO","ISLAND","NATURE","CITY","AIRPORT","POI","HOTEL","APARTMENT","NEIGHBOUR","DISTRICT","TRAIN_STATION"];
	const [detectLanguage, setDetectLang] = React.useState(props.language && props.language.code ? props.language.code : global.deviceLanguage);
	const {t, i18n} = useTranslation();
    const [items, setItems] = React.useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
    const [locations, setLocations] = React.useState([]);
    const searchLocations = async (e) => {
        let val = e.nativeEvent.text;
        if(timeDelay) {
            clearTimeout(timeDelay);
        }

        timeDelay = setTimeout(async () => {
            let url = 'https://hax.destinia.com/json/common.autocomplete/'+(Platform.OS=== 'ios' ? 'app.ios' : 'app.android' )+'/'+detectLanguage+'/'+(JSON.stringify(stations))+'/'+val+'?bd=8f5bff6bbf6154a2ea413ac4654d4b45';
            console.log(url);
            let response = await API.get(url, {})
            setLocations(response.data);
        }, 200);
    }

    const getIcon = (type) => {
        if(type == 'hotel') 
        return require('../../../assets/icons/building2.png') 
        else if(type == 'island')
        return require('../../../assets/icons/island.png')
        else if(type == 'coast' || type == 'beach')
        return require('../../../assets/icons/coast.png')
        else if(type == 'ski' || type == 'ski_resort' || type == 'ski-resort')
        return require('../../../assets/icons/ski.png')
        else if(type == 'train' || type == 'train_station' || type == 'train-station')
        return require('../../../assets/icons/train.png')
        else 
        return require('../../../assets/icons/location.png')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <KeyboardAvoidingView>
            <View style={base.subrow}>
                <View style={[{ paddingTop: hp(42), width: '100%', backgroundColor: '#FFF' }]}>
                    
                    <View style={styles.uptitle}>
                        <View style={styles.headtitle}>
                            <TouchableOpacity onPress={() => props.onClose()} style={styles.crossIconWrap}>
                                <Image
                                    source={require('../../../assets/icons/chevron-left.png')}
                                    style={styles.crossIcon}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                                
                            <Text style={styles.txtit}>{props.title}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%' }}>
                    <View style={styles.sech}>
                        <View style={styles.inut}>
                            <Image
                                source={require('../../../assets/icons/location.png')}
                                style={{width: wp(13), height: hp(22), marginRight: 7, marginLeft: 3}}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={t('Search')}
                                keyboardType="default"
                                onChange={searchLocations}
                                autoFocus={true}
                                placeholderTextColor={'#46403c'}
                            />
                            <View style={styles.loct}>
                                {/* <Icon
                                    name={Icons.locationsharp}
                                    type={IconsType.ionIcon}
                                    color="gray"
                                    style={styles.icon}
                                    size={Dimension.large}
                                /> */}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={base.w100}>
                <View style={base.w100}>
                    <View style={styles.scrollWrap}>
                        <ScrollView scrollEnabled={true} nestedScrollEnabled={true} keyboardShouldPersistTaps="always" contentContainerStyle={{ paddingBottom: hp(0) }}>
                            {
                                locations && locations.length > 0
                                &&
                                    locations.map((item, k) => {
                                        return (
                                        <TouchableOpacity
                                            key={`location` + k}
                                            onPress={() => props.onSubmit(item)}
                                            style={(k+1) == locations.length ? {marginBottom: hp(150)} : {}}
                                        >
                                            <View 
                                                style={styles.inut2}
                                            >
                                                <Image
                                                    source={
                                                        getIcon(item.type)
                                                    }
                                                    style={[
                                                        {marginRight: 12, marginLeft: 5},
                                                        {width: wp(24), height: wp(24)}
                                                    ]}
                                                />
                                                <Text style={styles.input3}>
                                                    {item.name}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>)
                                    })
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const mapStateToProps = (state) => {
	return {
		language: state.LanguageReducer.language,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Origen);