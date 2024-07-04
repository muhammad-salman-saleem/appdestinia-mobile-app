import ActionType from '../constants/index';
const initialState = {
  filterPopup: null,
};

const FilterPopUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_POPUP:
      return Object.assign({}, state, {
        filterPopup: action.payload,
      });
    default:
      return state;
  }
};

export default FilterPopUpReducer;
