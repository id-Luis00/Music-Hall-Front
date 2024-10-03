import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Homepage/Home'
import Login from './components/Login/Login'

function App() {
  

  return (
    
      <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Home />}/>
        <Route path='/login' element={ <Login />} />
        
      </Routes>
      </BrowserRouter>
  
  )
}

export default App
