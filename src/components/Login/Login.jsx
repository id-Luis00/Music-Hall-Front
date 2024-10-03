import { Button, Col, Modal, Row } from "react-bootstrap";



const Login = ({show, handleClose}) => {

    return (
        // qui inseriro il modale per il login

        <Modal size="xl" show={show} onHide={handleClose}>
          <Row>
            <Col md={6}>

        <Modal.Header>
          <Modal.Title className="me-auto">Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* qui inserirò il form per il login: email/username, password */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
            </Col>

            <Col md={6}>
            <p className="d-flex justify-content-center m-auto">immagine...</p>
            </Col>
          </Row>
      </Modal>

       
    )
}

export default Login;