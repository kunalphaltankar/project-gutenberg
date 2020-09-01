import React from 'react';
import HomeStack from './routes/HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export default function ProjectGutenberg(props: any) {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <HomeStack></HomeStack>
        </NavigationContainer>
    );
}
