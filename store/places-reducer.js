import * as placesAction from './places-actions';
import Place from '../models/place';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case placesAction.placesActionTypes.ADD_PLACE:
      const newPlace = new Place(
        //new Date().toString(), //previously used as Id
        action.placeData.id.toString(), //after using SQLite DB as a persistent storage
        action.placeData.title,
        action.placeData.imageUri
      );
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
