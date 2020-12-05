import React from 'react';
import './App.css';
import Repeater from "./components/assigment-2/Repeater/Repeater";
import Sorter from "./components/assigment-1/Sorter/Sorter"

const App = () => {
  const data = [{ id:1001 , name: 'A' }, { id:1002 , name: 'B' }, {id:1003 , name: 'C' }];

  const stocks = [
    { id: 12, name: 'Tesla', dor: '1998-10-05', price: 1001 },
    { id: 123, name: 'IBM', dor: '1993-02-15', price: 1002 },
    { id: 45, name: 'Google', dor: '1996-01-31', price: 1003 },
    { id: 67, name: 'Microsoft', dor: '1998-04-09', price: 1004 },
    { id: 580, name: 'Microsoft', dor: '1998-04-09', price: 1004 },
    { id: 770, name: 'Microsoft', dor: '1998-04-09', price: 1004 },
    { id: 670, name: 'Microsoft', dor: '1998-04-09', price: 1004 },
    { id: 89, name: 'Amazon', dor: '1996-07-08', price: 1006 },
    { id: 34, name: 'Facebook', dor: '1994-09-12', price: 1007 },
    { id: 234, name: 'Blake', dor: '2000-01-01', price: 1008 }
];

  return (
    <React.Fragment>
      <h3>Repeater </h3>
      <div data-testid="not-empty" className="App">
        <Repeater option={data}></Repeater>
      </div>
      <div>
        <h4>Sorter </h4>
        <Sorter options={stocks} by1={"price"} by2={"id"}></Sorter>
      </div>
    </React.Fragment>

  );
}
export default App;