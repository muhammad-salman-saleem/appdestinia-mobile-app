import ActionType from '../constants/index';
const initialState = {
  language: null,
};

const LanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LANGUAGE:
      return Object.assign({}, state, {
        language: action.payload,
      });
    default:
      return state;
  }
};

export default LanguageReducer;
