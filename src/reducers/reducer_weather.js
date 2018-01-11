//  reducer is always just a function.
// it takes first param which is always state, and
// second param is always action
export default function(state = null, action) {
  console.log('Action recieved', action);
  
  return state;
}
