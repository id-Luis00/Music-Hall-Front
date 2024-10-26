import { Col, Image, Row } from "react-bootstrap";
import UserIcon from '../assets/user-svgrepo.svg'



const CollegamentiProfile = () => {

    const collegamenti = [
        {
            nome: "Marco",
            cognome: "Rossi",
            email: "marco.rossi@example.com"
        },
        {
            nome: "Giulia",
            cognome: "Bianchi",
            email: "giulia.bianchi@example.com"
        },
        {
            nome: "Luca",
            cognome: "Verdi",
            email: "luca.verdi@example.com"
        },
        {
            nome: "Anna",
            cognome: "Neri",
            email: "anna.neri@example.com"
        },
        {
            nome: "Paolo",
            cognome: "Ferrari",
            email: "paolo.ferrari@example.com"
        },
        {
            nome: "Elena",
            cognome: "Moretti",
            email: "elena.moretti@example.com"
        },
        {
            nome: "Davide",
            cognome: "Galli",
            email: "davide.galli@example.com"
        }
    ];

    return (
        <div className=" position-relative">
            <div className="collegamenti-wrapper rounded-4 ">
                <h4 className="text-center">Collegamenti</h4>
                <div>
                    {collegamenti && collegamenti.map((collegamento, index) => (
                        <Row key={index} className="d-flex justify-content-center align-items-center connection-item btn border-0 my-2">
                            <Col xs={2}>
                                <Image width={40} className="connection-img" src={UserIcon} />
                            </Col>
                            <Col xs={9}>
                                <h5>{collegamento.nome} {collegamento.cognome}</h5>
                                <p style={{ fontSize: "14px" }}>{collegamento.email}</p>
                            </Col>

                        </Row>
                    ))}
                </div>
            </div>

            <div className="position-absolute rounded-4 w-100 h-100 top-0 blurry-box text-light d-flex flex-column justify-content-center align-items-center px-4">

                <h4 className="text-center text-decoration-underline" >In arrivo: Un Nuovo Modo di Fare Musica!</h4>
                <p className="px-5 text-center mt-3 ">Preparati a vivere un&apos;esperienza musicale senza precedenti! Presto, Music-Hall introdurrà una sezione dedicata ai collegamenti che ti permetterà di:

                    <ul className="my-3 ">
                        <li className=" "><strong>Trovare</strong> la tua anima gemella musicale</li>
                        <li><strong>Collaborare</strong> a progetti innovativi</li>
                        <li><strong>Esplorare</strong> nuovi orizzonti creativi</li>
                    </ul>
                    Sei pronto a fare la musica che ami insieme ad altri appassionati? Resta connesso per scoprire tutte le novità!</p>
            </div>

        </div>
    )
}

export default CollegamentiProfile;