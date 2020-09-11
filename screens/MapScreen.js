//IMPORTANT!
/*
The steps defined under "Configuration" section might be required in the MapView Expo API Reference
(https://docs.expo.io/versions/v38.0.0/sdk/map-view/)
*/

import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = (props) => {
  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    //zoom factors, how much space you can see around the center point above
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  //"style" is important! If there is no styling on MapView, you can not see the map!

  return <MapView style={styles.map} region={mapRegion} />;
};

const styles = StyleSheet.create({
  map: {
    //flexDirection: 'row',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default MapScreen;
