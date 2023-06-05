/* eslint-disable no-eval */
import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function clickHandler(e) {
    if (res === "Error") {
      setRes(e.target.name);
    } else {
      setRes(res + e.target.name);
    }
  }

  function backspace() {
    if (res === "Error") {
      setRes("");
    } else if (res) {
      setRes(res.slice(0, -1));
    }
  }
  function clear() {
    setRes("");
  }
  function result() {
    try {
      if (res !== "Error") {
        setRes(eval(res).toString());
      }
    } catch (error) {
      setRes("Error");
    }
  }
  return (
    <div>
      <h1 className="heading">Calculator</h1>
      <div className="calc-app">
        <form>
          <input type="text" value={res} ref={inputRef} />
        </form>

        <div className="keypad">
          <button id="clear" onClick={clear}>
            Clear
          </button>
          <button id="backspace" onClick={backspace}>
            {" "}
            C
          </button>
          <button name="+" onClick={clickHandler}>
            +
          </button>
          <button name="7" onClick={clickHandler}>
            7
          </button>
          <button name="8" onClick={clickHandler}>
            8
          </button>
          <button name="9" onClick={clickHandler}>
            9
          </button>
          <button name="-" onClick={clickHandler}>
            -
          </button>
          <button name="4" onClick={clickHandler}>
            4
          </button>
          <button name="5" onClick={clickHandler}>
            5
          </button>
          <button name="6" onClick={clickHandler}>
            6
          </button>
          <button name="*" onClick={clickHandler}>
            &times;
          </button>
          <button name="1" onClick={clickHandler}>
            1
          </button>
          <button name="2" onClick={clickHandler}>
            2
          </button>
          <button name="3" onClick={clickHandler}>
            3
          </button>
          <button name="/" onClick={clickHandler}>
            /
          </button>
          <button name="0" onClick={clickHandler}>
            0
          </button>
          <button name="." onClick={clickHandler}>
            .
          </button>
          <button id="result" onClick={result}>
            Result
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
