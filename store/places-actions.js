export const placesActionTypes = {
  ADD_PLACE: 'ADD_PLACE',
  DELETE_PLACE: 'DELETE_PLACE',
};

export const addPlace = (title) => {
  return { type: placesActionTypes.ADD_PLACE, placeData: { title: title } };
};
