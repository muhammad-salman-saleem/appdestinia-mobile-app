import SafariView from "react-native-safari-view";
import React from 'react';
import {Platform} from 'react-native';
import { CustomTabs	} from 'react-native-custom-tabs';
import { colors } from "../assets/global_style/colors";

const CustomDTabs = {
        init: (url) => {
            if(Platform.OS == 'ios')
            {
                SafariView.isAvailable()
                .then(SafariView.show({
                    url: url
                }))
                .catch(error => {
                    // Fallback WebView code for iOS 8 and earlier
                });
            }
            else
            {
                CustomTabs.openURL(url, {
                    toolbarColor: colors.orange,
                    enableUrlBarHiding: true,
                    showPageTitle: true,
                    enableDefaultShare: true,
                }).then((launched) => {
                    console.log(`Launched custom tabs: ${launched}`);
                }).catch(err => {
                    console.error(err)
                });
            }
        }
    }

export default CustomDTabs;