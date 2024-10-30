import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import ResultPage from './components/ResultPage'
import DetailsSala from './components/DetailsSala';
import Register from './components/Register'
import NavBar from './components/NavBar';
import ProfilePage from './components/ProfilePage';
import Footer from './components/Footer'
import NotFound from './components/NotFound';
import HeroProfile from './components/HeroProfile';
import GestioneSale from './components/GestioneSale';
import BackOfficeUserPage from './components/BackOfficeUserPage';
import AboutPage from './components/AboutPage';
import AboutMe from './components/AboutMe';
import AboutPageComponent from './components/AboutPageComponent'

function App() {


  return (


    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/results/:query' element={<ResultPage />} />
        <Route path='/details/:idSala' element={<DetailsSala />} />
        <Route path='/profile/:idUser/*' element={<ProfilePage />} >
          <Route path='me' element={<HeroProfile />} />
          <Route path='sale' element={<GestioneSale />} />
          <Route path='modifica' element={<BackOfficeUserPage />} />
          <Route path='preferiti' element={<h2 className='text-center'> Sale Preferite </h2>} />
        </Route>
        <Route path='/about/*' element={<AboutPage />} >
          <Route path='me' element={<AboutMe />} />
          <Route path='site' element={<AboutPageComponent />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
