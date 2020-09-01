import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Next from '../assets/Next.svg';
import Fiction from '../assets/Fiction.svg';
import Drama from '../assets/Drama.svg';
import Humor from '../assets/Humour.svg';
import Politics from '../assets/Politics.svg';
import Philosophy from '../assets/Philosophy.svg';
import History from '../assets/History.svg';
import Adventure from '../assets/Adventure.svg';
import {GlobalStyles} from '../modules/GlobalStyles';

export default function GenreCard(props: any) {
    const {genre, onPress} = props;
    return (
        <TouchableOpacity
            style={{
                shadowRadius: 10,
                shadowColor: '#d3d1ee',
                shadowOpacity: 0.5,
                shadowOffset: {width: 0, height: 2},
                // shadowColor: '#000',
                // shadowOffset: {
                //     width: 0,
                //     height: 5,
                // },
                // shadowOpacity: 0.36,
                // shadowRadius: 6.68,

                elevation: 5,

                height: 50,
                width: '90%',

                backgroundColor: '#fff',
                borderRadius: 4,
                margin: 10,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'space-between',
            }}
            onPress={() => onPress(genre)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{height: 32, width: 32}}>
                    {getGenreIcon(genre)}
                </View>
                <Text
                    style={{
                        ...GlobalStyles.header2,
                        fontSize: 20,
                        marginLeft: 10,
                    }}>
                    {genre}
                </Text>
            </View>
            <Next />
        </TouchableOpacity>
    );
}

function getGenreIcon(genre: string) {
    switch (genre) {
        case 'FICTION':
            return <Fiction width="100%" height="100%" />;

        case 'DRAMA':
            return <Drama width="100%" height="100%" />;

        case 'HUMOR':
            return <Humor width="100%" height="100%" />;

        case 'POLITICS':
            return <Politics width="100%" height="100%" />;

        case 'PHILOSOPHY':
            return <Philosophy width="100%" height="100%" />;

        case 'HISTORY':
            return <History width="100%" height="100%" />;

        case 'ADVENTURE':
            return <Adventure width="100%" height="100%" />;
    }
}
