import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking,
    Alert,
} from 'react-native';
import {Colors, Greys} from '../modules/GlobalStyles';
export default (props: any) => {
    return (
        <TouchableOpacity
            style={{
                width: 114,
                margin: 5,
                borderRadius: 8,
                shadowRadius: 10,
                shadowColor: '#d3d1ee',
                shadowOpacity: 0.5,
                shadowOffset: {width: 0, height: 2},
            }}
            onPress={async () => {
                const MimeList = [
                    'text/html; charset=utf-8',
                    'application/pdf',
                    'text/plain; charset=utf-8',
                ];
                const availableMime = MimeList.filter(
                    (item) => item in props.formats,
                );

                if (availableMime.length == 0) {
                    Alert.alert('No viewable version available');
                    return;
                }

                const url = props.formats[availableMime[0]] as string;
                if (url.endsWith('.zip')) {
                    Alert.alert('No viewable version available');
                    return;
                }

                try {
                    const supported = await Linking.canOpenURL(url);
                    if (supported) {
                        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                        // by some browser in the mobile
                        await Linking.openURL(url);
                    } else {
                        Alert.alert(`Don't know how to open this URL: ${url}`);
                    }
                } catch (error) {
                    console.log(error);
                }
            }}>
            <Image
                style={{width: 114, height: 162, borderRadius: 8}}
                source={{
                    uri: `http://www.gutenberg.org/cache/epub/${props.id}/pg${props.id}.cover.medium.jpg`,
                }}
            />

            <View style={{padding: 3}}>
                <Text
                    style={{
                        fontSize: 12,
                        fontFamily: 'Montserrat-Regular',
                        textAlign: 'center',
                    }}
                    numberOfLines={2}>
                    {props.title ? props.title.toUpperCase() : 'No Title'}
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        fontFamily: 'Montserrat-Regular',
                        color: Greys.SilverChalice,
                        textAlign: 'center',
                    }}
                    numberOfLines={2}>
                    {props.authors.length > 0
                        ? (props.authors[0].name as string)
                              .split(',')
                              .reverse()
                              .join(' ')
                        : 'NO AUTHOR'}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
