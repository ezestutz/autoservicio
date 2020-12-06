import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavButtons = ({ backLink }) => {
  return (
    <div className="d-flex justify-content-center my-5">
      <Link to="/pagar">
        <Button size="lg" variant="success" className="px-3 mr-4">
          Pagar
        </Button>
      </Link>
      <Link to={backLink}>
        <Button size="lg" variant="danger" className="ml-4">
          Cancelar
        </Button>
      </Link>
    </div>
  );
};

export default NavButtons;
