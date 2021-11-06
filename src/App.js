import './App.scss';
import Panelbox from './components/Panelbox';
import { mainReducer, mainInitialState} from './state/mainState';
import { MainContext } from './state/contextBase';
import React,{useReducer} from 'react';
function App() {
  const [main,dispatch]=useReducer(mainReducer,mainInitialState)
  return (
    <div className="App">
      <MainContext.Provider value={{main,dispatch}}>
        <Panelbox></Panelbox>
      </MainContext.Provider>
       
    </div>
  );
}

export default App;
