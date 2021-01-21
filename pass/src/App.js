import './App.css';
import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [userName, setName] = useState('');

  let value = title;
  let name = userName;
  name = name.match(/(.{1,2})/g);

  function firstStap (){
    value = value.substr(3, value.length) + value.substr(0, 3);
    secondStap();
    return value;
  }

  function secondStap(){
    value += value.length;
    thirdStap();
    return value;
  }

  function thirdStap(){
    value = value.replace("e", "3");
    fourthSrap();
    return value;
  }

  function fourthSrap(){
    value = value.substring(0, 2) + name[0] + value.substring(2);
    value = value.substring(0, 6) + name[1] + value.substring(6);
    value = value.substring(0, 10) + name[2] + value.substring(10);
    value = value.substring(0, 14) + name[3] + value.substring(14);
    // return value;
  }

  return (
    <div className="App">
      <div className="data">
        <div className="inputs">
            <input className="input" onChange={event => setTitle(event.target.value)} type="input" placeholder="For what"></input>
        </div>
        <div className="inputs">
            <input className="input" onChange={event => setName(event.target.value)} type="input" placeholder="Login"></input>
        </div>
      </div>
      <div className="buttons">
        <button type="button" className="button-create">Create</button>
        <button className="button-clear">Clear</button>
      </div>
      <div className="results">
        <input className="result" placeholder="Result" value={firstStap(value)} readOnly></input>
      </div>
    </div>
  );
}

export default App;
