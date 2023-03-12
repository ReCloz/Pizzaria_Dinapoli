import React from 'react';
import styles from './Loginform.module.css';
import NavBar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import login from '../../assets/login.png'



export default function Login() {

return(
   <>

  <NavBar/>
   <div className={styles.container}>
    <div className={styles.box}>
      <img src={login} /> 
      
     <form className={styles.form}>
      
      
      <label>Email</label><br/>
         <input type="text" /><br/>
      <label>Senha</label><br/>
         <input type="password" /><br/><br/>
      <button style={{background:"#660d0d", width:"150px", height:"25px", padding:"6px"}}><p>ENTRAR</p></button><br/>

       <p className={styles.senha}>Esqueceu a senha?</p>
       <p className={styles.cadastro}>Ainda não é cadastrado? <Link to="/" className={styles.link}>Cadastre-se</Link></p>
     </form>
    </div>
   </div>
  <Footer/>
  </>
)




}