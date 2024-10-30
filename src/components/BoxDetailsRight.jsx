import { Col, Image, Row } from "react-bootstrap";

const BoxDetailsRight = ({ title, desc, img }) => {
    return (

        < Row className="border p-3 mb-3 rounded-4">
            <Col xs={12} lg={6}>
                <h3 className="display-5 mt-4">{title}</h3>
                <hr />
                <p className="fs-3 p-justify">{desc}</p>
            </Col>
            <Col xs={12} lg={6} className="p-4">
                <Image fluid src={img} className=" rounded-4 " />
            </Col>
        </Row >
    )
}

export default BoxDetailsRight;