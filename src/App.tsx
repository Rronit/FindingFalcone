import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { SelectDestinationWrapper } from "./Components/SelectDestinationWarpper";

function App() {
  return (
    <div className="App">
      <Header />
      <SelectDestinationWrapper />
    </div>
  );
}

export default App;
