import React from "react";
import styles from "./massas.module.css";
import NavBar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import massa1 from "../../../assets/massa1.png";
import massa2 from "../../../assets/massa2.png";
import massa3 from "../../../assets/massa3.png";

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
              <img className={styles.img} src={massa1} />
              <figcaption>
                <p className={styles.bebida}>Macarrão Parisiense</p>
                <p className={styles.preco}>R$ 20.00</p>
              </figcaption>
            </div>

            <div className={styles.cardItens}>
              <img className={styles.img} src={massa2} />
              <figcaption>
                <p className={styles.bebida}>Macarrão Bolonhesa</p>
                <p className={styles.preco}>R$ 20.00</p>
              </figcaption>
            </div>

            <div className={styles.cardItens}>
              <img className={styles.img} src={massa3} />
              <figcaption>
                <p className={styles.bebida}>Macarrão ao Molho Napolitano</p>
                <p className={styles.preco}>R$ 20.00</p>
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
