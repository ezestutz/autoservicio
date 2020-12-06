import React, { Component } from "react";
import logo from "../assets/img/logo.png";
import { Container } from "react-bootstrap";
import "../assets/css/Pay.css";
import PayForm from "./payForm";
import PayHeader from "./payHeader";

class Pay extends Component {
  state = { total: 300 };

  render() {
    return (
      <div className="pagar">
        <img className="portadaLogo" src={logo} alt="Logo" />
        <Container className="py-5">
          <PayHeader total={this.state.total} />
          <PayForm total={this.state.total} />
        </Container>
      </div>
    );
  }
}

export default Pay;
