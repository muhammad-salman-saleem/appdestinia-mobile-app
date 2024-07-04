import { React, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import CustomDTabs from '../CustomDTabs';
import { styles } from './style';
const Reserve = (props) => {
   
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        let url = 'https://res.destinia.com/my-account/multilogin?showTabs=true&defaultTab=login&mode=app&return_url=https://res.destinia.com/my-account/app/purchases/all';
        CustomDTabs.init(url);
    }, [])

    return (
        <>
           <View style={styles.view}>
                <Text style={styles.head}>LEFT</Text>
            </View>
        </>
    );
};

export default Reserve;
