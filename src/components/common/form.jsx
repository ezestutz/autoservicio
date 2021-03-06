import React, { Component } from "react";
import Joi from "joi-browser";
import { Button } from "react-bootstrap";
import Input from "./input";

class MyForm extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const result = Joi.validate(this.state.data, this.schema, options);

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label, invalid = true) {
    return (
      <Button
        disabled={this.validate() || invalid}
        variant="success"
        type="submit"
        className="px-5"
      >
        {label}
      </Button>
    );
  }

  renderInput(name, label, maxLength = 255, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        maxLength={maxLength}
        error={errors[name]}
        onChange={this.handleChange}
        type={type}
      />
    );
  }
}

export default MyForm;
