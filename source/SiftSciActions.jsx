import SiftReactNative from "sift-react-native";
import {Platform} from 'react-native';
export const SiftSciActions = {
    init: () => {
        let accountId = '079a3cabc23ad560';
        let beaconKey = '5c8bf21af6';
        let disallowCollectingLocationData  = true;
        let serverUrlFormat = Platform.OS == 'ios' ? 'https://api3.siftscience.com/v3/accounts/%@/mobile_events' : 'https://api3.siftscience.com/v3/accounts/%s/mobile_events'; 
        SiftReactNative.setSiftConfig(accountId, beaconKey, disallowCollectingLocationData, serverUrlFormat);
    },
    setPageName: (userId, page) => {
        this.init();
        SiftReactNative.setUserId(userId);
        SiftReactNative.setPageName(page);
        SiftReactNative.upload();
    }
}