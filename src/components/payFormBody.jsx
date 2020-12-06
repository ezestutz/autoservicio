import React from "react";
import Joi from "joi-browser";
import { Container, Form, Modal, Button } from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import MyForm from "./common/form";

class PayFormBody extends MyForm {
  state = {
    modalConfirmarVisible: false,
    confirmAlertVisible: false,
    data: { titular: "", tarjeta: "", expira: "", codigo: "" },
    errors: {},
  };

  schema = {
    titular: Joi.string().max(255).required().label("Nombre del titular"),
    tarjeta: Joi.string()
      .min(0)
      .max(16)
      .regex(/[0-9]/)
      .required()
      .label("Número de tarjeta"),
    expira: Joi.string().max(10).required().label("Fecha de expiración"),
    codigo: Joi.string()
      .min(0)
      .max(3)
      .regex(/[0-9]/)
      .required()
      .label("Código de seguridad"),
  };

  doSubmit = () => {
    this.setState({ modalConfirmarVisible: true });
  };

  render() {
    return (
      <Container>
        <SweetAlert
          show={this.state.confirmAlertVisible}
          success
          title="¡Compra Confirmada!"
          onConfirm={() => (window.location.href = "/")}
          confirmBtnText="Volver a inicio"
        >
          ¡Gracias por tu compra!
        </SweetAlert>
        <Modal show={this.state.modalConfirmarVisible}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmar compra</Modal.Title>
          </Modal.Header>
          <Modal.Body>¿Realizar compra por: ${this.props.total}?</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ modalConfirmarVisible: false })}
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                this.setState({
                  modalConfirmarVisible: false,
                  confirmAlertVisible: true,
                })
              }
            >
              ¡Si, comprar!
            </Button>
          </Modal.Footer>
        </Modal>
        <Form onSubmit={this.handleSubmit}>
          {this.renderInput("titular", "Nombre del titular")}
          {this.renderInput("tarjeta", "Número de tarjeta")}
          {this.renderInput("expira", "Fecha de expiración", "date")}
          {this.renderInput("codigo", "Código de seguridad")}
          <div className="d-flex justify-content-center mt-5">
            {this.renderButton("Pagar")}
          </div>
        </Form>
      </Container>
    );
  }
}

export default PayFormBody;
