import React from 'react';
import './App.css';
import Repeater from "./components/assigment-2/Repeater/Repeater";
import Sort from "./components/assigment-1/Sorter/Sort"
import {stocks} from "./components/particles/test-data";

const App = () => {
  const data = [{ id:1001 , name: 'A' }, { id:1002 , name: 'B' }, {id:1003 , name: 'C' }];
  return (
    <React.Fragment>
      <h3>Repeater </h3>
      <div data-testid="not-empty" className="App">
        <Repeater option={data}></Repeater>
      </div>
      <div>
        <h4>Sorter </h4>
        <Sort options={stocks}  sortByOptions={["-price"]}></Sort>
      </div>
    </React.Fragment>

  );
}
export default App;