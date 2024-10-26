import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logoMusicHall2-removebg-preview.png'
import { useEffect } from 'react';
import { isLoggedInAction } from '../redux/actions';


const NavBar = () => {

    const dispatch = useDispatch();
    const { userData, login } = useSelector(state => state.user);


    // Al caricamento del componente, controlla se il token esiste nel localStorage
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(isLoggedInAction(token))
        }
    }, [dispatch]);

    return (
        <Navbar expand="lg" className=" m-0 p-0 py-2 rounded-3 sticky-top" style={{ background: "linear-gradient(180deg, rgba(3, 3, 3, 1) 50%, #2c2c2c00 100%)" }}>
            <Container fluid className='px-4'>
                <Navbar.Brand className='bg-light rounded-2' >
                    <Link to={"/"}>
                        <Image src={Logo} height={50} />
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=''>
                    <Nav className="">
                        <NavLink to={"/"} className={({ isActive }) => isActive ? "active" : " non-active"} > Home </NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => isActive ? "active" : "non-active "}> About </NavLink>

                        {login ? (
                            <NavLink to={`/profile/${userData.id}/me`} className={({ isActive }) => isActive ? "active" : " non-active "}> Account </NavLink>

                        ) : (
                            <NavLink to={"/auth/login"} className={({ isActive }) => isActive ? "active" : " non-active "}> Login </NavLink>
                        )}
                    </Nav>

                </Navbar.Collapse>


            </Container >

        </Navbar >
    )

}

export default NavBar;