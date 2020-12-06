import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ name, label, value, error, ...rest }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...rest}
        value={value}
        id={name}
        name={name}
        placeholder={label}
        isValid={value && !error}
        isInvalid={error}
      ></Form.Control>
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;
