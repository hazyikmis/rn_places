import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import CustomHeaderButton from '../components/CustomHeaderButton';

import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';

const defaultStackNavScreenOptions = {
  headerStyle: {
    //height: 80,
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  //headerTransparent: true,
  // headerTitleStyle: {
  //   fontFamily: 'open-sans-bold',
  // },
  // headerBackTitleStyle: {
  //   fontFamily: 'open-sans', //no effect on android (no "back" text, just icon)
  // },
};

const placesListScreenOptions = ({ navigation, route }) => ({
  headerTitle: 'All Places',
  //headerLeft: () => drawerMenu(navigation),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Add New Place"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => navigation.navigate('NewPlace')}
      />
    </HeaderButtons>
  ),
});

const StackPlaces = createStackNavigator();

const PlacesNavigator = () => {
  return (
    <StackPlaces.Navigator screenOptions={defaultStackNavScreenOptions}>
      <StackPlaces.Screen
        name="PlacesList"
        component={PlacesListScreen}
        //options={{ headerTitle: 'All Places' }}
        options={placesListScreenOptions}
      />
      <StackPlaces.Screen
        name="PlaceDetails"
        component={PlaceDetailsScreen}
        options={({ route }) => ({ headerTitle: route.params.place.title })}
      />
      <StackPlaces.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{ headerTitle: 'New Place' }}
      />
      <StackPlaces.Screen name="Map" component={MapScreen} />
    </StackPlaces.Navigator>
  );
};

export default PlacesNavigator;
