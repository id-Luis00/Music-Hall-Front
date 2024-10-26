import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";



const BackOfficeUserPage = () => {

    const tipologieMusicista = [
        "CANTANTE",
        "CHITARRISTA",
        "BASSISTA",
        "BATTERISTA",
        "TASTIERISTA",
        "VIOLINISTA",
        "FLAUTISTA",
        "PIANISTA",
        "SAXOFONISTA",
        "TROMBETTISTA",
        "VIOLONCELLISTA",
        "CONTRABBASSISTA",
        "DJ",
        "PERCUSSIONISTA",
        "CORISTA",
        "PRODUCER",
        "COMPOSITORE",
        "ARRANGIATORE"
    ];

    const [user, setUser] = useState(null);
    const [userModificato, setUserModificato] = useState({
        nome: '',
        cognome: '',
        username: '',
        email: '',
        password: '',
        dataDiNascita: '',
        avatar: '',
        tipoMusicista: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserModificato(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const resp = await fetch("http://localhost")
        } catch (error) {
            console.error("Errore nella fetch:", error)
        }
    }


    useEffect(() => {
        const userFound = JSON.parse(localStorage.getItem("user"));
        if (userFound) {
            setUser(userFound);
            setUserModificato(userFound)
            console.log("userFound", userFound);
        }
    }, [])

    return (
        <Row>
            <Col xs={12} className="text-center">
                <h1>Modifica account</h1>
                <hr />
            </Col>

            <Col xs={12}>
                <Form onSubmit={handleSubmit} className="ps-3">
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label >Nome</Form.Label>
                        <Form.Control
                            type="text"
                            name="nome"
                            placeholder="inserisci nome"
                            value={userModificato.nome}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cognome">
                        <Form.Label >Cognome</Form.Label>
                        <Form.Control
                            type="text"
                            name="cognome"
                            placeholder="inserisci cognome"
                            value={userModificato.cognome}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label >Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="inserisci username"
                            value={userModificato.username}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label >Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="inserisci email"
                            value={userModificato.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={userModificato.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group> */}

                    <div className="d-flex justify-content-center gap-5">
                        <Form.Group className="w-100" controlId="birthDate">
                            <Form.Label>Data di nascita</Form.Label>
                            <Form.Control
                                type="date"
                                name="birthDate"
                                value={userModificato.dataDiNascita}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="w-100" controlId="tipoMusicista">
                            <Form.Label>Tipologia di musicista</Form.Label>
                            <Form.Select
                                aria-label="Seleziona la tipologia di musicista"
                                value={userModificato.tipoMusicista}
                                onChange={handleChange}
                            >
                                <option value="">Seleziona una tipologia</option>
                                {
                                    tipologieMusicista.map((tipologia, index) => (
                                        <option key={index} value={tipologia}>
                                            {tipologia.charAt(0).toUpperCase() + tipologia.slice(1).toLowerCase()}
                                        </option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                    </div>



                    <Button variant="outline-light" type="submit" className="mt-3 w-100">
                        Registrati
                    </Button>

                </Form >
            </Col>
        </Row>
    )
}

export default BackOfficeUserPage;