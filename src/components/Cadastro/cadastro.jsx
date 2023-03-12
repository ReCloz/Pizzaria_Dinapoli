import React from 'react';
import styles from './cadastro.module.css';
import NavBar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import login from '../../assets/login.png'
import cadastro from '../../assets/cadastro.png'



export default function Login() {

return(
   <>

  <NavBar/>
   <div className={styles.container}>
    <div className={styles.box}>
      <img src={cadastro} /> 
      
     <form className={styles.form}>
      
     <label>Nome</label><br/>
         <input type="text" /><br/>
      <label>Email</label><br/>
         <input type="text" /><br/>
      <label>Senha</label><br/>
         <input type="password" /><br/>
      <label>Confirme a senha</label><br/>
         <input type="password" /><br/><br/>
      <button style={{background:"#660d0d", width:"150px", height:"25px", padding:"6px"}}><p>CADASTRAR</p></button><br/>
     </form>
    </div>
   </div>
  <Footer/>
  </>
)




}