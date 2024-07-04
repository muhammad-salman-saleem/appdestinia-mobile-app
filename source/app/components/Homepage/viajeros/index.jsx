import React, { useEffect, useState } from 'react'
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { base } from '../../../assets/global_style/base'

import { Button, Image } from '@rneui/themed'
import { useTranslation } from 'react-i18next'
import { hp } from '../../../assets/global_style/fontsize'
import { styles } from './style'
import SelectDropdown from 'react-native-select-dropdown';

const Viajeros = (props) => {
    const refs = React.useRef([])
    const { t, i18n } = useTranslation();
    let defaultRooms = {
        'adults': 1,
        'children': 0,
        "ages": []
    };
    const [rooms, setRooms] = useState(props.data && props.data.length > 0 ? props.data : [defaultRooms])
    const [error, setError] = useState(false);
    const [age, setAge] = useState(null);
    useEffect(() => {
        setRooms(rooms);
    }, [rooms])

    const adjustEmptyRoom = (rooms) => {
        let total = 0;
        let r = [];
        for (let i in rooms) {
            total += rooms[i].adults + rooms[i].children;
            r.push(rooms[i]);
            if (total >= 9) {
                break;
            }
        }

        setRooms(r);
    }

    const validateCombination = () => {
       let r = rooms;
       let infants = r[0].ages.length > 0 ? r[0].ages.filter((item, indx) => {
        return item == 1;
       }) : [];
       let success = r[0].adults > 0
            && 
            (r[0].children < 1 || (r[0].children > 0 && (r[0].children) <= (r[0].adults*2)));
        if(success) {
            success = infants.length < 1 || (infants.length > 0 && infants.length <= r[0].adults) 
        }

        return success;
    }

    const handleIncrement = (key, type) => {
        let total = getTotalPeople();
        let r = [...rooms];
        // if(validateCombination()) {
        //     return false;
        // }
        if (total < 9) {
            if(type == 'children' && r[key]['adults'] < 1) {
                //do nothing
            }
            else
            {
                if(type == 'children') {
                    if( r[key]['children'] >= (r[key]['adults'] * 2)  ) 
                        return false;
                    r[key]['ages'].push(8)    
                }
                r[key][type] = r[key][type] + 1;
                setRooms(r);
                adjustEmptyRoom(r);
            }
        }
        console.log(r);
        
    };

    const handleDecrement = (key, type) => {
        let r = [...rooms];
        if (r[key][type] > 0) {
            if((type == 'adults' && r[key][type] > 1) || type == 'children') {
                r[key][type] = r[key][type] - 1;
                if(type == 'children' && r[key]['ages'] && r[key]['ages'].length > 0) {
                    r[key]['ages'].splice(-1,1);
                }

                setRooms(r);
                adjustEmptyRoom(r);
            }
        }
    }

    const getTotalPeople = () => {
        let total = 0;
        for (let k = 0; k < rooms.length; k++) {
            total += rooms[k].adults > 0 ? rooms[k].adults : 0;
            total += rooms[k].children > 0 ? rooms[k].children : 0;
        }
        return total
    }


    const updateAge = (k, i, value) => {
        let r = [...rooms];
        if (value) {
            r[k]['ages'][i] = (value == '< 2') ? 1 : value * 1;
            setRooms(r);
        }
    }

    const addNewRoom = () => {
        if (rooms.length < 5 && getTotalPeople() < 9) {
            if(validateCombination() >= 3) {
                return false;
            }
            if(getTotalPeople() >= 8) {
                setRooms([...rooms, {
                    'adults': 1,
                    'children': 0,
                    "ages": []
                }]);
            }
            else {
                setRooms([...rooms, defaultRooms]);
            }
        }
    }

    const removeRoom = (k) => {
        let r = [...rooms];
        r.splice(k, 1);
        setRooms(r);
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
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

                            <Text style={styles.txtit}>{t('Travellers')}</Text>
                        </View>
                    </View>

                </View>

            </View>
            <View style={[base.w100, styles.h100]}>
                <View style={[base.w100, styles.h100]}>
                    <View style={[styles.scrollWrap]}>
                        <ScrollView scrollEnabled={true} nestedScrollEnabled={true} contentContainerStyle={{ paddingBottom: hp(130) }}>
                            {
                                rooms && rooms.length > 0 &&
                                rooms.map((item, k) => {
                                    return <View style={styles.spce} key={`rooms` + k}>
                                        <View style={styles.roomHeader}>
                                            {/* <View style={{ width: (k > 0 ? '50%' : '100%') }}>
                                                <Text style={styles.headit}>{rooms.length > 1 ? (t('Room') + ' ' + (k + 1)) : t('Room')}</Text>
                                            </View> */}

                                            {
                                                k > 0
                                                &&
                                                <View style={{ width: '50%' }}>
                                                    <TouchableOpacity
                                                        onPress={() => removeRoom(k)}
                                                    >
                                                        <Text style={[styles.headit, styles.removeLink]}>{t('delete')}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            }

                                        </View>
                                        <View
                                            style={styles.inut2}
                                        >
                                            <Text style={styles.input3}>
                                                {t('Adultos')}
                                            </Text>
                                            <View style={styles.right}>

                                                <View style={styles.buttonContainer}>
                                                    <View style={item.adults <= 0 ? [styles.btnrnd, styles.disable] : styles.btnrnd}>
                                                        <TouchableOpacity
                                                            onPress={() => handleDecrement(k, 'adults')}
                                                        >
                                                            <Image source={item.adults <= 0 ? require('../../../assets/icons/minus.png') : require('../../../assets/icons/minus_active.png')} style={styles.btntxt} />
                                                            {/* <Text style={count <= 0 ? [styles.btntxt, styles.disBtnTxt] : styles.btntxt}>-</Text> */}
                                                        </TouchableOpacity>
                                                    </View>
                                                    <Text style={styles.input4}>{item.adults}</Text>
                                                    <View style={item.adults <= 0 ? [styles.btnrnd, styles.disable] : styles.btnrnd}>
                                                        <TouchableOpacity
                                                            onPress={() => handleIncrement(k, 'adults')}
                                                        >
                                                            <Image source={require('../../../assets/icons/plus.png')} style={styles.btntxt} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <View
                                            style={[styles.inut2, styles.childInp]}
                                        >
                                            <Text style={styles.input3}>
                                                {t('Children')}
                                            </Text>
                                            <View style={styles.right}>

                                                <View style={styles.buttonContainer}>
                                                    <View style={item.children <= 0 ? [styles.btnrnd, styles.disable] : styles.btnrnd}>
                                                        <TouchableOpacity
                                                            onPress={() => handleDecrement(k, 'children')}
                                                        >
                                                            <Image source={item.children <= 0 ? require('../../../assets/icons/minus.png') : require('../../../assets/icons/minus_active.png')} style={styles.btntxt} />
                                                            {/* <Text style={item.children <= 0 ? [styles.btntxt, styles.disBtnTxt] : styles.btntxt}>-</Text> */}
                                                        </TouchableOpacity>
                                                    </View>
                                                    <Text style={styles.input4}>{item.children}</Text>
                                                    <View style={item.children <= 0 ? [styles.btnrnd, styles.disable] : styles.btnrnd}>
                                                        <TouchableOpacity
                                                            onPress={() => handleIncrement(k, 'children')}

                                                        >
                                                            <Image source={require('../../../assets/icons/plus.png')} style={styles.btntxt} />

                                                            {/* <Text style={styles.btntxt}>+</Text> */}
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <View
                                            style={[styles.inut2, styles.ageSection]}
                                        >
                                            {
                                                item.children > 0
                                                &&
                                                <View style={{ flexDirection: 'column', width: '100%' }}>
                                                    <View style={[styles.ageInput]}>
                                                        <Text style={[styles.input3, styles.ageText]}>{t('ChildTitle')}</Text>
                                                    </View>
                                                    <View style={styles.ageSelect}>
                                                        {
                                                        
                                                            [...Array(item.children).keys()].map((n, i) => {
                                                                return (

                                                                    <View style={styles.ageBox} key={`age` + k + i}>
                                                                        <SelectDropdown
                                                                            defaultButtonText="Age"
                                                                            defaultValue={item.ages[i] && item.ages[i] <= 1 ? '< 2' : item.ages[i] }
                                                                            buttonStyle={styles.dropdownPicker}
                                                                            renderDropdownIcon={() => {
                                                                                return <Image source={require('../../../assets/icons/down.png')} style={styles.dropdownIcon} />
                                                                            }}
                                                                            buttonTextStyle={styles.dropdownPickerTxt}
                                                                            dropdownStyle={[styles.dSty, Platform.OS == 'ios' ? {marginTop: hp(0)} : {}]}
                                                                            data={['< 2', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                                                                            onSelect={(selectedItem, index) => {
                                                                                updateAge(k, i, selectedItem)
                                                                            }}
                                                                            buttonTextAfterSelection={(selectedItem, index) => {
                                                                                return selectedItem
                                                                            }}
                                                                            rowTextForSelection={(item, index) => {
                                                                                return item
                                                                            }}
                                                                        />
                                                                        {/* <Picker
                                                                            ref={ref => !refs.current.includes(ref) && refs.current.push(ref)}
                                                                            dropdownIconColor={'#FFF'}
                                                                            dropdownIconRippleColor={'#FFF'}
                                                                            style={styles.dropdownPicker}
                                                                            itemStyle={Platform.OS == 'ios' ? styles.pckerOpt : { textAlignments: 'center' }}
                                                                            selectedValue={`${(item.ages.length > 0 ? item.ages[i] : 1)}`}
                                                                            onValueChange={(itemValue, itemIndex) => updateAge(k, i, itemValue)}
                                                                            // selectionColor={`#FFFFFF`}
                                                                        >
                                                                            <Picker.Item backgroundColor="white" label="1" value="1" />
                                                                            <Picker.Item backgroundColor="white" label="2" value="2" />
                                                                            <Picker.Item backgroundColor="white" label="3" value="3" />
                                                                            <Picker.Item backgroundColor="white" label="4" value="4" />
                                                                            <Picker.Item backgroundColor="white" label="5" value="5" />
                                                                            <Picker.Item backgroundColor="white" label="6" value="6" />
                                                                            <Picker.Item backgroundColor="white" label="7" value="7" />
                                                                            <Picker.Item backgroundColor="white" label="8" value="8" />
                                                                            <Picker.Item backgroundColor="white" label="9" value="9" />
                                                                            <Picker.Item backgroundColor="white" label="10" value="10" />
                                                                            <Picker.Item backgroundColor="white" label="11" value="11" />
                                                                            <Picker.Item backgroundColor="white" label="12" value="12" />
                                                                        </Picker> */}
                                                                        {
                                                                            Platform.OS != 'ios' && false
                                                                            &&
                                                                            <TouchableOpacity
                                                                                style={styles.floatIcon}
                                                                                onPress={() => {
                                                                                    if (refs.current[k]) {
                                                                                        refs.current[k].focus()
                                                                                    }
                                                                                }}
                                                                            ><Image source={require('../../../assets/icons/down.png')} style={styles.dropdownIcon} /></TouchableOpacity>
                                                                        }
                                                                    </View>

                                                                )
                                                            })

                                                        }
                                                    </View>
                                                </View>
                                            }
                                        </View>
                                    </View>
                                })
                            }

                            {/* <View style={[styles.spce, styles.addRoomTxt]}>
                                <TouchableOpacity
                                    onPress={addNewRoom}
                                >
                                    <Text style={styles.linkbnt}>{t('Add_Room')}</Text>
                                </TouchableOpacity>
                            </View> */}
                        </ScrollView>
                    </View>
                    <View style={[styles.spce, styles.btnwrp, { paddingHorizontal: hp(30), backgroundColor: '#FFF' }]}>
                        {
                            !validateCombination()
                            &&
                            <Text style={[base.textDanger, base.textCenter, base.mb2]}>{t('Combination_Not_Allowed_Txt_Flight')}</Text>
                        }
                        <Button buttonStyle={styles.lastbtn} titleStyle={styles.lasttitle}
                            onPress={() => {
                                if (getTotalPeople() < 1) {
                                    setError(true);
                                }
                                else {
                                    if(validateCombination()) {
                                        props.onSubmit(rooms)
                                    }
                                }
                            }}
                        >{t('Hecho')}</Button>
                    </View>

                </View>

            </View>
        </View>
    )
}

export default Viajeros