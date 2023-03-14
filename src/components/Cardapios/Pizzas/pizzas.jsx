import React from "react";
import styles from "./pizzas.module.css";
import NavBar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import pizza1 from "../../../assets/pizza1.png";
import pizza2 from "../../../assets/pizza2.png";
import pizza3 from "../../../assets/pizza3.png";

export default function Massas() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.box1}>
        <h2> Massas</h2>
            <br />
          <div className={styles.menu}>
            

            <div className={styles.cardItens}>
              <img className={styles.img} src={pizza1} />
              <figcaption>
                <p className={styles.bebida}>Pizza Napolitana</p>
                <p className={styles.preco}>R$ 32.00</p>
              </figcaption>
            </div>

            <div className={styles.cardItens}>
              <img className={styles.img} src={pizza2} />
              <figcaption>
                <p className={styles.bebida}>Pizza Calabresa</p>
                <p className={styles.preco}>R$ 32.00</p>
              </figcaption>
            </div>

            <div className={styles.cardItens}>
              <img className={styles.img} src={pizza3} />
              <figcaption>
                <p className={styles.bebida}>Pizza Mussarela</p>
                <p className={styles.preco}>R$ 32.00</p>
              </figcaption>
            </div>

          </div>
        </div>

        <div className={styles.box2}></div>
        
      </div>
      <Footer />
    </>
  );
}
