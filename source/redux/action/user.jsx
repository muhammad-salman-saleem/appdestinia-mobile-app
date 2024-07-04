import ActionType from '../constants/index';

export const setAPIToken = param => {
  return {
    type: ActionType.SET_API_TOKEN,
    payload: param,
  };
};

export const setLanguage = param => {
  return {
    type: ActionType.SET_LANGUAGE,
    payload: param,
  };
};

export const setCurrency = param => {
  return {
    type: ActionType.SET_CURRENCY,
    payload: param,
  };
};

export const setFilterPopup = param => {
  return {
    type: ActionType.SET_FILTER_POPUP,
    payload: param,
  };
};