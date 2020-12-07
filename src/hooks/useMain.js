import { useState, useContext, useEffect } from 'react';
import { context } from '../context/ContextProvider';
import * as mainActions from '../context/actions/mainActions';

const useMain = () => {
  const { state, dispatch } = useContext(context);

  const [ similitudPersonaPerros, setSimilitudPersonaPerros ] = useState([])

  const {
    isFriendSearching,
    userSelected,
    patalogiasData,
    perrosData,
    personasData,
    isLoading,
    isSearched,
  } = state.mainReducer;

  useEffect( () => {
    if(userSelected) {
      similitudEntrePersonasPerros()
    }
  }, [userSelected])
  
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

  const toggleSearch = (value) => {
    mainActions.setIsSearched(dispatch, value);
  }

  const similitudEntrePersonasPerros = () => {
    let arrayPerrosSimilitud = []

    let usuario = userSelected.slice(1);
    let jauria = perrosData.slice(1);

    jauria.map( (perro) => { 
      let dataPerro = {};
      let puntoABData = [];
      let perroTemp = perro.slice(1)
      dataPerro.name = perro[0];
      
      for (let i = 0; i < perroTemp.length; i++) {
        puntoABData.push(perroTemp[i] * usuario[i])
      }

      dataPerro.AB = puntoABData.reduce((acc, current) => Number.parseInt(acc) + Number.parseInt(current));
      dataPerro.magnitudA = Math.sqrt(perroTemp.reduce((acc, current) => Number.parseInt(acc) + Math.pow(Number.parseInt(current), 2)))
      dataPerro.magnitudB = Math.sqrt(usuario.reduce((acc, current) => Number.parseInt(acc) + Math.pow(Number.parseInt(current), 2)))
      dataPerro.similitud = dataPerro.AB / (dataPerro.magnitudA * dataPerro.magnitudB);

      dataPerro.data = perro;

      arrayPerrosSimilitud.push(dataPerro);
    })
    arrayPerrosSimilitud.sort((a, b) => b.similitud - a.similitud)
    setSimilitudPersonaPerros(arrayPerrosSimilitud)
  }

  return {
    isFriendSearching,
    userSelected,
    patalogiasData,
    perrosData,
    isSearched,
    personasData,
    similitudPersonaPerros,
    toggleTypeData,
    setUserSelected,
    loadDataCSV,
    isLoading,
    toggleLoading,
    toggleSearch,
  }
}

export default useMain;