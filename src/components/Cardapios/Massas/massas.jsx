import React from 'react';
import styles from './massas.module.css';
import NavBar from '../../NavBar/Navbar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

export default function Massas() {
  
    return(
        <>
        <NavBar/>
        <div className={styles.container}>  
         <div className={styles.box1}>
            
        
        </div>

         <div className={styles.box2}>
        

        </div>
        </div> 
        <Footer/>
        </>
    )
}