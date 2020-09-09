import * as FileSystem from 'expo-file-system';
import * as db from '../helpers/db';

//import {insertPlace} from '../helpers/db';
//insertPlace();

export const placesActionTypes = {
  ADD_PLACE: 'ADD_PLACE',
  DELETE_PLACE: 'DELETE_PLACE',
};

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split('/').pop(); //splits all folder names and pops out the last part which is a file name.
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      //move image to persistent file store area
      await FileSystem.moveAsync({
        from: image, //this is the full path of the image including filename
        to: newPath,
      });

      //insert whole place data (including the images new path) into SQLite database
      const dbResult = await db.insertPlace(
        title,
        newPath,
        'Dummy Address',
        15.6,
        12.3
      );
      console.log(dbResult);

      //in the dispatched action below, we are going to change the temp location of the image file and store place data into SQLite db by executing the code above
      //this is the reason why we have put the code above (why not in reducer? because of this, it must be done before dispatching action!)
      dispatch({
        type: placesActionTypes.ADD_PLACE,
        //placeData: { title: title, imageUri: image },
        //placeData: { title: title, imageUri: newPath },
        placeData: { id: dbResult.insertId, title: title, imageUri: newPath }, //after inserting SQLite db, we can send id
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
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
