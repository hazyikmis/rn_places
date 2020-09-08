import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          place={itemData.item}
          onSelect={() => {
            props.navigation.navigate({
              name: 'PlaceDetails',
              params: {
                place: itemData.item,
              },
            });
          }}
        />
      )}
    />
  );
};

export default PlacesListScreen;
