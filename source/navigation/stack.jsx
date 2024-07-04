import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import GetStarted from '../app/components/auth/getstarted';
import Splash from '../app/components/auth/splash';
import MyTabs from './bottomtabs';
import login from '../app/components/auth/login';


const Stack = createNativeStackNavigator();

const StackScreens = ({ props , navigation }) => {
    
    return (
        
        <Stack.Navigator initialRouteName="splash"
            headerMode="screen"
            screenOptions={({ route, navigation }) => ({
               
            })}
        >

            <Stack.Screen
                name="splash"
                component={Splash}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="getstarted"
                component={GetStarted}
                options={{
                    headerShown: false,
                }}
                
            />
            <Stack.Screen
                name="login"
                component={login}
                options={{
                    headerShown: false,
                }}
                
            />
             <Stack.Screen
                name="home"
                component={MyTabs}
                options={{
                    headerShown: false,
                }}
                
            /> 
        </Stack.Navigator>
        
    )
}

export default StackScreens;