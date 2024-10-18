import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setResult(eval(input)); 
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="screen">
          <div className="result">{result}</div>
          <div className="input">{input}</div>
        </div>
        <div className="buttons">
          <button className="action-btn" onClick={handleClear}>
            AC
          </button>
          <button className="action-btn" onClick={handleDelete}>
            DEL
          </button>
          <button className="ev" onClick={() => handleClick("/")}>/</button>
          <button className="ev" onClick={() => handleClick("*")}>*</button>
          <button className="ev"  onClick={() => handleClick("7")}>7</button>
          <button className="ev" onClick={() => handleClick("8")}>8</button>
          <button className="ev" onClick={() => handleClick("9")}>9</button>
          <button className="ev" onClick={() => handleClick("+")}>+</button>
          <button className="ev" onClick={() => handleClick("4")}>4</button>
          <button className="ev" onClick={() => handleClick("5")}>5</button>
          <button className="ev" onClick={() => handleClick("6")}>6</button>
          <button className="ev" onClick={() => handleClick("-")}>-</button>
          <button className="ev" onClick={() => handleClick("1")}>1</button>
          <button className="ev" onClick={() => handleClick("2")}>2</button>
          <button className="ev" onClick={() => handleClick("3")}>3</button>
          <button className="ev" onClick={() => handleClick(".")}>.</button>
          <button className="equal-btn" onClick={handleEqual}>
            =
          </button>
          <button className="ev" onClick={() => handleClick("0")}>0</button>
        </div>
      </div>
    </div>
  );
};

export default App;