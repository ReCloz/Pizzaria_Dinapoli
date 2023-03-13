import React from 'react';
import styles from './bebidas.module.css';
import NavBar from '../../NavBar/Navbar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import limonadarosa from '../../../assets/limonadarosa.png';
import suco from '../../../assets/suco.png'
import refrigerante from '../../../assets/refrigerante.png'


export default function Bebidas() {
  
    return(
        <>
        <NavBar/>
        <div className={styles.container}>  

        <div className={styles.box1}>
        
        <div class="container">
            <h2>Bebidas</h2>
            <br/>
            <div class="cardItens">
                <img src={limonadarosa} />
                <div class="telabebidasitemunico">
                    <figcaption>
                  <p className={styles.bebida}>Limonada Rosa</p>
                    <p className={styles.preco}>R$ 15.00</p>
                    </figcaption>
                </div>
            </div>
            <div class="cardItens">
                <img src={suco} />
                    <figcaption>
                  <p className={styles.bebida}>Suco</p>
                    <p className={styles.preco}>R$ 07.00</p>
                    </figcaption>
            </div>
            <div class="cardItens">
                <img src={refrigerante} />
                    <figcaption>
                  <p className={styles.bebida}>Refrigerante</p>
                    <p className={styles.preco}>R$ 10.00</p>
                    </figcaption>
            </div>
          

        </div>
        
        </div>

        <div className={styles.box2}>
        </div>
        
        </div> 
        <Footer/>
        </>
    )
}