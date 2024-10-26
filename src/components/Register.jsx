import { useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MusicianIcon from '../assets/trumpet-svgrepo.svg'
import OwnerIcon from '../assets/business-person-to-guide-right-hand-svgrepo.svg'



const Register = () => {

    const [form, SetForm] = useState("");
    const [showUser, setShowUser] = useState(true)
    const [showOwner, setShowOwner] = useState(true)
    const navigate = useNavigate();

    /* const handleClick = (e) => {
        e.preventDefault();

    } */

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

    const handleDateChange = (e) => {
        const rawDate = e.target.value;
        const formattedDate = new Date(rawDate).toLocaleDateString("it-IT", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
        SetDataDiNascita(formattedDate);
    };

    const handleDateChangeP = (e) => {
        const rawDate = e.target.value;
        const formattedDate = new Date(rawDate).toLocaleDateString("it-IT", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
        SetDataDiNascitaP(formattedDate);
    };

    const [nome, SetNome] = useState("");
    const [cognome, SetCognome] = useState("");
    const [username, SetUsername] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [dataDiNascita, SetDataDiNascita] = useState("");
    const [tipoMusicista, SetTipoMusicista] = useState("");

    const [nomeP, setNomeP] = useState("");
    const [cognomeP, SetCognomeP] = useState("");
    const [emailP, SetEmailP] = useState("");
    const [passwordP, SetPasswordP] = useState("");
    const [dataDiNascitaP, SetDataDiNascitaP] = useState("");


    const handleSubmitP = async (e) => {
        e.preventDefault();

        const dataP = {
            nome: nomeP,
            cognome: cognomeP,
            email: emailP,
            password: passwordP,
            dataDiNascita: dataDiNascitaP
        }

        // qui faccio la fetch per creare un proprietario
        const resp = await fetch("http://localhost:3001/auth/owner/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataP)
        });

        if (resp.ok) {
            const dataResp = resp.json();
            alert("registrazione effettuata! ");
            console.log(dataResp)
            navigate("/");
        }



    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            nome,
            cognome,
            username,
            email,
            password,
            dataDiNascita,
            tipoMusicista
        }

        try {
            const resp = await fetch("http://localhost:3001/auth/utenti/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if (resp.ok) {
                const dataResp = await resp.json();
                console.log(dataResp);
                alert("utente registrato con successo!!! " + dataResp.id + "\nControllare la console :)");
                navigate("/")


            } else alert("ci è stato un errore con la registrazione")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    {/* inserire la scelta multipla tra utente e sala */ }
    {/* l'idea sarebbe di creare un renderizzazione condizionale
    se clicco UTENTE, renderizzera il form per l'utente.
    se clicco SALA, renderizzerà il form per aggiungere una sala. */}

    return (
        <>
            <Row className=" px-4 justify-content-center align-items-center height-register g-0 gap-5 mb-auto h-100">
                <Col xs={12} className="text-center">
                    <h1 className="">- Dicci di più -</h1>
                    <p className="fs-5 mt-3"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vitae laborum neque, error ratione molestiae quaerat.
                        <br /> Officia cupiditate, odio odit nostrum nisi iste saepe optio beatae dignissimos reiciendis repellendus nesciunt?</p>
                </Col>
                {showUser && (
                    <Col xs={12} lg={4} className="text-center box-sign " onClick={() => {
                        SetForm("Utente")
                        setShowOwner(!showOwner)
                    }}>

                        <div className="rounded p-3  border-light" style={{ backgroundColor: "2c2c2c" }}>
                            <Row>
                                <Col xs={12}>
                                    <div className="rounded-3 p-3">
                                        <Image height={100} src={MusicianIcon} />
                                    </div>
                                </Col>
                                <hr className="bg-dark" />
                                <Col xs={12}>
                                    <h2> Account Utente</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis ex, quisquam fuga, molestiae consequuntur deleniti esse a sed odio sequi molestias hic maiores, consectetur consequatur blanditiis eius quod repellendus.

                                    </p>
                                </Col>
                            </Row>
                        </div>

                    </Col>
                )}


                {showOwner && (<Col xs={12} lg={4} className="text-center box-sign " onClick={() => {
                    SetForm("Proprietario");
                    setShowUser(!showUser)
                }}>

                    <div className="rounded p-3  border-light" style={{ backgroundColor: "2c2c2c" }}>
                        <Row>
                            <Col xs={12}>
                                <div className="rounded-3 p-3">
                                    <Image height={100} src={OwnerIcon} />
                                </div>
                            </Col>
                            <hr className="bg-dark" />
                            <Col xs={12}>
                                <h2> Account Proprietario</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis ex, quisquam fuga, molestiae consequuntur deleniti esse a sed odio sequi molestias hic maiores, consectetur consequatur blanditiis eius quod repellendus.

                                </p>
                            </Col>
                        </Row>
                    </div>

                </Col>)}
                <Col lg={6}>

                    {form === "Utente" && showOwner === false && (
                        <Form onSubmit={handleSubmit} className="ps-3">
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label >Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    placeholder="inserisci nome"
                                    value={nome}
                                    onChange={e => SetNome(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="cognome">
                                <Form.Label >Cognome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cognome"
                                    placeholder="inserisci cognome"
                                    value={cognome}
                                    onChange={e => SetCognome(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label >Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="inserisci username"
                                    value={username}
                                    onChange={e => SetUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label >Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="inserisci email"
                                    value={email}
                                    onChange={e => SetEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => SetPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <div className="d-flex justify-content-center gap-5">
                                <Form.Group className="w-100" controlId="birthDate">
                                    <Form.Label>Data di nascita</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="birthDate"
                                        value={dataDiNascita}
                                        onChange={handleDateChange}
                                    />
                                </Form.Group>

                                <Form.Group className="w-100" controlId="tipoMusicista">
                                    <Form.Label>Tipologia di musicista</Form.Label>
                                    <Form.Select
                                        aria-label="Seleziona la tipologia di musicista"
                                        value={tipoMusicista}
                                        onChange={e => SetTipoMusicista(e.target.value)}
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
                    )}

                    {form === "Proprietario" && showUser === false && (
                        <Form onSubmit={handleSubmitP} className="ps-3 ">


                            <Form.Group className="mb-3" controlId="nomeProprietario">
                                <Form.Label >Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nomeProprietario"
                                    placeholder="inserisci nome..."
                                    value={nomeP}
                                    onChange={e => setNomeP(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="cognomeProprietario">
                                <Form.Label >Cognome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cognomeProprietario"
                                    placeholder="inserisci cognome..."
                                    value={cognomeP}
                                    onChange={e => SetCognomeP(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="emailProprietario">
                                <Form.Label >E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="emailProprietario"
                                    placeholder="inserisci email..."
                                    value={emailP}
                                    onChange={e => SetEmailP(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="passwordProprietario">
                                <Form.Label >Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="passwordProprietario"
                                    placeholder="inserisci password..."
                                    value={passwordP}
                                    onChange={e => SetPasswordP(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="w-100" controlId="birthDate">
                                <Form.Label>Data di nascita</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="birthDate"
                                    value={dataDiNascitaP}
                                    onChange={handleDateChangeP}
                                />
                            </Form.Group>




                            <Button variant="outline-light" type="submit" className="mt-3 w-100">
                                Submit
                            </Button>

                        </Form >
                    )}
                </Col>
            </Row>

            <Col xs={6}>


            </Col>
        </>
    )
}


export default Register;