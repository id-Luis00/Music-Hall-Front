import { useEffect, useState } from "react"
import { Col, Row, Spinner } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import CollegamentiProfile from "./CollegamentiProfile";

const ProfilePage = () => {

    const [user, setUser] = useState(null);
    const [showCol, setShowCol] = useState(false);

    useEffect(() => {
        const userStorage = localStorage.getItem("user")
        if (userStorage) {
            setUser(JSON.parse(userStorage))
        }
    }, [])

    // Aggiungi controllo per user
    if (!user) {
        return <Spinner />;  // Oppure un'altra UI per indicare che sta caricando
    }

    const property = user?.authorities?.[0]?.authority || '';

    return (
        <Row className="justify-content-around g-0">
            <Col md={10} lg={2} className=" rounded-4 p-3 text-center ">
                <h2 className="mb-4">Ciao {user.nome}!</h2>
                <hr />
                <Link to={"me"} className="btn text-light profile-link mb-2 d-block">Account</Link>
                {property.toLowerCase() === "proprietario" && (
                    <Link to={"sale"} className="btn text-light profile-link mb-2 d-block">Le mie sale</Link>
                )}
                {property.toLowerCase() === "utente" && (
                    <Link to={"preferiti"} className="btn text-light profile-link mb-2 d-block">Sale preferite</Link>
                )}
                <Link to={"modifica"} className="btn text-light profile-link d-block mb-2">Modifica</Link>
                <Link onClick={() => setShowCol(!showCol)} className="btn text-light profile-link d-block">Collegamenti</Link>
            </Col>

            <Col /* md={11} lg={6} */ className=" rounded-4 pe-3">
                <Outlet />
            </Col>

            {showCol && (
                /*  */
                <Col sm={8} lg={4} xl={3} className="" >
                    <CollegamentiProfile />
                </Col>
            )}
        </Row>
    );
}

export default ProfilePage;
