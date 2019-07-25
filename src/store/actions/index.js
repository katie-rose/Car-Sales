export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addCarFeature = item => {
  return { type: ADD_FEATURE, payload: item };
};

export const removeCarFeature = item => {
  return { type: REMOVE_FEATURE, payload: item };
};
