import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Alert,
    ActivityIndicator,
} from 'react-native';
import Search from '../assets/Search.svg';
import {Greys, Colors, GlobalStyles} from './GlobalStyles';
import BookCard from '../components/BookCard';
import ListEmptyComponet from '../components/ListEmptyComponet';

export default class Catagory extends React.Component {
    state = {
        booksList: [],
        borderWidth: 0,
        searchText: '',
        booksResponse: {} as any,
        refreshing: false,
    };

    _flatListRef: any;

    constructor(props: any) {
        super(props);
    }

    onFocus = () => {
        this.setState({borderWidth: 1});
    };

    onBlur = () => {
        this.setState({borderWidth: 0});
    };

    componentDidMount() {
        // this.setState({selectedCategory: });
        this.setState({refreshing: true});
        fetch(
            'http://skunkworks.ignitesol.com:8000/books?topic=' +
                (this.props as any).route.params.selectedCategory,
        )
            .then((res) => res.json())
            .then((data) => {
                this.setState({refreshing: false});
                console.log(data);
                this.setState({booksList: data.results, booksResponse: data});
            })
            .catch((err) => {
                console.log(err);
                this.setState({refreshing: false});
            });
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View
                    style={{
                        backgroundColor: '#ddd',
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        width: '90%',
                        borderRadius: 4,
                        borderWidth: this.state.borderWidth,
                        borderColor: Colors.RoyalBlue,
                        paddingHorizontal: 10,
                        height: 40,
                        marginTop: 10,
                        marginBottom: 15,
                    }}>
                    <View
                        style={{
                            width: '10%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Search />
                    </View>

                    <TextInput
                        style={{
                            fontSize: 16,
                            width: '90%',
                            fontFamily: 'Montserrat-Regular',
                            // color: 'black',
                        }}
                        placeholder="Search"
                        placeholderTextColor={Greys.SilverChalice}
                        accessibilityRole="search"
                        clearButtonMode="always"
                        selectionColor={Colors.RoyalBlue}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        numberOfLines={1}
                        onChangeText={(searchText) =>
                            this.setState({searchText})
                        }
                        onSubmitEditing={() => {
                            this.setState({refreshing: true});
                            fetch(
                                `http://skunkworks.ignitesol.com:8000/books?search=${
                                    this.state.searchText
                                }&topic=${
                                    (this.props as any).route.params
                                        .selectedCategory
                                }`,
                            )
                                .then((res) => res.json())
                                .then((data) => {
                                    console.log(data);
                                    this.setState({
                                        booksList: data.results,
                                        booksResponse: data,
                                        refreshing: false,
                                    });
                                })
                                .catch((err) => {
                                    console.log(err);
                                    this.setState({refreshing: false});
                                });
                        }}
                    />
                </View>
                <FlatList
                    ref={(ref) => (this._flatListRef = ref)}
                    data={this.state.booksList}
                    renderItem={({item}) => <BookCard {...item} />}
                    keyExtractor={(_, index) => index.toString()}
                    numColumns={3}
                    horizontal={false}
                    style={{
                        width: '96%',
                        alignSelf: 'center',
                        backgroundColor: '#eee',
                        borderRadius: 4,
                    }}
                    contentContainerStyle={{
                        flexGrow: 1,
                        alignItems: 'center',
                        marginVertical: 10,
                    }}
                    ListEmptyComponent={() => (
                        <ListEmptyComponet refreshing={this.state.refreshing} />
                    )}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        // this.setState({refreshing: true});
                        // setTimeout(() => {
                        //     this.setState({refreshing: false});
                        // }, 3000);
                        return (
                            <ActivityIndicator
                                color={Colors.RoyalBlue}
                                size="large"
                            />
                        );
                    }}
					onEndReachedThreshold={0.2}
					//  I couldn't figure out infinite FlatList, yet. :(
                    onEndReached={({distanceFromEnd}) => {
                        console.log('====================================');
                        console.log(
                            this.state.booksResponse.next,
                            distanceFromEnd,
                        );
                        console.log('====================================');
                        if (
                            !!this.state.booksResponse.next &&
                            !this.state.refreshing
                        ) {
                            this.setState({refreshing: true});
                            fetch(this.state.booksResponse.next)
                                .then((res) => res.json())
                                .then((data) => {
                                    console.log(data);
                                    // const booksList = this.state.booksList.filter(
                                    //     (item) => true,
                                    // );//filter is to deep copy an array
                                    // booksList.push(data.results);

                                    const booksList = data.results;
                                    (this
                                        ._flatListRef as FlatList).scrollToOffset(
                                        {
                                            animated: true,
                                            offset: 1,
                                        },
                                    );
                                    this.setState({
                                        booksList,
                                        booksResponse: data,
                                        refreshing: false,
                                    });
                                })
                                .catch((err) => {
                                    console.log(err);
                                    this.setState({refreshing: false});
                                });
                        }
                    }}
                />
            </View>
        );
    }
}
