import { React, useState } from 'react';
import Currency from '../currency';
import Help from '../help';
import Language from '../language';
import Menu from '../menu';
import Settings from '../settings';

const Check = (props) => {
    const [screen, setScreen] = useState('menu');

    return (
        <>
            {
                screen == 'menu'
                &&
                <Menu 
                    onPress={(screen) => {
                        setScreen(screen);
                    }}
                />
            }
            {
                screen == 'settings'
                &&
                <Settings 
                    onPress={(screen) => {
                        setScreen(screen);
                    }}
                />
            }
            {
                screen == 'language'
                &&
                <Language 
                    onPress={(screen) => {
                        setScreen(screen);
                    }}
                />
            }
            {
                screen == 'currency'
                &&
                <Currency
                    onPress={(screen) => {
                        setScreen(screen);
                    }}
                />
            }
            {
                screen == 'help'
                &&
                <Help
                    onPress={(screen) => {
                        setScreen(screen);
                    }}
                />
            }
        </>
    );
};

export default Check;
