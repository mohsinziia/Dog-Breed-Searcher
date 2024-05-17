import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import BreedInfo from "./components/BreedInfo";

function App() {
  return (
    <>
      <h1>Dog Searcher</h1>
      <Form />
      <BreedInfo />
    </>
  );
}

export default App;
