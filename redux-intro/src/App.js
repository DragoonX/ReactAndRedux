import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter"
function App() {
  return (
    <div>
      <Counter></Counter>
      <IncreaseCounter></IncreaseCounter>
      <DecreaseCounter></DecreaseCounter>
      <IncreaseByTwoCounter></IncreaseByTwoCounter>
    </div>
  );
}

export default App;
