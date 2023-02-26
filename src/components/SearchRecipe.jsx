import React, { Fragment, useState } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";

const SearchRecipe = () => {
  const [ingradients, setIngradients] = useState('');
  const [dish, setDish] = useState('');

  const searchEngine = (ingradients, dish) => {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingradients}`;
    // console.log(url);
    fetch(url, { method: 'GET'})
      .then(response => response.json())
      .then(json => console.log(json));
  };

  return (
    <Fragment>
      <Form inline="true">
        <FormGroup>
          <FormLabel>Ingradients</FormLabel>
          {' '}
          <FormControl
            type="text"
            // value={ingradients}
            placeholder="garlic, chicken"
            onChange={(e) => {setIngradients(e.target.value)}} />
        </FormGroup>
        <br/>
        <FormGroup>
          <FormLabel>Dish</FormLabel>
          {' '}
          <FormControl
            type="text"
            // value={dish}
            placeholder="adobo"
            onChange={(e) => {setDish(e.target.value)}} />
        </FormGroup>
        <br/>
        <Button onClick={() => {searchEngine(ingradients, dish)}}>Submit</Button>
      </Form>
    </Fragment>
  );
};

export default SearchRecipe;