import * as FileSystem from 'expo-file-system';

export const placesActionTypes = {
  ADD_PLACE: 'ADD_PLACE',
  DELETE_PLACE: 'DELETE_PLACE',
};

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split('/').pop(); //splits all folder names and pops out the last part which is a file name.
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image, //this is the full path of the image including filename
        to: newPath,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }

    //in the dispatched action below, we are going to change the temp location of the image file by executing the code above
    //this is the reason why we have put the code above
    dispatch({
      type: placesActionTypes.ADD_PLACE,
      //placeData: { title: title, imageUri: image },
      placeData: { title: title, imageUri: newPath },
    });
  };
};

/*
export const addPlace = (title, image) => {
  return {
    type: placesActionTypes.ADD_PLACE,
    placeData: { title: title, imageUri: image },
  };
};
*/
