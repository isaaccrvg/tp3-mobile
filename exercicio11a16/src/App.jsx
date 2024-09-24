import React from "react";
import Menu from "./Menu";
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
import './global.css';

function App() {
  return (
    <div className="container">
      <div>
        <Menu />
        <div id="inicio">
          <h1>Início</h1>
          <p>Bem-vindo ao nosso site!</p>
        </div>
        <div id="servicos">
          <h2>Serviços</h2>
          <p>Confira nossos serviços.</p>
        </div>
        <div id="sobre">
          <h2>Sobre</h2>
          <p>Conheça mais sobre nós.</p>
        </div>
        <div id="contato">
          <h2>Contato</h2>
          <p>Entre em contato conosco.</p>
        </div>
        <Hero />
        <Main />
      </div>
      <h1>A Closer Look at the adidas Originals YEEZY Boost 350 V2</h1>
      <p>
        We’re getting closer to the drop date.
      </p>
      <p>
        As the adidas Originals YEEZY 350 V2 in a “SOLAR RED/STEEPLE GRAY/BELUGA” colorway is launching in a few days, we take a closer look at the highly-anticipated silhouette. The upper is constructed with the use of three Primeknit yarns – hence the name - along with an internal Three Stripes detail, a reinforced toe box, and a semi-transparent TPU outsole with BOOST Technology. The added eye-catching orange stripe on the lateral side boasts a “SPLY – 350″ stamp along the aforementioned stripe. Fans can expect this sneaker to officially launch on September 24 at stockists such as HBX.
      </p>
      <a href="https://i1.wp.com/hypebeast.com/image/2016/09/yeezy-350-v2-closer-look-2.jpg?quality=95&w=1755" target="_blank" rel="noopener noreferrer">

      </a>
      <Footer />
    </div>
  );
}

export default App;
