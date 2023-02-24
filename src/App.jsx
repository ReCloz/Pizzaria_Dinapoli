import { useState } from 'react'
import NavBar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './Pages/Main';
import './App.css'

function App() {
 

  return (
    
    <div>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/NavBar' element={<NavBar />} />
            <Route path='/Footer' element={<Footer />} />
          </Routes>
        </BrowserRouter>
        
      
    </div>
  )
}

export default App
