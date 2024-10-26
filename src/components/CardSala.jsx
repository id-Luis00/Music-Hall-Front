/* eslint-disable react/prop-types */
import { Button, Card, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const CardSala = (props) => {

    const navigate = useNavigate();
    const { login } = useSelector(state => state.user)

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/details" + "/" + props.id)
    }
    return (
        < Col xs={12} sm={6} md={4} lg={3} className="g-4" >
            <Card className="text-center text-light border-0 card-background shadow-sm animate-card">
                <Card.Img
                    fluid
                    variant="top"
                    className="object-fit-cover"
                    height={175}
                    src={props.imageURL}
                />
                {login ? (
                    <div className="position-absolute w-100 p-2 d-flex top-cards rounded-1">
                        <div className="like-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => alert("Salvato tra i preferiti")}
                                width="25"
                                height="25"
                                fill="white"
                                viewBox="0 0 16 16"
                            >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                        </div>
                    </div>
                ) : (
                    <div className="position-absolute w-100 p-2 d-flex top-cards rounded-1">
                        <div className="like-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => alert("Effettua il login per salvare la sala nei preferiti")}
                                width="25"
                                height="25"
                                fill="white"
                                viewBox="0 0 16 16"
                            >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                        </div>
                    </div>
                )}
                <Card.Body className="">
                    <Card.Title className="text-nowrap text-light">{props.nome}</Card.Title>
                    <hr className="text-light" />
                    <Button className="w-100" variant="dark" onClick={handleClick}>
                        Details
                    </Button>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default CardSala;