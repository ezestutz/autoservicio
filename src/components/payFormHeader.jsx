import React from "react";
import { Row } from "react-bootstrap";
import tarjetas from "../assets/img/tarjetas.png";
import tarjetas2 from "../assets/img/tarjetas2.png";

const PayFormHeader = () => {
  return (
    <div className="payFormHeader">
      <h3>Formas de pago</h3>
      <Row className="justify-content-around align-items-center my-5">
        <img
          className="mb-3 col-sm-4"
          src={tarjetas}
          alt="Tarjetas"
          style={{ maxWidth: 211, maxHeight: 107, height: "auto" }}
        />
        <img className="mb-3 col-sm-8" src={tarjetas2} alt="Credito y Débito" />
      </Row>
    </div>
  );
};

export default PayFormHeader;
