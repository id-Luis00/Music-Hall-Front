import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const AboutPage = () => {
    return (
        <Row className="justify-content-center g-0 gap-3">

            <Col xs={12} lg={2} className="d-flex flex-column gap-2 p-4  rounded-3 border-end border-top">
                <Link className="btn fs-4 text-start text-light mt-5" to={"me"}>About me</Link>
                <Link className="btn fs-4 text-start text-light" to={"site"}>About the page</Link>
            </Col>

            <Col xs={12} lg={8} className="p-4 rounded-3 ">
                <Outlet />
            </Col>

        </Row>
    )
}

export default AboutPage;