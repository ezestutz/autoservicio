import React from "react";
import { Button, Card, Row, Container, Image } from "react-bootstrap";

const ProductDetails = ({ product }) => {
  return (
    <Container>
      <Card className="p-3">
        <div className="text-center">
          <Image
            src={product.img}
            roundedCircle
            thumbnail
            style={{ width: "10%", minWidth: 200 }}
          />
        </div>
        <Container className="my-5">
          <h3 className="text-center font-weight-bold">
            Producto: {product.label}
          </h3>
          <Container
            className="justify-content-center mt-5"
            style={{ maxWidth: 500 }}
          >
            <h4 className="font-weight-bold my-2">Precio: ${product.price}</h4>
            <h5>{product.details}</h5>
          </Container>
        </Container>
        <div className="text-center mt-3">
          <Button size="lg" variant="info">
            Añadir al Carrito
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default ProductDetails;
