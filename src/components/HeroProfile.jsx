import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";



const HeroProfile = () => {

    const [user, setUser] = useState(null);


    useEffect(() => {
        const userFound = JSON.parse(localStorage.getItem("user"))
        if (userFound) {
            setUser(userFound)
        }
    }, [])

    return (
        <Row className="g-0 hero-details-col ">
            <Col xs={4}>
                <Image className="rounded-5 mb-4 " height={180} src={user?.avatar} />
                <h1>Dati Personali</h1>
                <hr className="my-4" />
                {user && ( // Conditionally render only if user exists
                    <ul className="list-unstyled mb-0 fs-4">
                        <li>
                            <span className="fw-bold">Nome:</span> {user.nome} {user.cognome}
                        </li>
                        <li>
                            <span className="fw-bold">Data di Nascita:</span> {user.dataDiNascita}
                        </li>
                        <li>
                            <span className="fw-bold">Email:</span> {user.email}
                        </li>
                        <li>
                            <span className="fw-bold">Tipo Musicista:</span> {user.tipoMusicista}
                        </li>
                        <li>
                            <span className="fw-bold">Username:</span> {user.username}
                        </li>
                        {user.authorities[0].authority === "PROPRIETARIO" && (
                            <li>
                                <span className="fw-bold">Ruolo:</span> Proprietario di Sala
                            </li>
                        )}
                    </ul>
                )}
            </Col>

            <Col xs={8} className=" ps-5">
                <Row className="mt-3">

                    <Col xs={12} className="hero-col">
                        <h3 className="h1">Socials</h3>
                        <div>
                            <ol>
                                <li>Instagram - </li>
                            </ol>
                        </div>
                        <hr />
                        <h3 className="h1">Esperienze</h3>
                        <ul className="fs-5">
                            <li>Batterista presso <strong className="fs-5 ">WormHole</strong> - 2018 / 2020</li>
                            <p>Sono stato batterista e compositore presso il gruppo di fiumicino WormHole. Concretizando concerti e video sui social. È stata un'incredibile esperienza nella quale ho avuto modo di crescere molto come artista</p>
                            <li>Batterista e Tecnico del suono presso <strong className="fs-5">StayTuned</strong> - 2020 / presente</li>
                            <p>Attuale batterista e tecnico del suono nel gruppo StayTuned. Un ambizioso progetto dove si mischiano generi come il metal e gli ironici ed inteliggentissimi testi di Elio e le storie Tese</p>
                            <li>Batterista e Tecnico del suono presso <strong className="fs-5">Cuervo</strong> - 2020 / presente</li>
                            <p>Attuale batterista e compositore presso il gruppo spagnolo con influenze pop, post-punk e grunge Cuervo. Gruppo nella quale sto sviluppando una propensione nella scrittura di partiture complesse alla batteria</p>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}

export default HeroProfile;