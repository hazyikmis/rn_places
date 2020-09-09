export const placesActionTypes = {
  ADD_PLACE: 'ADD_PLACE',
  DELETE_PLACE: 'DELETE_PLACE',
};

export const addPlace = (title, image) => {
  return {
    type: placesActionTypes.ADD_PLACE,
    placeData: { title: title, imageUri: image },
  };
};
