import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import NavbarHome from "./NavbarHome";
import { useState } from "react";




const Home = () => {

  const [search, setSearch] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();

    /* qui fa una fetch per cercare la sala
    Endpoint da definire nel backend */
  }

  return (
    <>


      <NavbarHome />


      <Container fluid className="d-flex justify-content-center align-items-center hero-section" >

        <Row className="text-center">
          <Col xs={12} >
            <h1 className="">Cerca subito la sala <br /> che fa per te!</h1>
          </Col>

          <Col xs={12} >
            <p>Offriamo una lunga lista di sale prove e registrazione</p>
          </Col>

          <Col xs={12} >

            <Form onSubmit={handleSubmit}>
              <FormControl
                className="w-25 mx-auto mb-2"
                placeholder="Inserisci zona..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <Button variant="outline-light"  >
                Cerca
              </Button>
            </Form>



          </Col>
        </Row>


      </Container>

    </>
  )
}

export default Home;



