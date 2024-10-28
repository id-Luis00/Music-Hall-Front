import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import SearchForm from './SearchForm'
import { useEffect } from "react";
import { getSale } from "../redux/actions";
import { useParams } from "react-router-dom";
import CardComp from "./CardComp";





const ResultPage = () => {

    /* const [filteredSala, setFilteredSala] = useState([]); */

    const query = useSelector(state => state.search.search)
    const sale = useSelector(state => state.sale.saleData)
    const dispatch = useDispatch();
    const params = useParams();

    console.log("SEARCH FIELD", query)

    useEffect(() => {
        dispatch(getSale(params.query))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.query])

    return (
        <Container fluid className="p-3  text-light position-relative">
            <Row className="pt-3 m-0   ">
                <Col sm={12} md={3} xl={2} className="border border-start-0 border-bottom-0 rounded p-3  filter-sticky">
                    <p className="h3 text-center">Filtri</p>
                    <hr className="bg-light" />
                    <p className="h5 text-center">Ordina per</p>

                    <Button variant="outline-light" className="w-100 my-2 text-start" onClick={e => e.preventDefault()}>
                        Nome
                    </Button>
                    <Button variant="outline-light" className="w-100 my-2 text-start" onClick={e => e.preventDefault()}>
                        Prezzo
                    </Button>
                    <Button variant="outline-light" className="w-100 my-2 text-start" onClick={e => e.preventDefault()}>
                        Regione
                    </Button>
                    <Button variant="outline-light" className="w-100 my-2 text-start" onClick={e => e.preventDefault()}>
                        Comune
                    </Button>
                    <Button variant="outline-light" className="w-100 my-2 text-start" onClick={e => e.preventDefault()}>
                        Capienza
                    </Button>

                    <SearchForm />
                </Col>

                <Col xs={12} sm={12} md={9} xl={10}>
                    <p className="h2 text-start ps-3 pt-2">Risultati - {params.query ? params.query : "nessun risultato"}</p>

                    <Row className="g-4 mt-2">
                        {sale ? sale.map(sala => (
                            {/* < CardSala
                                key={sala.id}
                                id={sala.id}
                                nome={sala.nomeSala}
                                prezzo={sala.prezzoOrario}
                                regione={sala.regione}
                                comune={sala.comune}
                                imageURL={sala.imageURL}
                            /> */},
                            <CardComp
                                key={sala.id}
                                id={sala.id}
                                nomeSala={sala.nomeSala}
                                imageURL={sala.imageURL}
                                indirizzo={sala.indirizzo}
                                prezzo={sala.prezzoOrario}
                                regione={sala.regione}
                                comune={sala.comune}
                            />
                        )) : (
                            <h1 className="text-center">Nessuna sala trovata</h1>
                        )}
                    </Row>
                </Col>
            </Row>

        </Container>


    )
}

export default ResultPage;