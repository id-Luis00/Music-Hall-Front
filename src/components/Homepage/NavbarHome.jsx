import { Button, Container, Image } from "react-bootstrap";
import Logo from "../../assets/random.svg"

const NavbarHome = () => {
    return (
        <Container fluid className="py-2 m-0 d-flex justify-content-between align-items-center ">
            <div>
                <a href="https://www.google.it" target="blank">
                    <Image src={Logo} width={70} />

                </a>
            </div>
            <div className=" px-3 py-1 rounded-5 d-flex gap-3">
                <Button size="lg" variant="trasparent" className="border rounded-5 homeButton">
                    Home
                </Button>
                <Button size="lg" variant="trasparent" className="border rounded-5 homeButton">
                    About
                </Button>
                <Button size="lg" variant="trasparent" className="border rounded-5 homeButton">
                    Contacts
                </Button>
            </div>
            <div>
                <Button size="lg" variant="trasparent" className="border border-trasparent rounded-5 homeButton" >
                    Login
                </Button>
            </div>
        </Container>
    )
}

export default NavbarHome;