import React from "react";
import AddItem from "./AddItem";
import SelectItem from "./SelectItem";
const App = () => {
  return (
    <div className="container">
      <div className="row text">
        <h1>App heading </h1>
      </div>
      <SelectItem />
    </div>
  );
};

export default App;
