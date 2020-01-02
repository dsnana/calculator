import React from 'react';
import NeonButton from "./components/NeonButton";
import NumericButton from "./components/NumericButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <NeonButton name={"Submit"}/> */}
      <NumericButton name7={"7"}/>
      <NumericButton name8={"8"}/>
      <NumericButton name9={"9"}/>
      <NumericButton name4={"4"}/>
      <NumericButton name5={"5"}/>
      <NumericButton name6={"6"}/>
      <NumericButton name1={"1"}/>
      <NumericButton name2={"2"}/>
      <NumericButton name3={"3"}/>
      <NumericButton name0={"0"}/>

    </div>
    
  );
}

export default App;