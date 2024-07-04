import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { styles } from './style';
import WebView from 'react-native-webview';

const Search = (props) => {
    return (
        <>
            <View style={styles.view}>
                <View
                    style={{flex: 1, height: '100%'}}
                >
                    <WebView 
                        source = {{uri: 'https://destinia.com/m/apps/flight-and-hotel?prefcurrency=EUR&d=m&remite=app/android&mode=app'}} 
                    />
                </View>
            </View>
        </>
    );
};

export default Search;
