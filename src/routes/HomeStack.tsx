import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../modules/Home';
import Catagory from '../modules/Category';
import {View, Text} from 'react-native';
import HeaderBar from './HeaderBar';
import CategoryHeader from './CategoryHeader';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => <HeaderBar />,
                }}
            />
            <Stack.Screen
                name="Category"
                component={Catagory}
                options={{
                    header: (props) => <CategoryHeader {...props} />,
                    // headerStyle: {backgroundColor: '#fff'},
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
