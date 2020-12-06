import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PayHeader = ({ total }) => {
  return (
    <Card className="my-5 px-5 py-3 shadow">
      <Row className="justify-content-around align-middle">
        <div className="text-center my-auto">
          <h3>Total a pagar:</h3>
          <h2 className="font-weight-bold text-left">$ {total}</h2>
        </div>
        <div className="d-flex justify-content-center my-auto">
          <Button size="md" variant="success" className="px-2 mr-1">
            Detalles
          </Button>
          <Link to="/productos">
            <Button size="md" variant="danger" className="px-2 ml-1">
              Cancelar
            </Button>
          </Link>
        </div>
      </Row>
    </Card>
  );
};

export default PayHeader;
