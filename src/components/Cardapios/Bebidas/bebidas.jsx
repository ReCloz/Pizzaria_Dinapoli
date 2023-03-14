import React from "react";
import styles from "./bebidas.module.css";
import NavBar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import refrigerante from "../../../assets/refrigerante.png";
import limonada from "../../../assets/limonada.png";
import suco from "../../../assets/suco.png";
//import { FaAmazonPay } from "react-icons/fa";

export default function Bebidas() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.box1}>
        <h2> Bebidas</h2>
            <br />
          <div className={styles.menu}>
            
            <div className={styles.cardItens}>
              <img className={styles.img} src={refrigerante} />
              <figcaption>
                <p className={styles.bebida}>Refrigerante</p>
                <p className={styles.preco}>R$ 07.00</p>
              </figcaption>
            </div>

            <div className={styles.cardItens}>
              <img className={styles.img} src={limonada} />
              <figcaption>
                <p className={styles.bebida}>Limonada Rosa</p>
                <p className={styles.preco}>R$ 10.00</p>
              </figcaption>
            </div>

            <div className={styles.cardItens}>
              <img className={styles.img} src={suco} />
              <figcaption>
                <p className={styles.bebida}>Suco</p>
                <p className={styles.preco}>R$ 07.00</p>
              </figcaption>
            </div>
          </div>
        </div>

        <div className={styles.box2}>
           <h3>Carrinho</h3>

        </div>
         
      </div>
      <Footer />
    </>
  );
}
