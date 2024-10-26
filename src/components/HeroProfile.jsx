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
                    <ul className="list-unstyled mb-0">
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

                    <Col xs={6} className="hero-col">
                        <h4>Socials</h4>
                        <p>...</p>
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}

export default HeroProfile;