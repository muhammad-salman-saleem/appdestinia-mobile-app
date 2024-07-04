import ActionType from '../constants/index';
const initialState = {
  apitoken: {},
};

const APITokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_API_TOKEN:
     
      return Object.assign({}, state, {
        apitoken: action.payload,
      });
    default:
      return state;
  }
}
export default APITokenReducer;