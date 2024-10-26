import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import SearchForm from "./SearchForm";



/* 
- creare un input per cercare le sale in base alla zona -> quindi fare una fetch e filtrare per zona (query)
- inserire il risultato della fetch dentro lo stato redux -> sale, saleReducer, ecc...
- una volta effettuata la fetch bisogna far generare i risultati 
- creare un componente che faccia comparire tutti i risultati della fetch -> ResultComponent? oppure fare tutto nella home. no.

*/

const Home = () => {


    return (
        <>
            <Container fluid className="p-0 m-0">
                <Row className="g-0" >

                    <Col
                        sm={12}
                        lg={4}
                        className="d-flex flex-column align-items-center justify-content-center text-light py-5"
                        style={{

                            padding: "3rem",
                        }}
                    >
                        <div className="text-center">
                            <h1 className="display-2 mb-3" style={{ fontWeight: "700", letterSpacing: "2px" }}>
                                Music-Hall
                            </h1>
                            <p className="fs-4">Inizia la tua ricerca ora e trova la sala perfetta</p>
                        </div>

                        <SearchForm />
                    </Col>

                    <Col xs={12} sm={10} md={12} lg={8} className="d-none d-md-block">
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
        </>

    )
}



export default Home;