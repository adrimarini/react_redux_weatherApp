// need to import FETCH_WEATHER const
// declared in actions/index for our switch case
import { FETCH_WEATHER } from '../actions/index';

//  reducer is always just a function.
// it takes first param which is always state, and
// second param is always action
export default function(state = [], action) {
  console.log('Action recieved', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // using concat will create a new array with
      // the original state data still inside it.
      // this avoids state mutation:
      // return state.concat([ action.payload.data ]);
      //ES6 syntax below of the above:
      return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city, [city, city]]; does not create an array within an array
  }
  return state;
}
