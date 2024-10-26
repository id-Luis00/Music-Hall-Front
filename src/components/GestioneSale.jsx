import { useEffect, useState } from "react";
import { Col, Row, Button, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GestioneSale = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
    const [selectedSala, setSelectedSala] = useState(null);
    const [modificaSala, setModificaSala] = useState({
        nomeSala: '',
        regione: '',
        comune: '',
        indirizzo: '',
        cap: '',
        capienza: '',
        prezzoOrario: '',
        imageURL: '',
        telefono: '',
        website: ''
    });

    useEffect(() => {
        const userFound = JSON.parse(localStorage.getItem("user"));
        const tokenFound = localStorage.getItem("token")
        if (userFound) {
            setUser(userFound);
            setToken(tokenFound)
            console.log(userFound);
        }
    }, []);

    const handleSelectSala = (sala) => {
        setSelectedSala(sala);
        setModificaSala({
            nomeSala: sala.nomeSala || '',
            regione: sala.regione || '',
            comune: sala.comune || '',
            indirizzo: sala.indirizzo || '',
            cap: sala.cap || '',
            capienza: sala.capienza || '',
            prezzoOrario: sala.prezzoOrario || '',
            imageURL: sala.imageURL || '',
            telefono: sala.telefono || '',
            website: sala.website || ''
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setModificaSala(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    const putSala = async () => {
        const data = {
            nomeSala: modificaSala.nomeSala,
            regione: modificaSala.regione,
            comune: modificaSala.comune,
            indirizzo: modificaSala.indirizzo,
            cap: modificaSala.cap,
            capienza: modificaSala.capienza,
            prezzoOrario: modificaSala.prezzoOrario,
            imageURL: modificaSala.imageURL,
            telefono: modificaSala.telefono,
            website: modificaSala.website
        }
        try {
            const resp = await fetch(`http://localhost:3001/sale/${selectedSala.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data),
            })

            if (resp.ok) {
                alert("modifica effettuata!")
                const dataResp = await resp.json();
                console.log("DATA RESP", dataResp)
            }
        } catch (error) {
            console.error("errore nella fetch", error)
        }
    }

    const handleSubmitModifica = (e) => {
        e.preventDefault();
        console.log('Dati modificati:', modificaSala);
        putSala();
    };

    return (
        <>
            <Row>
                <Col xs={12}>
                    <h1 className="text-center">Le tue sale</h1>
                    <hr />
                </Col>

                {selectedSala ? (
                    <Col xs={12} className="p-3 ">
                        <h3>Modifica la sala - <span className="text-decoration-underline"> {selectedSala.nomeSala} </span> </h3>
                        <Form onSubmit={handleSubmitModifica} className="d-flex flex-column gap-3">
                            <Form.Group controlId="nomeSala">
                                <Form.Label>Nome Sala</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nomeSala"
                                    value={modificaSala.nomeSala}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="regione">
                                <Form.Label>Regione</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="regione"
                                    value={modificaSala.regione}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="comune">
                                <Form.Label>Comune</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="comune"
                                    value={modificaSala.comune}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="indirizzo">
                                <Form.Label>Indirizzo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="indirizzo"
                                    value={modificaSala.indirizzo}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="cap">
                                <Form.Label>CAP</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cap"
                                    value={modificaSala.cap}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="capienza">
                                <Form.Label>Capienza</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="capienza"
                                    value={modificaSala.capienza}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="prezzoOrario">
                                <Form.Label>Prezzo orario</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="prezzoOrario"
                                    value={modificaSala.prezzoOrario}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="immagineSala">
                                <Form.Label>Immagine della sala</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="imageURL"
                                    value={modificaSala.imageURL}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="telefono">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="telefono"
                                    value={modificaSala.telefono}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="website">
                                <Form.Label>Website</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="website"
                                    value={modificaSala.website}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button variant="outline-light" type="submit" className="mt-3 py-3 fs-3 w-75 mx-auto">
                                Salva Modifiche
                            </Button>
                        </Form>
                        <Button variant="secondary" className="mt-3 py-3 fs-3 w-75 d-block mx-auto" onClick={() => setSelectedSala(null)}>
                            Annulla
                        </Button>
                    </Col>
                ) : (
                    <>
                        {user && user.listaSale && user.listaSale.length > 0 ? (
                            <>
                                {user.listaSale.map((sala) => (
                                    <Col key={sala.id} xs={12} className="p-3  btn-sale d-flex gap-5"  >
                                        <Image className="d-block rounded-4 shadow" height={200} src={sala.imageURL} />
                                        <div className="d-flex flex-column align-items-start">

                                            <h3
                                                className="text-light"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    navigate(`/details/${sala.id}`)
                                                }}
                                                style={{ cursor: "pointer" }}
                                            >
                                                {sala.nomeSala}
                                            </h3>
                                            <p className="text-start text-light mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sed praesentium id quidem deserunt odit minus ab accusantium, at error eligendi. Enim quaerat totam ratione quibusdam rem veniam amet libero.</p>
                                            <div className="d-flex gap-3 align-items-center">
                                                <Button variant="outline-primary" onClick={() => handleSelectSala(sala)}>Modifica</Button>
                                                <Button variant="outline-danger" onClick={() => alert("sei sicuro di voler eliminare la sala?")}>Elimina</Button>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </>
                        ) : (
                            <Col xs={12}>
                                <p className="text-center">Non hai sale disponibili.</p>
                            </Col>
                        )}
                    </>
                )}
            </Row >
        </>
    );
};

export default GestioneSale;


