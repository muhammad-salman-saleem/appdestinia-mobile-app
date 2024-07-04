import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, TextStyle, NativeModules, Platform, TouchableOpacity} from 'react-native';
import { CalendarList, DateData, LocaleConfig } from 'react-native-calendars';
import { colors } from '../../../assets/global_style/colors';
import moment from 'moment';
import calendar from '../../../../locale/calendar';
import { fp, hp, wp } from '../../../assets/global_style/fontsize';
import { base } from '../../../assets/global_style/base';
import { connect } from 'react-redux';
import { Font } from '../../../assets/global_style/fontfamily';



const testIDs = {
    menu: {
        CONTAINER: 'menu',
        CALENDARS: 'calendars_btn',
        CALENDAR_LIST: 'calendar_list_btn',
        HORIZONTAL_LIST: 'horizontal_list_btn',
        AGENDA: 'agenda_btn',
        EXPANDABLE_CALENDAR: 'expandable_calendar_btn',
        WEEK_CALENDAR: 'week_calendar_btn',
        TIMELINE_CALENDAR: 'timeline_calendar_btn',
        PLAYGROUND: 'playground_btn'
    },
    calendars: {
        CONTAINER: 'calendars',
        FIRST: 'first_calendar',
        LAST: 'last_calendar'
    },
    calendarList: { CONTAINER: 'calendarList' },
    horizontalList: { CONTAINER: 'horizontalList' },
    agenda: {
        CONTAINER: 'agenda',
        ITEM: 'item'
    },
    expandableCalendar: { CONTAINER: 'expandableCalendar' },
    weekCalendar: { CONTAINER: 'weekCalendar' }
};



const CalendarSelection = (props) => {
    
    let deviceLanguage = props.language && props.language.code ? props.language.code : global.deviceLanguage;
    let allLnags = ['en', 'es', 'fr', 'it', 'de', 'pt'];
    LocaleConfig.locales['en'] = calendar.en;
    LocaleConfig.locales['de'] = calendar.de;
    LocaleConfig.locales['es'] = calendar.es;
    LocaleConfig.locales['fr'] = calendar.fr;
    LocaleConfig.locales['it'] = calendar.it;
    LocaleConfig.locales['pt'] = calendar.pt;

    LocaleConfig.defaultLocale = deviceLanguage && allLnags.includes(deviceLanguage) ? deviceLanguage : 'en';
    let today = moment().format('YYYY-MM-DD');
    const initialDate = props.endDay ? props.endDay : today;
    const maxDate = moment().add(1, 'years').endOf('month').format('YYYY-MM-DD');
    const { horizontalView } = props;
    const [selected, setSelected] = useState(null);
    const [startDay, setStartDay] = useState(null);
    const [endDay, setEndDay] = useState(null);
    const [mounting, setMounting] = useState(false);
    const marked = useMemo(() => {
        return selected ? selected : {}
    }, [selected]);
    
    
    useEffect(() => {
        const date = {}
        date[props.startDay] = {
            marked: false,
            selected: true,
            disableTouchEvent: true,
            startingDay: false,
            endingDay: false,
        };
        setStartDay(props.startDay);
        setSelected(date);
        setMounting(true);
    },[]);

    const onSubmit = (startDay) => {
        props.onSubmit(startDay)
    }
    
    const onDayPress = (day) => {
        setStartDay(day.dateString)
        setEndDay(null)
        setSelected({
            [day.dateString]: {
                marked: false,
                selected: true,
                disableTouchEvent: true,
                startingDay: true,
                endingDay: false,
            }
        });
        onSubmit(day.dateString);
    }

    let pastDays = [];
    const CustomDay = (prop) => {
        let dS = moment(prop.date.dateString);
        let iS = moment(initialDate);
        if((dS.unix() > iS.unix() && prop.state === 'disabled') || dS.unix() < iS.startOf('month').unix() || pastDays.includes(prop.date.dateString)) return null;
        pastDays.push(prop.date.dateString);
        return (
            <TouchableOpacity
                onPress={() => onDayPress(prop.date)}
            >
                <View
                    style={[
                        // prop.marking && prop.marking.selected && !props.rangePicker ? {backgroundColor: '#3171c9', textAlign: 'center',  width: '100%',width: hp('45'),height: hp('45'), borderRadius: hp(30)} : 
                        {paddingTop: hp('8'), paddingBottom: hp('10'), width: '100%', width: wp('40'),height: wp('40')}, 
                        prop.marking && prop.marking.selected ? {paddingTop: hp('7'), width: wp('36'),height: wp('36'), backgroundColor: '#3171c9', textAlign: 'center',borderRadius: hp(30)} : {},
                        prop.marking && prop.marking.startingDay ? {borderTopLeftRadius: hp(30), borderBottomLeftRadius: hp(30)} : {},
                        prop.marking && prop.marking.endingDay ? {borderTopRightRadius: hp(30), borderBottomRightRadius: hp(30)} : {}
                    ]}
                >
                    <Text style={[
                        {color: (prop.marking && prop.marking.selected ? colors.white : (today == prop.date.dateString ? colors.orange : colors.black_Z) ), width: '100%', textAlign: 'center', fontSize: fp(18), fontFamily: Font.lightBold}, 
                        prop.state === 'disabled' ? {color: colors.offgrey} : {},
                        
                    ]}>
                    {prop.date.day}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={base.row}>
            <View style={[base.col12, {flexDirection: 'row', paddingTop: hp(22), paddingBottom: hp(14), paddingLeft: wp(15), paddingRight: wp(24), borderBottomWidth: hp(1), borderColor: colors.offgrey} ]}>
                <View style={{width: '14.285%', flexDirection: 'column'}}>
                    <Text style={{width: '100%', textAlign: 'center', color: colors.black_Z, fontSize: 16, fontFamily: Font.regular}}>{LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort[0]}</Text>
                </View>
                <View style={{width: '14.285%', flexDirection: 'column'}}>
                    <Text style={{width: '100%', textAlign: 'center', color: colors.black_Z, fontSize: 16, fontFamily: Font.regular}}>{LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort[1]}</Text>
                </View>
                <View style={{width: '14.285%', flexDirection: 'column'}}>
                    <Text style={{width: '100%', textAlign: 'center', color: colors.black_Z, fontSize: 16, fontFamily: Font.regular}}>{LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort[2]}</Text>
                </View>
                <View style={{width: '14.285%', flexDirection: 'column'}}>
                    <Text style={{width: '100%', textAlign: 'center', color: colors.black_Z, fontSize: 16, fontFamily: Font.regular}}>{LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort[3]}</Text>
                </View>
                <View style={{width: '14.285%', flexDirection: 'column'}}>
                    <Text style={{width: '100%', textAlign: 'center', color: colors.black_Z, fontSize: 16, fontFamily: Font.regular}}>{LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort[4]}</Text>
                </View>
                <View style={{width: '14.285%', flexDirection: 'column'}}>
                    <Text style={{width: '100%', textAlign: 'center', color: colors.black_Z, fontSize: 16, fontFamily: Font.regular}}>{LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort[5]}</Text>
                </View>
                <View style={{width: '14.285%', flexDirection: 'column'}}>
                    <Text style={{width: '100%', textAlign: 'center', color: colors.black_Z, fontSize: 16, fontFamily: Font.regular}}>{LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort[6]}</Text>
                </View>
            </View>
            {
                mounting
                &&
                <CalendarList
                    // testID={testIDs.calendarList.CONTAINER}
                    minDate={initialDate}
                    maxDate={maxDate}
                    current={initialDate}
                    pastScrollRange={0}
                    futureScrollRange={12}
                    onDayPress={onDayPress}
                    markedDates={marked}
                    renderHeader={!horizontalView ? renderCustomHeader : undefined}
                    calendarHeight={!horizontalView ? 200 : undefined}
                    // theme={theme}
                    hideDayNames={true}
                    horizontal={horizontalView}
                    // pagingEnabled={horizontalView}
                    // staticHeader={horizontalView}
                    hideExtraDays={false}
                    dayComponent={CustomDay}
                    firstDay={1}
                />
            }
        </View>
    );
};

const theme = {
    backgroundColor: 'gray',
    calendarBackground: 'orange',
    textSectionTitleColor: colors.black_Z,
    selectedDayBackgroundColor: '#3171c9',
    selectedDayTextColor: '#ffffff',
    todayTextColor: colors.orange,
    dayTextColor: colors.black_Z,
};

function renderCustomHeader(date) {
    const header = date.toString('M yyyy');
    const [month, year] = header.split(' ');
    const textStyle = {
        fontSize: 18,
        paddingTop: 0,
        paddingBottom: 0,
        color: colors.black_Z,
        paddingRight: 5,
        fontFamily: Font.regular
    };
    return (
        <View style={styles.header}>
            <Text style={[styles.month, textStyle]}>{LocaleConfig.locales[LocaleConfig.defaultLocale].monthNames[month-1]}</Text>
            <Text style={[styles.year, textStyle]}>{year}</Text>
        </View>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(CalendarSelection);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 7,
        marginBottom: 7,
    },
    month: {
        marginLeft: 5
    },
    year: {
        marginRight: 5
    }
});