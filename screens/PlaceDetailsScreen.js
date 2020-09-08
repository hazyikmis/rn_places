import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetailsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Place Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlaceDetailsScreen;
