import React from "react";
import style from "./principal.module.css";
import { Link } from "react-router-dom";
import tomate from "../../assets/tomate.svg";

export default function Principal() {
  return (
    <>
      <div className={style.fundo}>
        <div className={style.telainicial}>
          <div className={style.textotelainicial}>
            <h1>Comida Italiana de verdade</h1>
            <h1>na porta da sua casa</h1>
          </div>

          <button className={style.botaocadastro} id="cadastro">
            Cadastre-se
          </button>
          <button className={style.botaoaqui} id="pecaaqui">
            Peça aqui
          </button>

          <div className={style.detalhe}>
            <img src={tomate} />
          </div>
        </div>
      </div>
    </>
  );
}
