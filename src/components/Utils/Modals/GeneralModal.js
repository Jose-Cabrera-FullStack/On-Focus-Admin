import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function GeneralModal(props) {
  return(
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.message}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerar</Button>
        </Modal.Footer>
      </Modal>
      )
}

export default GeneralModal;