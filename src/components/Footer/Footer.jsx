import styles from './Footer.module.css'
import React from 'react';
import { Link } from "react-router-dom";
import {FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";



export default function Footer() {
  
  
  
    return(
     <footer className={styles.footer}>
      <div className={styles.divcontainer}>
       <div className={styles.divcardapio}>
        <ul>
            <h5>CARDÁPIO</h5>
            <li className={styles.links}>
                <Link to="/" />
                Promoções
            </li>
            <li className={styles.links}>
                <Link to="/" />
                Pizzas
            </li>
            <li className={styles.links}>
                <Link to="/" />
                Massas
            </li>
            <li className={styles.links}>
                <Link to="/" />
                Bebidas
            </li>
        </ul>

      </div>
      <div className={styles.divsobre}>
        <ul>
            <h5>SOBRE NÓS</h5>
            <li className={styles.links}>
                <Link to="/" />
                 Seja um franqueado
            </li>
            <li className={styles.links}>
                <Link to="/" />
                Conheça nossa equipe
            </li>
            <li className={styles.links}>
                <Link to="/" />
                Sobre nós
            </li>
        </ul>

      </div>
      <div className={styles.divcliente}>
        <ul>
            <h5>ATENDIMENTO AO CLIENTE</h5>
            <li className={styles.links}>
                 Telefone: (99) 99999-9999.
            </li>
            <li className={styles.links}>
                 Endereço: Rua Franco,318 Bairro Marambaia.
            </li>
            <li className={styles.links}>
                E-mail: dinapoli.pizza@gmail.com
            </li>
        </ul>

      </div>
      
      <div className={styles.divredes}>
        <ul>
            <h5>REDES SOCIAIS</h5>
            <li className={styles.links}>
            < FaFacebookSquare/> /DiNapoliPizzaria
            </li>
            <li className={styles.links}>
             <FaInstagram /> @DiNapoli
             
            </li>
            <li className={styles.links}>
            < FaTiktok/> @Pizzaria.DiNapoli
            </li>
        </ul>

      </div>
    </div>

     <hr className={styles.hr}></hr>
     <div className={styles.divrodape}>
        <p>Fale Conosco | Política de Privacidade | Termos de uso.</p>
     </div>
     </footer>
  
)









}