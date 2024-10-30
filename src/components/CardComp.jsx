import { Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CardComp = ({ nomeSala, imageURL, indirizzo, prezzo, regione, comune, id }) => {

  const navigate = useNavigate();

  return (
    <Col className="">
      <div className="card ms-4 animate-card shadow-sm border-0" style={{ cursor: "pointer" }} onClick={() => navigate(`/details/${id}`)}>
        <Image src={imageURL} />
        <div className="position-absolute text-light fs-5 text-center top-0 top-cards w-100">
          <p className=" ">{nomeSala}</p>
          <p></p>
          <p></p>
        </div>
        <div className="card__content">
          <p className="card__title fs-6 text-center">{nomeSala}</p>
          <Row>
            <Col xs={6} className="text-center">
              <p className="lead "> Indirizzo </p>
              <hr className="bg-dark m-0" />
              <p className="m-0">{regione} - {comune}</p>
              <p>{indirizzo}</p>
            </Col>
            <Col xs={6} className="text-center">
              <p className="lead "> Prezzo </p>
              <hr className="bg-dark" />
              <p>{prezzo} €/h</p>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};



export default CardComp;
