export const TOGGLE_TYPE_DATA = 'TOGGLE_TYPE_DATA';
export const SET_USER_SELECTED = 'SET_USER_SELECTED';

export const toggleTypeData = (dispatch, value) => {
  dispatch({ type: TOGGLE_TYPE_DATA, value })
}

export const setUserSelected = (dispatch, value) => {
  dispatch({ type: SET_USER_SELECTED, value })
}