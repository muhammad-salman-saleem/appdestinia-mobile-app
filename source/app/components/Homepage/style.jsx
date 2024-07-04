import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors } from '../../assets/global_style/colors';
import { Font } from '../../assets/global_style/fontfamily';
import { fp, hp, hzp, rp, vp, wp } from '../../assets/global_style/fontsize';
const { width, height, fontScale } = Dimensions.get('window');
export const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: colors.white
	},
	txt: {
		fontSize: fp(60),
		color: '#000'
	},
	mainhef: {
		paddingTop: hp(60),

		textAlign: 'center',
		alignItems: 'center',
		paddingBottom: hp(10),
		backgroundColor: colors.white,
		marginBottom: hp(10),
	},
	head: {
		fontSize: fp(25),
		color: '#000',
		marginTop: hp('10'),
		fontFamily: Font.regular
	},
	head2: {
		fontSize: fp(20),
		paddingTop: hp(5),
		color: colors.orange
	},
	tabContainerIos: {width: '100%', height: 'auto', marginBottom: hp(15)},
	tabContainerAnd: {width: '100%', height: 'auto', marginBottom: hp(20)},
	menudivde: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingHorizontal: hzp(10),
		marginBottom: hp(25),
	},
	menuarea: {
		marginTop: hp(30),
		paddingLeft: wp(5)
	},
	iconarea: {
		width: wp(30),
		position: 'absolute',
		top: hp(75),
		left: wp(20),
	},
	txtare: {
		flex: 1,
	},
	txtrt: {
		fontSize: fp(19),
		paddingTop: hp(5),
		color: colors.black,
		paddingLeft: wp(10),
	},
	txtonw: {
		textAlign: 'center',
		fontSize: fp(20),
		color: colors.black,
		fontFamily: Font.regular
	},
	divide: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: vp(15),
		paddingHorizontal: hzp(20)
	},
	left: {
		width: '80%',
	},
	full: {
		width: '100%'
	},
	right: {
		width: '20%'
	},
	txtblack: {
		fontSize: fp(20),
		color: colors.black
	},
	txtorange: {
		fontSize: fp(20),
		color: colors.orange
	},
	txtblue: {
		fontSize: fp(20),
		color: colors.blue,
		textAlign: 'right'
	},
	mainit: {
		padding: wp(20)
	},
	righttxt: {
		textAlign: 'right',
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	icondf: {
		textAlign: 'right',

	},
	border: {
		color: colors.orange,
		borderWidth: wp(1),
		borderColor: colors.orange,
		borderRadius: hp(10)
	},
	maingt: {
		borderColor: '#f58b29',
		borderWidth: wp(1.5),
		borderRadius: wp(20),
		padding: wp(20),
		position: 'relative',
		width: '100%',
		backgroundColor: '#FFF',
		minWidth: (Dimensions.get('window').width - wp(40))
	},
	input: {
		height: '100%',
		alignContent:'center',
		justifyContent:'center',
		// margin: 0,
		// backgroundColor: 'pink',
		width: wp(270),
		// paddingTop: hp(3)
	},
	inut: {
		width: '100%',
		marginBottom: hp(15),
		borderWidth: 1,
		// paddingHorizontal: 8,
		// paddingVertical: 10,
		borderRadius: wp(4),
		borderColor: colors.offgrey,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#FFF',
		position: 'relative',
		height: hp(54)
	},
	returnTrip: {
		height: wp(36), 
		width: wp(36), 
		borderWidth: 1,
		borderRadius: wp(30), 
		justifyContent: 'center',
		borderColor: colors.offgrey,
		position: 'absolute',
		right: '11%',
		top:Platform.OS == 'ios' ? (width === 375 ? rp(66) : hp(82)) :Platform.OS == 'android' ? (width === 384 ? rp(60) : hp(85)): hp(84),
		zIndex: 11, 
		backgroundColor: '#FFF',
		alignContent: 'center',
		alignItems: 'center'
	},
	returnicon: { width: wp(16), height: wp(21), justifyContent: 'center',zIndex: 11 },
	inputText: {
		color: colors.black_Z,
		fontSize: fp(16),
		paddingLeft: Platform.OS == 'ios' ? wp(2):wp(0),
		// paddingTop: Platform.OS == 'ios' ? hp(4) : hp(0)
	},
	center:{
		width:Platform.OS == 'ios' ? "20%":"25%",
		height:"100%",
		alignItems:'center', 
		justifyContent:'center'
	},
	outer: {
		borderRadius: wp(25),
		borderWidth: wp(1.5),
		borderColor: colors.orange,
		marginBottom: hp(20),
		// width: '100%',
		marginTop: hp(40),
		alignItems: 'center',
		marginRight: wp(10),
		paddingHorizontal: wp(5),
		backgroundColor: colors.white
	},
	outer2: {
		borderRadius: wp(30),
		borderWidth: wp(1.5),
		borderColor: colors.white,
		marginBottom: hp(20),
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: hp(40),
		marginRight: wp(10),
		paddingHorizontal: wp(5),
		backgroundColor: colors.white
	},
	tabItem: {
		flexDirection: 'row', // Arrange icon and text horizontally
		alignItems: 'center', // Align items vertically within the row
		// paddingHorizontal: 10, // Add some horizontal padding
		// width: wp('100'),
		justifyContent: 'center',
		alignContent: 'center',

	},
	icon: {
		marginRight: 3, // Add space between icon and text
	},
	title: {
		fontSize: fp(20),
		padding: 0,
		color: '#ed6217',
	},
	title2: {
		fontSize: fp(20),
		padding: 0,
		color: '#c1c1c1',
	},
	logo: {
		marginTop: hp(40),
		fontFamily: Font.medium,
		alignSelf: 'center', flexDirection: 'row', width: '100%', justifyContent: 'center'
	},
	searchArea: {
		position: 'relative'
	},
	searchShadow: {
		backgroundColor: 'rgba(216,216,216, 0.1)',
		borderColor: 'rgba(216,216,216, 0.1)',
		borderWidth: hp(2),
		position: 'absolute',
		alignSelf: 'flex-end',
		width: '100%',
		height: hp(Platform.OS == 'ios' ? '250' : '280'),
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height:0,
		},
		shadowOpacity: 1,
		shadowRadius: 1.16,
		elevation: 4,
		borderBottomLeftRadius: hp('20'),
		borderTopRightRadius: hp('17'),
		borderTopLeftRadius: hp('28'),
		borderBottomRightRadius: hp('28'),
		right:  wp(-2.7), 
		bottom: hp(-2.5) 
	},
	banner: {
		width: '100%',
		height: hp(70),
		marginTop: hp(25)
	},
	gridsTitle: {
		color: colors.black_Z,
		fontSize: fp(22),
		fontFamily: Font.regular

	},
	gridsTitleSm: {
		color: colors.black_Z,
		fontSize: fp(19),
		paddingTop: hp(10),
		paddingHorizontal: hp(5),
		fontFamily: Font.regular
	},
	gridsDesc: {
		fontSize: fp(15),
		paddingBottom: hp(18),
		paddingTop: hp(8),
		paddingHorizontal: hp(5),
		height: hp(95),
		overflow: 'hidden',
		justifyContent: 'center'
	},
	gridWrap: {
		width: '100%',
		flexDirection: 'row',
	},
	grids50: {
		flexDirection: 'column',
		width: '49%',
		backgroundColor: colors.white,
		borderRadius: wp('15')
	},
	grids100: {
		flexDirection: 'row',
		width: '100%',
		overflow: 'hidden',
		backgroundColor: colors.white,
		borderRadius: wp('15'),
	},
	spotifyBox: {
		backgroundColor: '#FFF',
		borderColor: 'rgba(216,216,216, 1)',
		borderWidth: wp(1),
		borderTopWidth: wp(1),
		borderRightWidth: wp(2),
		borderBottomWidth: wp(2),
		borderRadius: wp('15'),
		shadowColor: '#000',
		height: hp(110),
		overflow: 'hidden',
	},
	spotifyShadow: {
		backgroundColor: '#FFF',
		borderColor: 'rgba(216,216,216, 1)',
		borderWidth: wp(1),
		borderTopWidth: wp(1),
		borderRightWidth: wp(2),
		borderBottomWidth: wp(2),
		borderRadius: wp('15'),
		height: hp(100),
		overflow: 'hidden'
	},
	gridImage: {
		width: '100%',
		height: hp(100),
		borderTopRightRadius: wp('15'),
		borderTopLeftRadius: wp('15'),
	},
	gridShadow: {
		backgroundColor: '#FFF',
		borderColor: 'rgba(216,216,216, 1)',
		borderWidth: wp(1),
		borderTopWidth: wp(0),
		borderRightWidth: wp(2),
		borderBottomWidth: wp(2),
		borderRadius: wp('15'),
		width: '100%',
		position: 'absolute',
		alignSelf: 'flex-end',
		left: hp('0'),
		width: '100%',
		height: '100%',
		shadowColor: '#000',
		shadowOffset: {
			width: -10,
			height:0,
		},
		shadowOpacity: 1,
		shadowRadius: 1,
		elevation: 4,
	},
	gridShadowIOS: {
		backgroundColor: '#FFF',
		borderColor: 'rgba(216,216,216, 1)',
		borderWidth: wp(1),
		borderTopWidth: wp(0),
		borderRightWidth: wp(2),
		borderBottomWidth: wp(2),
		borderRadius: wp('15'),
		width: '100%',
		position: 'absolute',
		alignSelf: 'flex-end',
		left: hp('0'),
		width: '100%',
		height: '100%',
		shadowColor: '#444',
		shadowOffset: {
			width: 1,
			height:1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 4,
	},
	gridBlackBorder: {
		flexDirection: 'row',
		width: '100%',
		overflow: 'hidden',
		borderColor: colors.black,
		borderWidth: wp(1.5),
		borderRadius: hp(10),
		overflow: 'hidden',
		width: '100%',
	},
	radioContainer: {
		width: '100%', 
		margin: 0, 
		padding: 0,
		height: 30
	},
	radioButtonTxt: {
		marginLeft: 4, 
		padding: 0, 
		color: colors.black_Z,
		fontSize: fp(16),
		fontWeight: 400
	}
});



