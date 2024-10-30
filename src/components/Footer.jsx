import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3 ">
            <Container fluid>
                <Row className="text-center">
                    <Col>
                        <p className="mb-0">© 2024 MusicHall. Tutti i diritti riservati.</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Link to={"/privacy"} className="text-light me-3 text-center">Privacy Policy</Link>
                        <Link to={"/terms"} className="text-light">Termini e Condizioni</Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
