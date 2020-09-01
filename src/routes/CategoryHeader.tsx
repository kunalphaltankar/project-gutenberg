import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Back from '../assets/Back.svg';
import {GlobalStyles, Greys, Colors} from '../modules/GlobalStyles';

export default (props: any) => {
    const {selectedCategory} = props.scene.route.params;
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
            }}>
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{marginLeft: 10}}>
                <Back />
            </TouchableOpacity>
            <Text style={{...GlobalStyles.header2, marginLeft: 20}}>
                {selectedCategory.charAt(0) +
                    selectedCategory.slice(1).toLowerCase()}
            </Text>
        </View>
    );
};
