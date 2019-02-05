import React from "react";
import SelectItem from "./SelectItem";
import { Hashrouter as Router, Route } from "react-router-dom";

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
