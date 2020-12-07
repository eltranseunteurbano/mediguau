import * as mainActions from '../actions/mainActions';

const mainInitState = {
  isFriendSearching: null,
  userSelected: null,
  patalogiasData: null,
  perrosData: null,
  personasData: null,
  isLoading: false,
  isSearched: false,
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
      };

    case mainActions.SET_PATOLOGIAS_DATA:
      return {
        ...state,
        patalogiasData:action.value,
      }
    
    case mainActions.SET_PERROS_DATA:
      return {
        ...state,
        perrosData:action.value,
      }

    case mainActions.SET_PERSONAS_DATA:
      return {
        ...state,
        personasData:action.value,
      }

      case mainActions.IS_LOADING:
        return {
          ...state,
          isLoading: action.value,
        }
        
    case mainActions.SET_SEARCH:
      return {
        ...state,
        isSearched: action.value,
      }

    default:
      return state;
  }
}

export { mainReducer, mainInitState }