import * as mainActions from '../actions/mainActions';

const mainInitState = {
  isFriendSearching: null,
  userSelected: null,
};

const mainReducer = ( state = mainInitState, action ) => {
  switch ( action.type ) {

    case mainActions.TOGGLE_TYPE_DATA:
      return {
        ...state,
        isFriendSearching: action.value,
      };

      case mainActions.SET_USER_SELECTED:
        return {
          ...state,
          userSelected: action.value,
        }

    default:
      return state;
  }
}

export { mainReducer, mainInitState }