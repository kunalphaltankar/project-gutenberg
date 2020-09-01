import React, {useEffect} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {GlobalStyles} from '../modules/GlobalStyles';

export default (props: any) => {
    useEffect(() => {
        setTimeout(() => {}, 3000);
    });
    return (
        <View
            style={{
                flex: 1,
                height: Dimensions.get('window').height / 2.5,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            {/* <Image
                source={{uri: '../assets/nobook.png'}}
                style={{width: '100%'}}
            /> */}
            <Text
                style={{
                    ...GlobalStyles.header2,
                    textAlign: 'center',
                    marginTop: 10,
                }}>
                {props.refreshing ? 'Please Wait...' : 'No book Found!'}
            </Text>
            <Text
                style={{
                    fontFamily: 'Montserrat-Italic',
                    textAlign: 'center',
                    marginTop: 30,
                }}>
                {!props.refreshing &&
                    'Try searching something by author or book name.'}
            </Text>
        </View>
    );
};
