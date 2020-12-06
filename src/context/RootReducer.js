import { mainReducer, mainInitState } from './reducers/mainReducer';

const combineReducers = (slices) => (prevState, action) =>
	Object.keys(slices).reduce(
		(nextState, nextProp) => ({
			...nextState,
			[nextProp]: slices[nextProp](prevState[nextProp], action),
		}),
		prevState
	);


  const rootReducer = combineReducers({
    mainReducer,
  })

  const states = {
    mainReducer: mainInitState,
  }

  export { rootReducer, states };