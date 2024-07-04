import ActionType from '../constants/index';
const initialState = {
  currency: null,
};

const CurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENCY:
      return Object.assign({}, state, {
        currency: action.payload,
      });
    default:
      return state;
  }
};

export default CurrencyReducer;
