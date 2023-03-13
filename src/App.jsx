import { useState } from 'react'
import NavBar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/cadastro';
import Pizzas from './components/Cardapios/Pizzas/pizzas';
import Bebidas from './components/Cardapios/Bebidas/bebidas';
import Massas from './components/Cardapios/Massas/massas';
import Principal from './components/Principal/principal';
import './App.css'

function App() {
 

  return (
    
    <div>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/NavBar' element={<NavBar />} />
            <Route path='/Footer' element={<Footer />} />
            <Route path='/Cadastro' element={<Cadastro />}/>
            <Route path='/Pizzas' element={<Pizzas />} />
            <Route path='/Bebidas' element={<Bebidas />} />
            <Route path='/Massas' element={<Massas />} />
            <Route path='/Principal' element={<Principal/>} />
          </Routes>
        </BrowserRouter>
        
      
    </div>
  )
}

export default App
