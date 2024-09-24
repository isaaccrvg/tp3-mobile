import React from "react";
import "./menu.css"; 

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
