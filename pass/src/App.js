import './App.css';

function App() {

  // let value = "Megazby";
  // let name = "zbyslav";
  // name = name.match(/(.{1,2})/g);

  // function firstStap (){
  //   value = value.substr(3, value.length) + value.substr(0, 3);
  //   secondStap();
  //   return value;
  // }

  // function secondStap(){
  //   value += value.length;
  //   thirdStap();
  //   return value;
  // }

  // function thirdStap(){
  //   value = value.replace("e", "3");
  //   fourthSrap();
  //   return value;
  // }

  // function fourthSrap(){
  //     value = value.substring(0, 2) + name[0] + value.substring(2);
  //     value = value.substring(0, 6) + name[1] + value.substring(6);
  //     value = value.substring(0, 10) + name[2] + value.substring(10);
  //     value = value.substring(0, 14) + name[3] + value.substring(14);
  // }

  // console.log(firstStap());

  function myResult(){

  }

  return (
    <div className="App">
      <div className="data">
        <div className="inputs">
          {/* <p className="input-text"> */}
            <input className="input" type="input" placeholder="For what"></input>
            {/* For what */}
          {/* </p> */}
        </div>
        <div className="inputs">
          {/* <p className="input-text"> */}
            <input className="input" type="input" placeholder="Login"></input>
          {/* Login */}
          {/* </p> */}
        </div>
      </div>
      <div className="buttons">
        <button className="button-create" onClick={myResult}>Create</button>
        <button className="button-clear">Clear</button>
      </div>
      <div class="results">
        <input className="result" placeholder="Result" readOnly></input>
      </div>
    </div>
  );
}

export default App;
