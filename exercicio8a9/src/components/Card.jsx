import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src="https://images.tcdn.com.br/img/img_prod/759560/camisa_vasco_kombat_i_player_home_2020_kappa_masculina_branca_647_1_14f7028ad0d032c974eae89bd171e222.jpg"
        alt="camisa vasco"
      />
      <h2 className={styles.cardTitle}>Camisa vasco 2020</h2>
      <p className={styles.cardDescription}>
      A Camisa do Vasco da Gama 2020 Kappa Masculina! Estilosa com a faixa em diagonal e o escudo que irradia toda a energia e vibração aos corações dos torcedores apaixonados
      </p>
    </div>
  );
};

export default Card;
