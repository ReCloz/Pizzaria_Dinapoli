import React, {useState} from 'react';
import styles from './Loginform.module.css';
import NavBar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import login from '../../assets/login.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";



export default function Login() {
   const [showPassword, setShowPassword] = useState(false);
   const [password, setPassword] = useState("");

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

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
         <input 
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={handlePasswordChange}
          
         />
         <span
         onClick={toggleShowPassword}
         className={styles.eye}
         >
         {showPassword ? <FaEyeSlash /> : <FaEye  />}
         </span>
        <br/><br/>
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