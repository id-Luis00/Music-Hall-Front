import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import DeleteSalaModal from "./DeleteModal";



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
    const [token, setToken] = useState("");
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

    const handleSubmit = async (id) => {
        try {
            const resp = await fetch(`http://localhost:3001/utenti/${id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userModificato)
            })

            if (resp.ok) {
                const dataResp = resp.json();
                alert("Modifica effettuata!", dataResp)
            }
        } catch (error) {
            console.error("Errore nella fetch:", error)
        }
    }


    useEffect(() => {
        const userFound = JSON.parse(localStorage.getItem("user"));
        const tokenFound = localStorage.getItem("token");
        if (userFound) {
            setToken(tokenFound)
            setUser(userFound);
            setUserModificato(userFound)
            console.log("userFound", userFound);
        }
    }, [])

    return (
        <Row className="justify-content-center">
            <Col xs={12} className="text-center">
                <h1>Modifica account</h1>
                <hr />
            </Col>

            <Col xs={6} className="">
                <Form onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(user.id)
                }} className="ps-3">
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
                        <Form.Label >Immagine profilo</Form.Label>
                        <Form.Control
                            type="file"
                            name="avatar"
                            placeholder="inserisci URL"

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
                            type="email"
                            name="email"
                            placeholder="inserisci email"
                            value={userModificato.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>




                    <div className="d-flex justify-content-center gap-5">
                        <Form.Group className="w-100" controlId="birthDate">
                            <Form.Label>Data di nascita</Form.Label>
                            <Form.Control
                                type="date"
                                name="birthDate"
                                value={userModificato.dataDiNascita}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="w-100" controlId="tipoMusicista">
                            <Form.Label>Tipologia di musicista</Form.Label>
                            <Form.Select
                                aria-label="Seleziona la tipologia di musicista"
                                value={userModificato.tipoMusicista}
                                onChange={handleChange}
                            >
                                <option required value="">Seleziona una tipologia</option>
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


                    <div className="d-flex justify-content-end gap-3">

                        <Button variant="outline-primary" type="submit" className="mt-3  py-3 fs-3">
                            Modifica
                        </Button>
                        <Button variant="outline-danger" type="submit" className="mt-3  py-3 fs-3">
                            Elimina
                        </Button>


                    </div>

                </Form >
            </Col>
        </Row>
    )
}

export default BackOfficeUserPage;