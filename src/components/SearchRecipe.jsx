import React, { Fragment } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";

const SearchRecipe = () => {
  return (
    <Fragment>
      <Form inline="true">
        <FormGroup>
          <FormLabel>Ingradients</FormLabel>
          {' '}
          <FormControl type="text" placeholder="garlic, chicken"/>
        </FormGroup>
        {' '}
        <br/>
        <FormGroup>
          <FormLabel>Dish</FormLabel>
          {' '}
          <FormControl type="text" placeholder="adobo" />
        </FormGroup>
        {' '}
        <br/>
        <Button>Submit</Button>
      </Form>
    </Fragment>
  );
};

export default SearchRecipe;