import * as React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import GenreCard from '../components/GenreCard';

export default function Home(props: any) {
    const genreList = [
        'FICTION',
        'DRAMA',
        'HUMOR',
        'POLITICS',
        'PHILOSOPHY',
        'HISTORY',
        'ADVENTURE',
    ];

    const onPress = (selectedCategory: string) => {
        props.navigation.navigate('Category', {
            selectedCategory: selectedCategory,
        });
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#f8f7ff',
            }}>
            <FlatList
                data={genreList}
                renderItem={({index}) => (
                    <GenreCard genre={genreList[index]} onPress={onPress} />
                )}
                keyExtractor={(item) => item}
                style={{width: '100%', marginVertical: 20}}
            />
        </SafeAreaView>
    );
}
