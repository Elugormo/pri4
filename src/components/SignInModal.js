import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
export const SignInModal = ({ show, hide }) => {
  return (
    <div>
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="post" action="/index.html">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Age</Form.Label>
              <Form.Control placeholder="Your age" required type="number" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Level</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Novice</option>
                  <option>Master</option>
                  <option>Grandmaster</option>
                  <option>International Grandmaster</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="radio" label="Male" />
              <Form.Check type="radio" label="Female" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
          <Button variant="primary" onClick={hide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
