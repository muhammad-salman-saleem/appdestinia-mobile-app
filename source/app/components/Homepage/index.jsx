import { Icon, Image, Tab, TabView, Text } from '@rneui/themed';
import React, { useEffect } from 'react';

import { ScrollView, TouchableOpacity, View, Linking, Platform, useWindowDimensions} from 'react-native';
import { base } from '../../assets/global_style/base';
import { colors } from '../../assets/global_style/colors';
import { Dimension } from '../../assets/global_style/dimension';
import { fp, hp, wp } from '../../assets/global_style/fontsize';
import { IconsType } from '../../assets/global_style/icon';
import { styles } from './style';
// import buildingIcon from '../../assets/icons/building.svg';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import Calender from './calender';
import Ocupatipon from './ocuption';
import Origen from './origin';
import Viajeros from './viajeros';
import moment from 'moment';
import calendar from '../../../locale/calendar';
import CustomWebView from '../customWebView';
import { API } from '../../../apis';
import WebView from 'react-native-webview';
import { useIsFocused } from '@react-navigation/native';
import CustomDTabs from '../CustomDTabs';
import Flights from './flights';
import CalendarSelection from './calender/CalendarSelection';
import FlightCalender from './calender/flight';



const TabViewComponent = (props) => {
	const { width } = useWindowDimensions();
	const[tab, setTab] = React.useState('hotel');
	const [detectLanguage, setDetectLang] = React.useState(props.language && props.language.code ? props.language.code : global.deviceLanguage);
	const [currency, setCurrency] = React.useState(props.currency && props.currency ? props.currency : { label: 'EUROS', code: "€", iso3: "EUR" });
	const { t, i18n } = useTranslation();
	const [blocks, setBlocks] = React.useState(null);
	const [flightBlocks, setFlightBlocks] = React.useState(null);
	const [rewards, setRewards] = React.useState(null);
	const [index, setIndex] = React.useState(0);
	const [location, setLocation] = React.useState(null);
	const [flightLocation, setFlightLocation] = React.useState(null);
	const [location2, setLocation2] = React.useState(null);
	const [startDay, setStartDay] = React.useState(null);
	const [endDay, setEndDay] = React.useState(null);
	const [selectedIndex, setIndex2] = React.useState(0);
	const [locationModal, setLocationModal] = React.useState(false);
	const [flightLocationModal, setFlightLocationModal] = React.useState(false);
	const [locationModal2, setLocationModal2] = React.useState(false);
	const [calendarSelection, setCalendarSelection] = React.useState(false);
	const [calendarSelection2, setCalendarSelection2] = React.useState(false);
    const [tripType, setTripType] = React.useState('return');
	const [cSelection, setCSelection] = React.useState(null);
	const [cSelection2, setCSelection2] = React.useState(null);
	const [calendarModal, setCalendarModal] = React.useState(false);
	const [calendarModal2, setCalendarModal2] = React.useState(false);
	const [occupationModal, setOccupationModal] = React.useState(false);
	const [viaModal, setViaModal] = React.useState(false);
	const [openWebView, setOpenWebview] = React.useState(null);
	const[error, setError] = React.useState(null);
	const [occupancyData, setOccupancyData] = React.useState([{
		adults: 2,
		children: 0,
		ages: []
	}]);
	const [viaData, setViaData] = React.useState([{
		adults: 1,
		children: 0,
		ages: []
	}]);
	const isFocused = useIsFocused();

	useEffect(() => {
		setStartDay(moment().format('YYYY-MM-DD'));
		setEndDay(moment().add(1, 'days').format('YYYY-MM-DD'))
		setCSelection(moment().format('YYYY-MM-DD'));
		setCSelection2(moment().add(1, 'days').format('YYYY-MM-DD'))
	}, []);

	React.useEffect(() => {
		setDetectLang(props.language && props.language.code ? props.language.code : global.deviceLanguage)
		setCurrency(props.currency && props.currency ? props.currency : { label: 'EUROS', code: "€", iso3: "EUR" });
		getBlocks();
	}, [isFocused, props.language, props.currency]);

	const closeModal = () => {
		setCalendarSelection(false);
		setCalendarSelection2(false);
		setLocationModal(false);
		setFlightLocationModal(false);
		setLocationModal2(false);
		setCalendarModal(false);
		setCalendarModal2(false);
		setOccupationModal(false);
		setViaModal(false);
		props.setFilterPopup(null);
	}

	const datediff = (first, second) => {
		return Math.round((second - first) / (1000 * 60 * 60 * 24));
	}
	
	const parseDate = (str) => {
		var mdy = str.split('-');
		return new Date(mdy[0], mdy[1] - 1, mdy[2]);
	}

	const getBlocks = async () => {
		let url = 'https://haxapps.destinia.com/json/app.messages/'+(Platform.OS == 'ios' ? `app.ios_` : `app.android_`)+'/'+detectLanguage+'/hotel?bd=8f5bff6bbf6154a2ea413ac4654d4b45';
		let response = await API.get(url);
		if(response && response.data && response.data.length > 0)
		{
			setBlocks(response.data[0]);
			if(response.data.length > 1) {
				setRewards(response.data[1]);
			}
		}

		url = 'https://haxapps.destinia.com/json/app.messages/'+(Platform.OS == 'ios' ? `app.ios_` : `app.android_`)+'/'+detectLanguage+'/transport?bd=8f5bff6bbf6154a2ea413ac4654d4b45';
		response = await API.get(url);
		if(response && response.data && response.data.length > 0)
		{
			setFlightBlocks(response.data[0]);
		}
	}

	const getTotalPeople = () => {
        let adults = 0;
        let children = 0;
        for(let k = 0; k < occupancyData.length; k++)
        {
            adults  += occupancyData[k].adults > 0 ? occupancyData[k].adults : 0;
            children  += occupancyData[k].children > 0 ? occupancyData[k].children : 0;
        }
        return {
			adults: adults,
			children: children
		}
    }

	return (
		<>
			{
				locationModal
				&&
				<Origen
					tab={index == 1 ? 'flight' : null}
					title={index == 1 ? t('Departure') : t('Destination')}
					onClose={closeModal}
					onSubmit={(location) => {
						setLocation(location);
						setError(null);
						closeModal();
					}}
				/>
			}
			{
				flightLocationModal
				&&
				<Origen
					tab={index == 1 ? 'flight' : null}
					title={index == 1 ? t('Departure') : t('Destination')}
					onClose={closeModal}
					onSubmit={(location) => {
						setFlightLocation(location);
						setError(null);
						closeModal();
					}}
				/>
			}
			{
				locationModal2
				&&
				<Origen
					tab={index == 1 ? 'flight' : null}
					title={t('Destination')}
					onClose={closeModal}
					onSubmit={(location) => {
						setLocation2(location);
						setError(null);
						closeModal();
					}}
				/>
			}
			{
				occupationModal
				&&
				<Ocupatipon
					onClose={closeModal}
					onSubmit={(data) => {
						closeModal();
						setOccupancyData(data);
						setError(null);
					}}
					data={occupancyData}
				/>
			}
			{
				viaModal
				&&
				<Viajeros
					onClose={closeModal}
					onSubmit={(data) => {
						closeModal();
						setViaData(data);
						setError(null);
					}}
					data={viaData}
				/>
			}
			{
				calendarModal
				&&
				<Calender
					rangePicker={true}
					startDay={startDay}
					endDay={endDay}
					onClose={closeModal}
					onSubmit={(startDay, endDay) => {
						setError(null);
						setStartDay(startDay);
						setEndDay(endDay);
					}}
				/>
			}

			{
				calendarModal2
				&&
				<FlightCalender
					rangePicker={false}
					startDay={startDay}
					endDay={endDay}
					onClose={closeModal}
					onSubmit={(startDay, endDay) => {
						setError(null);
						setStartDay(startDay);
						setEndDay(endDay);
					}}
				/>
			}
			

			{
				calendarSelection
				&&
				<FlightCalender
					flightMode={true}
					selection={tripType == 'oneway' ? true : false}
					rangePicker={true}
					startDay={cSelection}
					endDay={cSelection2}
					onClose={closeModal}
					onSubmit={(startDay, endDay) => {
						setError(null);
						setCSelection(startDay);
						setCSelection2(endDay);
					}}
				/>
			}

			{
				calendarSelection2
				&&
				<FlightCalender
					flightMode={true}	
					rangePicker={false}
					startDay={cSelection}
					endDay={cSelection2}
					onClose={closeModal}
					onSubmit={(startDay, endDay) => {
						setError(null);
						setCSelection(startDay);
						setCSelection2(endDay);
					}}
				/>
			}
			
			{
               openWebView
               &&
               <CustomWebView
                  data={openWebView}
               />
			}

			{
				!locationModal && !locationModal2 && !flightLocationModal && !calendarSelection && !calendarSelection2 && !occupationModal && !calendarModal &&  !calendarModal2 && !viaModal && !openWebView
				&&
				<View style={base.w100}>
					<View style={{ height: '96%', backgroundColor: '#FFF' }}>
						<ScrollView scrollEnabled={true} nestedScrollEnabled={true}>
						<View style={{ backgroundColor: '#fff', width: '100%', paddingBottom: hp(100) }}>
						<View style={{}}>
							<View style={base.row}>
								<View style={[base.col12]}>
									<View style={styles.logo}>
										<Image
											source={require('../../assets/icons/logo.png')}
											style={{ height: hp('35'), width: wp('190'), margin: hp(20), paddingVertical: hp(5), justifyContent: 'center' }}
										/>
									</View>
								</View>
								<View style={[base.col12]}>
									<ScrollView
										horizontal={true}
										showsHorizontalScrollIndicator={false}
									>
									<Tab
										value={index}
										onChange={(e) => {
											console.log(e);
											if(e == 2) {
												CustomDTabs.init(`https://destinia.com/m/apps/flight-and-hotel?prefcurrency=${currency ? currency.iso3 : ``}&d=m&remite=${(Platform.OS=== 'ios' ? 'app/ios' : 'app/android' )}&mode=app&lang=${detectLanguage}`);
											}
											else if(e == 3) {
												let url = `https://destinia.com/m/apps/car-searcher?prefcurrency=${currency ? currency.iso3 : ``}&d=m&lang=${detectLanguage}`;
												console.log(url);
												CustomDTabs.init(url);
											}
											else {
												setIndex(e > 1 ? 1 : e)
											}
										}}
										// containerStyle={{ backgroundColor: 'green', padding: 0, margin: 0 }}
										style={{ padding: 0, margin: 0, alignSelf: 'center', flexDirection: 'row', marginTop: hp(-30), backgroundColor: '#FFF' }}
										indicatorStyle={{
											backgroundColor: 'white',
											height: 0,
										}}
										disableIndicator={true}
										buttonStyle={{
											backgroundColor: 'white',
											height: hp(54),
										}}
										variant="primary"
									>
										<Tab.Item containerStyle={[index == 0 ? styles.outer : styles.outer2, {marginLeft: wp(15)}]} 
											title={
												<View style={[styles.tabItem]}>
													{/* <Icon
															name={Icons.building}
															type={IconsType.fontAwesome}
															color="#ed6217"
															style={styles.icon}
															size={Dimension.large}

														/> */}
													<Image
														source={ index == 0 ?  require('../../assets/icons/hotels.png') : require('../../assets/icons/building.png')}
														style={{ width: 15, height: 18, marginRight: 7 }}
													/>
													<Text style={ index == 0 ? styles.title : styles.title2}>{t('Hoteles')}</Text>
												</View>
											}
										/>
										<Tab.Item containerStyle={index == 1 ? styles.outer : styles.outer2}

												title={
													<View style={styles.tabItem}>
														<Image
															source={index == 1 ? require('../../assets/icons/flights_active.png') : require('../../assets/icons/flights.png')}
															style={{ width: 20, height: 18, marginRight: 7 }}
														/>
														<Text style={index == 1 ? styles.title : styles.title2}>{t('Vuelos')}</Text>
													</View>
												}
											/>
										<Tab.Item containerStyle={[styles.outer2]}
											title={
												<View style={styles.tabItem}>
													<Image
														source={require('../../assets/icons/flight+hotel.png')}
														style={{ width: 27, height: 16, marginRight: 7}}
													/>
													<Text style={styles.title2}>{t('Vuelo_Hoteles')}</Text>
												</View>
											}
										/>
										<Tab.Item containerStyle={[styles.outer2, {marginRight: wp(15)}]}
											title={
												<View style={styles.tabItem}>
													<Image
														source={require('../../assets/icons/car.png')}
														style={{ width: 19, height: 16, marginRight: 7}}
													/>
													<Text style={styles.title2}>{t('Rent_a_Car')}</Text>
												</View>
											}
										/>
									</Tab>
									</ScrollView>
									
								</View>
								<View style={[base.container, { width: '100%' }]}>
									<TabView 
										value={index} 
										onChange={setIndex} 
										disableTransition={true}
										animationConfig={{}}
										animationType="timing"
										containerStyle={Platform.OS == 'ios' ? [styles.tabContainerIos, {minHeight: hp(index ==1 ? 430 : 300)}] : [styles.tabContainerAnd, {minHeight: hp(index ==1 ? 430 : 300)}]}
									>
										<TabView.Item style={{ width: '100%'}}>
											{
												index == 0
												&&
												<View  style={styles.searchArea}>
													<View style={[
														styles.searchShadow													
													]}></View>
													<View style={styles.maingt}>
														<View style={[base.row]}>
															<View style={base.col12}>
																<TouchableOpacity
																	onPress={() => {
																		props.setFilterPopup({ modal: 'location', data: null });
																		setLocationModal(true);
																	}}
																>
																	<View style={styles.inut}>
																	
																		<Image
																			source={require('../../assets/icons/location2.png')}
																			style={{ width: wp(14), height: hp(21), marginRight: 10, marginLeft: 15 }}
																		/>
																		<View
																			style={styles.input}
																		><Text numberOfLines={1} ellipsizeMode="tail" style={styles.inputText}>{location && location.id ? location.name : t('Which_is_your_destination')}</Text></View>
																	</View>
																</TouchableOpacity>
															</View>

															<View style={base.col6}>
																<TouchableOpacity
																	onPress={() => {
																		props.setFilterPopup({ modal: 'calendar', data: null });
																		setCalendarModal(true);
																	}}
																>
																	<View style={styles.inut}>
																	
																		<Image
																			source={require('../../assets/icons/calendar.png')}
																			style={{ width: wp(13), height: wp(14), marginRight: 10,  marginLeft: 15 }}
																			resizeMode='contain'
																		/>
																		
																		<View
																			style={styles.input}
																		><Text style={[styles.inputText, {paddingRight: wp(2)}]}>{startDay ? (moment(startDay).format('D') + ' ' + calendar[detectLanguage].monthNamesShort[moment(startDay).format('M')-1]) : t(`Check_In`)}</Text></View>
																	</View>
																</TouchableOpacity>
															</View>
															<View style={base.col6}>
																<TouchableOpacity
																	onPress={() => {
																		props.setFilterPopup({ modal: 'calendar2', data: null });
																		if(endDay) {
																			setCalendarModal2(true);
																		}
																		else {
																			setCalendarModal(true);
																		}
																	}}
																>
																	<View style={styles.inut}>
																	
																		<Image
																			source={require('../../assets/icons/calendar.png')}
																			style={{ width: wp(13), height: wp(14), marginRight: 10,  marginLeft: 15 }}
																			resizeMode='contain'
																		/>
													
																		<View
																			style={styles.input}
																			keyboardType="default"
																		><Text style={[styles.inputText, , {paddingRight: wp(2)}]}>{endDay ? (moment(endDay).format('D') + ' ' + calendar[detectLanguage].monthNamesShort[moment(endDay).format('M')-1]) : t(`Check_Out`)}</Text></View>

																	</View>
																</TouchableOpacity>
															</View>
															<View style={base.col12}>
																<TouchableOpacity
																	onPress={() => {
																		props.setFilterPopup({ modal: 'occupation', data: null });
																		setOccupationModal(true);
																	}}
																>
																	<View style={styles.inut}>
																	<View style={{width:'90%', height:'100%', flexDirection:'row', alignItems:'center'}}>
																	
																		<Image
																			source={require('../../assets/icons/users.png')}
																			style={{ width: wp(16), height: wp(10), marginRight: 10, marginLeft: 15 }}
																		/>
																	
																		<View
																			style={[styles.input, { width: '82%', paddingVertical: hp(5) }]}
																			keyboardType="default"
																		><Text style={styles.inputText}>{getTotalPeople().adults && getTotalPeople().adults > 0 ? getTotalPeople().adults : '0'} {t('adults')}, {getTotalPeople().children && getTotalPeople().children > 0 ? getTotalPeople().children : '0'} {t('children')}</Text></View>
																		
																	</View>
																		<Image
																			source={require('../../assets/icons/dropdown_icon.png')}
																			style={{ width: wp('21'), height: wp('21'), marginRight: wp(60) }}

																		/>
																		
																	</View>
																</TouchableOpacity>
															</View>
															<View style={[base.col12]}>
																{
																	error
																	&&
																	<Text style={[base.textDanger, base.textCenter, base.col12]}>{error}</Text>
																}
																<TouchableOpacity
																	onPress={() => {
																		if(!location) 
																		{
																			setError(t('location_error'));
																		}
																		else if(!startDay || !endDay) 
																		{
																			setError(t('days_error'));
																		}
																		else if (occupancyData.length < 1 || occupancyData[0].adults < 1)
																		{
																			setError(t('adults_error'));
																		}
																		else
																		{
																			let url = 'https://online.destinia.com/online/hotels/direct_search?'+(location.type == 'apartment' || location.type == 'hotel' ? 'hotel_code=' : 'geounit_code=')+(location && location.id ? location.id : '')+'&occupancy='+encodeURI(JSON.stringify(occupancyData))+'&checkin='+startDay+'&nights='+(datediff(parseDate(startDay), parseDate(endDay)))+'&language_code='+(detectLanguage)+'&remite='+(Platform.OS=== 'ios' ? 'app/ios' : 'app/android' )+'&currency_code=' + (currency && currency.iso3 ? currency.iso3 : 'EUR')+'&mode=app';
																			console.log(url)
																			CustomDTabs.init(url);
																		}
																	}}
																>
																	{
																		Platform.OS == 'ios'
																		?
																		<View style={{ justifyContent: 'center', alignItems: 'center', height: hp(54), borderRadius: hp(8) }}>
																			<Image source={require('../../assets/icons/gradient.png')} style={{width: wp('340'), height: hp('55'),borderRadius: hp(8)}} />
																			<Text style={{ width: '100%', fontSize: fp(22), color: '#fff', width: '100%', position: 'absolute', textAlign: 'center' }}>{t('Search')}</Text>
																		</View>
																		:
																		<LinearGradient
																			colors={[colors.orange, colors.orangeLight]}
																			style={{ justifyContent: 'center', alignItems: 'center', height: hp(54), borderRadius: hp(8) }}
																			start={{ x: 0, y: 0.5 }}
																			end={{ x: 1, y: 1}}
																		>
																			<Text style={{ width: '100%', fontSize: fp(22), color: '#fff', width: '100%', textAlign: 'center' }}>{t('Search')}</Text>
																		</LinearGradient>
																	}
																</TouchableOpacity>
															</View>
														</View>
														
													</View>
												</View>
											}
										</TabView.Item>
										<TabView.Item style={{  width: '100%'}}>
											{
												index == 1
												&&
												<Flights
													viaData={viaData}
													startDay={cSelection}
													endDay={cSelection2}
													location={flightLocation}
													location2={location2}
													tripType={tripType}
													setCalendarModal2={(e) => setCalendarSelection2(e)}
													setCalendarModal={(e) => setCalendarSelection(e)}
													setLocationModal={(e) => setFlightLocationModal(e)}
													setLocationModal2={(e) => setLocationModal2(e)}
													setViaModal={(e) => setViaModal(e)}
													setTripType={(e) => {
														setTripType(e);
														setCSelection(null);
														setCSelection2(null);
														setCSelection(cSelection && e !== 'return' ? cSelection : moment().format('YYYY-MM-DD'));
														setCSelection2(e == 'return' ? moment().add(1, 'days').format('YYYY-MM-DD') : null)
													}}
												/>
											}
										</TabView.Item>
									</TabView>
									
									{
										index == 1 && flightBlocks && flightBlocks.items.length > 0
										&&
										flightBlocks.items.map((item, index) => {
											return (
												item.type == 'two-columns'
												?
													<View style={[base.row]} key={`outter`+ index}>
														{
															index < 1
															&&
															<View style={[base.col12, base.mt3, base.mb3]}><Text style={styles.gridsTitle}>{flightBlocks.main_title}</Text></View>
														}
														<View style={[base.col12, styles.gridWrap]}>
															{
																item.data.map((d, di) => {
																	return (
																		<View style={[styles.grids50, {marginRight: '2%'}]} key={`d` + di}>
																			<View style={
																						Platform.OS !== 'ios' ? styles.gridShadow : styles.gridShadowIOS
																					}></View>
																			<TouchableOpacity
																				style={{overflow: 'hidden'}}
																				onPress={() => {
																					if(d.link)
																					CustomDTabs.init(d.link);											
																				}}
																			>
																				<Image source={{uri: d.img}} style={styles.gridImage} />
																				
																				<View style={[base.col12, styles.gridBorder]}>
																					
																					<Text style={styles.gridsTitleSm}>{d.title}</Text>
																					<Text style={styles.gridsDesc}>{d.text}</Text>
																				</View>
																			</TouchableOpacity>
																		</View>
																	)
																})
															}
														</View>
													</View>
												:
													<View style={[base.row]}>
														{
															index < 1
															&&
															<View style={[base.col12, base.mt3, base.mb3]}><Text style={styles.gridsTitle}>{flightBlocks.main_title}</Text></View>
														}
														<View style={[base.col12]}>
														{
															item.data.map((d, di) => {
																return(<TouchableOpacity
																	key={`outter`+ di}
																	onPress={() => {
																		if(d.link)
																		CustomDTabs.init(d.link); 
																	}}
																>
															
																	<View style={[styles.grids100, styles.spotifyBox, {borderTopWidth: wp(1), height: hp('120'), overflow: 'hidden', justifyContent: 'center'}]}>
																		<View style={[base.col4, {paddingHorizontal: 0}]}>
																			<Image source={{uri: d.img}} style={{width: '100%', height: '100%'}} />
																		</View>
																		<View style={[base.col8]}>
																			{
																				d.title
																				&&
																				<Text style={styles.gridsTitleSm}>{d.title}</Text>
																			}
																			<Text style={[styles.gridsDesc, {height: 'auto', fontSize: fp(18.5), paddingHorizontal: hp(10),}]}>{d.text.replace(/(<([^>]+)>)/ig, '')}</Text>
																		</View>
																	</View>
																</TouchableOpacity>)
															})
														}
														</View>
													</View>
											)
										})
									}

									{
										index == 0 && blocks && blocks.items.length > 0
										&&
										blocks.items.map((item, index) => {
											return (
												item.type == 'two-columns'
												?
													<View style={[base.row]} key={`outter`+ index}>
														<View style={[base.col12, base.mt3, base.mb3]}><Text style={styles.gridsTitle}>{blocks.main_title}</Text></View>
														<View style={[base.col12, styles.gridWrap]}>
															{
																item.data.map((d, di) => {
																	return (
																		<View style={[styles.grids50, {marginRight: '2%'}]} key={`d` + di}>
																			<View style={
																						Platform.OS !== 'ios' ? styles.gridShadow : styles.gridShadowIOS
																					}></View>
																			<TouchableOpacity
																				style={{overflow: 'hidden'}}
																				onPress={() => {
																					if(d.link)
																					CustomDTabs.init(d.link);											
																				}}
																			>
																				<Image source={{uri: d.img}} style={styles.gridImage} />
																				
																				<View style={[base.col12, styles.gridBorder]}>
																					
																					<Text style={styles.gridsTitleSm}>{d.title}</Text>
																					<Text style={styles.gridsDesc}>{d.text}</Text>
																				</View>
																			</TouchableOpacity>
																		</View>
																	)
																})
															}
														</View>
													</View>
												:
													<View style={[base.row]}>
														<View style={[base.col12]}>
														{
															item.data.map((d, di) => {
																return(<TouchableOpacity
																	key={`outter`+ di}
																	onPress={() => {
																		if(d.link)
																		CustomDTabs.init(d.link); 
																	}}
																>
															
																	<View style={[styles.grids100, base.mt3, styles.spotifyBox]}>
																		<View style={[base.col4, {paddingHorizontal: 0}]}>
																			<Image source={{uri: d.img}} style={{width: '100%', height: '100%'}} />
																		</View>
																		<View style={[base.col8]}>
																			<Text style={styles.gridsTitleSm}>{d.title}</Text>
																			<Text style={[styles.gridsDesc, {height: 'auto'}]}>{d.text}</Text>
																		</View>
																	</View>
																</TouchableOpacity>)
															})
														}
														</View>
													</View>
											)
										})
									}

									{
										index == 0 && rewards && rewards.items.length > 0
										&&
										rewards.items.map((item, index) => {
											return (
													<View style={[base.row]} key={`outter`+ index}>
														<View style={[base.col12, base.mt4]}><Text style={styles.gridsTitle}>{rewards.main_title}</Text></View>
														
														<View style={[base.row]}>
															<View style={[base.col12]}>
															{
																item.data.map((d, di) => {
																	return(<TouchableOpacity
																		key={`outter`+ di}
																		onPress={() => {
																			if(d.link)
																			CustomDTabs.init(d.link); 
																		}}
																	>
																
																		<View style={[styles.gridBlackBorder, base.mt3, {borderTopWidth: wp(1), height: hp('110'), overflow: 'hidden'}]}>
																			<View style={[base.col3, {paddingHorizontal: 0}]}>
																				<Image source={{uri: d.img}} style={{width: '100%', height: '100%'}} />
																			</View>
																			<View style={[base.col8]}>
																				<Text style={[styles.gridsDesc, {height: hp(120), fontSize: fp(18), marginLeft: wp(10), marginTop: wp(0)}]}>{d.text.replace(/(<([^>]+)>)/ig, '')}</Text>
																			</View>
																			<View style={[base.col1, {justifyContent: 'center', alignItems :'center'}]}>
																				<Image style={{width: wp(20), height: hp(20)}} source={require('../../assets/icons/right.png')} />
																			</View>
																		</View>
																	</TouchableOpacity>)
																})
															}
															</View>
														</View>
													</View>
											)
										})
									}
								</View>
							</View>
						</View>
					</View>
						</ScrollView>
					</View>
				</View>
			}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		filterPopup: state && state.FilterPopUpReducer && state.FilterPopUpReducer.filterPopup,
		language: state.LanguageReducer.language,
		currency: state.CurrencyReducer.currency,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFilterPopup: (lang) => {
			dispatch({ type: 'SET_FILTER_POPUP', payload: lang })
		},
		setCurrency: (c) => {
			dispatch({ type: 'SET_CURRENCY', payload: c })
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TabViewComponent);