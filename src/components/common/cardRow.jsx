import React from "react";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const CardRow = ({ options }) => {
  const { width } = useWindowDimensions();
  return (
    <Row className="mx-0 px-5 justify-content-between">
      {options.map((option) => (
        <div
          key={options.indexOf(option)}
          className={width < 1001 ? "col-sm-6" : "col-sm-3"}
        >
          <Link
            to={`/productos/${
              option.category
                ? option.category + "/" + option.name
                : option.name
            }`}
            className="opcionLink mt-4 text-uppercase"
          >
            <Card className="opcionCard text-center my-3 shadow">
              <img
                variant="top"
                className="text-center"
                alt={option.name}
                src={option.img}
              />
              <h4 className="font-weight-bold">{option.label}</h4>
            </Card>
          </Link>
        </div>
      ))}
    </Row>
  );
};

export default CardRow;
