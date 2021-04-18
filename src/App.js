import './App.css';
import React, {useReducer} from 'react';
import Counting from './useStateHooks/Counting';
import UseStateObject from './useStateHooks/UseStateObject';
import UseStateArray from './useStateHooks/UseStateArray';
import ClassCounter from './useEffectHook/ClassCounter';
import HookCounter from './useEffectHook/HookCounter';
import MouseContainer from './useEffectHook/MouseContainer';
import DataFetching from './useEffectHook/FetchingData/DataFetching';
import ComponentC from './useContextHook/ComponentC';
import CounterOne from './useReducerHook/CounterOne';
import CounterTwo from './useReducerHook/CounterTwo';
import MultipleUseReducers from './useReducerHook/MultipleUseReducers';
import CombineComponents from './useReducerHook/useReduceruseContext/CombineComponents';
import DataFetchingWithUseStateHook from './useReducerHook/DataFetchingWithUseStateHook';
import DataFetchingWithUseReducerHook from './useReducerHook/DataFetchingWithUseReducerHook';
import UseMemo from './useMemoHook/UseMemo';
import FocusInput from './useRefHook/FocusInput';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

// useReducer + useContext
export const GlobalContext = React.createContext();
const initialState = 0;
const reducer = (currentState, action) => {
  // return newState ; here newState is depending upon the action
  switch(action) {
      case 'increment':
          return currentState + 1;
      case 'decrement':
          return currentState - 1;
      case 'reset':
          return initialState;
      default:
          return currentState;
  }

  // so every time we return a newState depending upon the action
};

function App() {

  const [newState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
    <h1> Lets Begin Hooks in React </h1>
      <h3> Counting with UseState </h3>
      <Counting />

      <h3> Object update with UseState </h3>
      <UseStateObject />

      <h3> Array update with UseState </h3>
      <UseStateArray />

      {/*<h3> ComponentDidMount and ComponentDidUpdate in ClassComponent</h3>*/}
      {/*<ClassCounter /> */}

      <h3> useEffect in functional Component</h3>
      {/*<HookCounter/>*/}
      {/*<MouseContainer /> */} 
      <DataFetching />

      <h1> useContext Hook </h1>
      <UserContext.Provider value='Shohag'>
        <ChannelContext.Provider value='ReactChannel'>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <h1> useReducer Hook </h1>
      <CounterOne />
      <CounterTwo />
      <h3> Multiple UseReducers </h3>
      <MultipleUseReducers />

      <h1>UseReducer + useContext Hook</h1>
      <GlobalContext.Provider value={{newState:newState, dispatch:dispatch}}>
        <CombineComponents />
      </GlobalContext.Provider>

      <h1>DataFetchingWith : UseStateHook</h1>
      <DataFetchingWithUseStateHook />

      <h1>DataFetchingWith : UseReducerHook</h1>
      <DataFetchingWithUseReducerHook />

      <h1>UseMemo Hook</h1>
      <UseMemo />

      <h1>UseRef Hook</h1>
      <FocusInput />
    </div>
  );
}

export default App;
