import { Button, Container } from "react-bootstrap";
import Login from "../Login/Login";
import NavbarHome from "./NavbarHome";
import { useDispatch, useSelector } from "react-redux";
import { hideLoginAction, showLoginAction } from "../../redux/actions";



const Home =()=> {
    
    const show = useSelector(state => state.modals.show)  
    const dispatch = useDispatch()

    const handleClose = () => dispatch(showLoginAction());
    const handleShow = () => dispatch(hideLoginAction());

  return (
    
      <Container className="bg-dark">

        <NavbarHome />

        <Button size="sm" variant="secondary" onClick={handleShow}>
        login / register
        </Button>

        <Login show={show} handleClose={handleClose} />

      </Container>
    
    )
}

export default Home;