import { useContext } from 'react';
import { context } from '../context/ContextProvider';
import * as mainActions from '../context/actions/mainActions';

const useMain = () => {
  const { state, dispatch } = useContext(context);

  const {
    isFriendSearching,
    userSelected,
    patalogiasData,
    perrosData,
    personasData,
    isLoading
  } = state.mainReducer;
  
  const toggleTypeData = (value) => {
    mainActions.toggleTypeData(dispatch, value)
  }

  const setUserSelected = (value) => {
    mainActions.setUserSelected(dispatch, value)
  }

  const loadDataCSV = (type, value) => {
    mainActions.onLoadData(dispatch, type, value)
  }

  const toggleLoading = (value) => {
    mainActions.setIsLoading(value);
  }

  return {
    isFriendSearching,
    userSelected,
    patalogiasData,
    perrosData,
    personasData,
    toggleTypeData,
    setUserSelected,
    loadDataCSV,
    isLoading,
    toggleLoading,
  }
}

export default useMain;