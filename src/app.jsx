import React, { Fragment } from "react";
import SearchRecipe from "./components/SearchRecipe";

import "./styles/styles.css";

const App = () => {
  return (
    <Fragment>
      <h2>Recipe Finder</h2>
      <SearchRecipe />
    </Fragment>
  );
};

export default App;