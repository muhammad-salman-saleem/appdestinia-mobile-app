import React from 'react';
import { Touchable, View } from 'react-native';
import { StyleSheet, Text , Image, Linking} from 'react-native';
import { styles } from './style';
import WebView from 'react-native-webview';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import { Icons, IconsType } from '../../assets/global_style/icon';
import { colors } from '../../assets/global_style/colors';
import { Dimension } from '../../assets/global_style/dimension';

const CustomWebView = (props) => {
    return (
        <>
           <View style={styles.view}>
                <View
                    style={styles.topBar}
                >
                    <View style={styles.topBarTitle}>
                        <Text style={styles.title_ti}>{props.data.title}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                props.data.onPress()
                            }}
                            style={styles.crossover}
                        >
                            <Image
                                source={require('../../assets/icons/chevron-left.png')}
                                style={styles.crossIcon}
                                resizeMode='contain'
                                onPress={() => props.onClose()}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <WebView 
                    source={{uri: props.data.url}} 
                    // source={{uri: 'https://google.com'}} 
                    style={{marginTop: '20'}}
                    originWhitelist={[ '*']}
                    onShouldStartLoadWithRequest={event => {
                        if (event.url.slice(0, 6) === 'mailto' || event.url.slice(0, 3) === 'tel') {
                            Linking.openURL(event.url);
                            return false
                        }
                        return true;
                    }}
                    
                />
            </View>
        </>
    );
};

export default CustomWebView;
