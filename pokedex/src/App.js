import React from "react";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => (
  <Routes>
    <Route exact path="/" render={(props) => <Pokedex {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    />
  </Routes>
);

export default App;
