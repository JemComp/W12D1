import { RECEIVE_POKEMON } from '../actions/pokemon_actions';


const movessReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_POKEMON:
      return Object.assign({}, action.pokePayload.moves, state)
  default:
    return state;
  }
}
  
export default movessReducer;
