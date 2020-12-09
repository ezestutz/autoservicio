import React, { Component } from "react";
import { Card } from "react-bootstrap";
import PayFormBody from "./payFormBody";
import PayFormHeader from "./payFormHeader";

class PayForm extends Component {
  state = {};
  render() {
    return (
      <Card className="px-5 py-3 mb-5 shadow">
        <PayFormHeader />
        <PayFormBody />
      </Card>
    );
  }
}

export default PayForm;
