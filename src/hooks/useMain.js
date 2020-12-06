import { useContext } from 'react';
import { context } from '../context/ContextProvider';
import * as mainActions from '../context/actions/mainActions';

const useMain = () => {
  const { state, dispatch } = useContext(context);

  const { isFriendSearching, userSelected } = state.mainReducer;
  
  const toggleTypeData = (value) => {
    mainActions.toggleTypeData(dispatch, value)
  }

  const setUserSelected = (value) => {
    mainActions.setUserSelected(dispatch, value)
  }

  return {
    isFriendSearching,
    userSelected,
    toggleTypeData,
    setUserSelected,
  }
}

export default useMain;