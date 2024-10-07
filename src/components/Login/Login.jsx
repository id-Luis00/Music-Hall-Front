import { Button, Col, Form, Modal, Row } from "react-bootstrap";



// eslint-disable-next-line react/prop-types
const Login = ({ show, handleClose }) => {



  return (
    // qui inseriro il modale per il login

    <Modal size="lg" show={show} onHide={handleClose}>
      <Row>

        <Col md={6}>
          <p className="d-flex justify-content-center m-auto">immagine...</p>
        </Col>
        <Col md={6}>

          {<Modal.Header>
            <Modal.Title className="mx-auto">Login</Modal.Title>
          </Modal.Header>}

          <Modal.Body className="">
            {/* qui inserirò il form per il login: email/username, password */}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Agree with terms..." />
              </Form.Group>
            </Form>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Col>
      </Row>
    </Modal>


  )
}

export default Login;