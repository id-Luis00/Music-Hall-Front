import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom"
import AddressIcon from '../assets/address icon.png'
import ContactsIcon from '../assets/contactsIcon.png'
import CapacityIcon from '../assets/capacity2.png'
import ShareIcon from '../assets/share-svgrepo.svg'
import SaveIcon from '../assets/save-add-svgrepo.svg'
import { FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from 'react-share'

const DetailsSala = () => {

    // qui posso estrapolare l'id della sala e fare la fetch della singola sala
    // prendo innanzitutto l'url ed estrapolo l'id della sala
    const params = useParams()
    const [url, setUrl] = useState("");




    const [sala, setSala] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [buttonBook, setButtonBook] = useState(false);


    const fetchSala = async (id) => {
        try {
            const resp = await fetch(`http://localhost:3001/sale/auth/${id}`)
            if (resp.ok) {
                // se la fetch va a buon fine estraiamo tutti i dati della sala
                const salaFound = await resp.json();
                setSala(salaFound);
                console.log(" salaFound : ", salaFound)
                setIsLoading(false);
                // alert("Fetch della sala effettuato con successo!");
            } else {
                console.log(" id post errore fetch :  ", id);
                console.log("errore durante la fetch");
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        } finally {
            console.log(sala)
        }
    }

    useEffect(() => {
        setUrl(`http://www.musichall.com/details/${params.idSala}`)
        console.log("URL seguente: ", url)
        if (params.idSala) {
            setIsLoading(true)
            console.log("idSala : ", params.idSala)
            fetchSala(params.idSala);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.idSala])

    return (
        <>
            <div>
                {isLoading ? (
                    <Spinner />
                ) : sala && sala.nomeSala ? (
                    <Container fluid className="mt-3 hero-container">
                        <Row className="ps-5">
                            <Col xs={12}>
                                <h1>{sala.nomeSala}</h1>
                            </Col>

                            <Col xs={12} className="d-flex justify-content-between align-items-center p-2 py-3">
                                <div className="d-flex gap-3">

                                    {sala.tipoSala === "PROVA" && (
                                        <div className="border border-secondary rounded p-2 section-border">
                                            <p className="m-0">Sala Prove</p>
                                        </div>
                                    )}

                                    {sala.tipoSala === "REGISTRAZIONE" && (
                                        <div className="border border-secondary rounded p-2 section-border">
                                            <p className="m-0">Sala di Registrazione</p>
                                        </div>
                                    )}
                                </div>

                                <div className="d-flex gap-3">

                                    <div className="icon-hover">
                                        <Image
                                            src={SaveIcon}
                                            height={40}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => alert("Saved")}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="text-light rounded-5">
                            <Col xs={12} md={7} className="rounded-top-3 ">
                                <div className="text-dark rounded-3 p-4">
                                    <div className="text-center">
                                        {sala.imageURL ? (
                                            <Image fluid height={600} className="rounded-5  image-rounded" src={sala.imageURL} />
                                        ) : (
                                            <Alert variant="danger" className="w-50 text-center mx-auto">
                                                Nessuna immagine della sala
                                            </Alert>
                                        )}
                                    </div>


                                    <hr />
                                </div>
                            </Col>

                            <Col xs={12} md={5} className="px-3 py-2">
                                <div className="p-2 bg-secondary text-light border-top border-start rounded-3">
                                    <Row>
                                        <Col xs={12}>
                                            <p className="text-center fs-1 price-section">{sala.prezzoOrario} €/h</p>
                                        </Col>
                                        <Col xs={12}>
                                            {buttonBook && (
                                                <Alert variant="info" className="text-center">
                                                    Questa feature verrà implementata a breve!
                                                </Alert>
                                            )}
                                            <Button
                                                onClick={() => setButtonBook(!buttonBook)}
                                                variant="outline-light"
                                                className="border-0 border-top w-100 bg-secondary button-animated">
                                                Prenota Ora
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="p-4 pb-0 d-flex text-light">
                                    <h2>Dettagli</h2>
                                </div>
                                <hr className="text-light" />

                                <Row className="text-light">
                                    <Col xs={12} md={6} className="d-flex gap-3">
                                        <div>
                                            <Image src={AddressIcon} height={30} />
                                        </div>
                                        <div>
                                            <h4>Indirizzo</h4>
                                            <p>{sala.regione} - {sala.comune} - {sala.indirizzo}</p>
                                        </div>
                                    </Col>

                                    <Col xs={12} md={6} className="d-flex gap-3">
                                        <Image src={CapacityIcon} height={30} />
                                        <div>
                                            <h4>Capienza della Sala</h4>
                                            <p>Capienza massima: {sala.capienza} persone</p>
                                        </div>
                                    </Col>

                                    <Col xs={12} md={6} className="d-flex gap-3">
                                        <Image src={ContactsIcon} height={30} />
                                        <div>
                                            <h4>Contatti</h4>
                                            <p>Sito web: <a className="text-light" href={sala.website}>{sala.website}</a></p>
                                            <p>Numero: {sala.telefono}</p>
                                        </div>
                                    </Col>
                                </Row>

                                <div >
                                    <h2 className="p-4 pb-0 text-light ">Condividi </h2>
                                    <hr className="mb-3" />
                                    <div className="d-flex gap-3 justify-content-start">

                                        <FacebookShareButton
                                            url={url ? url : "musichall.com"}
                                            quote="please share this!"
                                        >
                                            <FacebookIcon round="true" size="50" />
                                        </FacebookShareButton>

                                        <WhatsappShareButton
                                            url={url ? url : "musichall.com"}
                                        >
                                            <WhatsappIcon round="true" size="50" />
                                        </WhatsappShareButton>

                                        <FacebookMessengerShareButton
                                            url={url ? url : "musichall.com"}
                                        >
                                            <FacebookMessengerIcon round="true" size="50" />
                                        </FacebookMessengerShareButton>

                                        <TelegramShareButton url={url ? url : "musichall.com"} >
                                            <TelegramIcon size={50} round="true" />
                                        </TelegramShareButton>

                                        <TwitterShareButton url={url ? url : "musichall.com"} >
                                            <XIcon round="true" size="50" />
                                        </TwitterShareButton>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <p>Nessuna sala trovata.</p>
                )}
            </div>
        </>

    )
}

export default DetailsSala;