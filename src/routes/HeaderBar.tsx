import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Pattern from '../assets/Pattern.svg';
import {GlobalStyles, Colors, Greys} from '../modules/GlobalStyles';

export default () => (
  <View
    style={{
      width: '100%',
      position: 'relative',
      height: 270,
      overflow: 'hidden',
      backgroundColor: '#f8f7ff',
    }}>
    <Pattern></Pattern>
    <Pattern></Pattern>
    <Text
      style={{
        ...GlobalStyles.header1,
        position: 'absolute',
        top: '10%',
        marginLeft: '5%',
      }}>
      Gutenberg Project
    </Text>
    <Text
      style={{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        position: 'absolute',
        top: '50%',
        marginTop: 20,
        marginLeft: '5%',
      }}>
      A social cataloging website that allows you to freely search its database
      of books, annotations, and reviews.
    </Text>
  </View>
);
