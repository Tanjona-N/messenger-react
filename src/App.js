import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBBtn, MDBContainer, MDBScrollbar } from "mdb-react-ui-kit";
import Chat from "./chat/Chat";

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Chat />
      <MDBContainer className="mt-5">
        <h1>Hello, world!</h1>
        <MDBBtn color="primary">Click me</MDBBtn>
      </MDBContainer>
      <h1 className="text-danger fw-bold">Hello, world!</h1>
      <p className="pb-3 pt-3">
        lorem ipsum dolr lorem ipsum dolr lorem ipsum dolr
      </p>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
