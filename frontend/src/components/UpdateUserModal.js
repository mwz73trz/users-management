import React from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import userAPI from "../api/userAPI";

const UpdateUserModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    userAPI.updateUser(props.user.id, e.target).then(
      (result) => {
        alert(result);
        props.setUpdated(true);
      },
      (error) => {
        alert("Failed to Update User!");
      }
    );
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update User Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="first_name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    required
                    defaultValue={props.user.first_name}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="last_name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    required
                    defaultValue={props.user.last_name}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    required
                    defaultValue={props.user.username}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    required
                    defaultValue={props.user.email}
                    placeholder=""
                  />
                </Form.Group>
                <p></p>
                <Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateUserModal;
