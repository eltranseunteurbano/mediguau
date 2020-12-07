export const TOGGLE_TYPE_DATA = 'TOGGLE_TYPE_DATA';
export const SET_USER_SELECTED = 'SET_USER_SELECTED';
export const SET_PATOLOGIAS_DATA = 'SET_PATOLOGIAS_DATA';
export const SET_PERROS_DATA = 'SET_PERROS_DATA';
export const SET_PERSONAS_DATA = 'SET_PERSONAS_DATA';
export const IS_LOADING = 'IS_LOADING';
export const SET_SEARCH = 'SET_SEARCH';

export const toggleTypeData = (dispatch, value) => {
  dispatch({ type: TOGGLE_TYPE_DATA, value })
}

export const setUserSelected = (dispatch, value) => {
  dispatch({ type: SET_USER_SELECTED, value })
}

export const onLoadData = (dispatch, type, value) => {
  switch (type) {
    case 'patologias':
      dispatch({ type: SET_PATOLOGIAS_DATA, value })
    break;

    case 'perros':
      dispatch({ type: SET_PERROS_DATA, value })
    break;

    case 'personas':
      dispatch({ type: SET_PERSONAS_DATA, value })
    break;

    default:
      break;
  }
};

export const setIsLoading = (dispatch, value) => {
  dispatch({ type: IS_LOADING, value})
}

export const setIsSearched = (dispatch, value) => {
  dispatch({ type: SET_SEARCH, value})
}