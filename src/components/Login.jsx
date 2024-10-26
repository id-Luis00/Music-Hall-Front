import { useState } from "react";
import { Button, Carousel, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedInAction } from "../redux/actions";

const Login = () => {

    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/auth/utenti/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            )
            if (response.ok) {
                const data = await response.json();
                dispatch(isLoggedInAction(data.token))

                // salvo il token nel local storage
                /*  localStorage.setItem("token", data.token) */

                console.log(data)
                alert("Login Effettuato!!! controlla i log :)")
                navigate("/")
            } else throw new Error();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container fluid className="body-login text-login">
            <Row className="justify-content-center">
                <Col
                    sm={12}
                    lg={4}
                    className="d-flex flex-column align-items-center justify-content-center text-light py-5"
                    style={{
                        padding: "3rem",
                    }}
                >
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                className="text-login"
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => SetEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => SetPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="outline-light" type="submit" className="w-100">
                            Submit
                        </Button>

                        <hr />
                        <h4>Non sei ancora registrato? Registrati subito!</h4>
                        <Link className="linkNavigator" to={"/auth/register"}>clicca qui!</Link >
                    </Form >
                </Col>
                <Col xs={12} sm={10} md={12} lg={8} className="">
                    <Carousel fade>
                        <Carousel.Item>
                            <Image
                                className="w-100 rounded-4"
                                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Sala prove"
                            />
                            <Carousel.Caption className="text-start" style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "10px", padding: "1rem" }}>
                                <h3 className="h1">Trova la tua Sala Perfetta</h3>
                                <p className="fs-3">Sfoglia sale di prova e registrazione nella tua zona. Spazi attrezzati per musicisti e band di ogni livello.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="w-100 rounded-4"
                                src="https://images.unsplash.com/photo-1507245921392-e902673ca772?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Contatta le sale"
                            />
                            <Carousel.Caption className="text-start" style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "10px", padding: "1rem" }}>
                                <h3 className="h1">Contatta le Sale Facilmente</h3>
                                <p className="fs-3">Trova la sala giusta e contatta direttamente il proprietario per organizzare le tue sessioni.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="w-100 rounded-4"
                                src="https://images.unsplash.com/photo-1581378576936-9b10bb143de8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Pubblica le tue sale"
                            />
                            <Carousel.Caption className="text-start" style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "10px", padding: "1rem" }}>
                                <h3 className="h1">Pubblica le Tue Sale</h3>
                                <p className="fs-3">Registrati come proprietario, aggiungi le tue sale e rendile visibili ai musicisti in cerca di uno spazio dove suonare.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>

            </Row>





        </Container>
    )
}




export default Login;