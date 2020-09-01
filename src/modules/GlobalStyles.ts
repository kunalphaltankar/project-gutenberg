import {StyleSheet} from 'react-native';

export const Colors = {
    RoyalBlue: '#5E56E7', //kind of blue
    TitanWhite: '#F8F7FF', //kind of white
  };
  
  export const Greys = {
    AthensGray: '#F0F0F6', //light
    SilverChalice: '#A0A0A0', //medium
    MineShaft: '#333333', //dark
  };

export const GlobalStyles = StyleSheet.create({
  header1: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.RoyalBlue,
    fontSize: 48,
  },
  header2: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.RoyalBlue,
    fontSize: 30,
  },
});


