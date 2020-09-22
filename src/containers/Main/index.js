import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './styles.scss';
import PokeGrid from '../../components/PokeGrid';
import Footer from '../../components/Footer';

const icons = [
  {url: "https://cdn.bulbagarden.net/upload/6/66/025MS8.png"},
  {url: "https://cdn.bulbagarden.net/upload/2/21/001MS8.png"},
  {url: "https://cdn.bulbagarden.net/upload/d/dc/004MS8.png"},
  {url: "https://cdn.bulbagarden.net/upload/d/dc/007MS8.png"},
]

function Main() {
    const [, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [scroll, setScroll] = useState();
    const [number, setNumber] = useState(0);

    window.onscroll = (oEvent) => {
        const el = document.getElementById('search');
    
        if (el) {
          // eslint-disable-next-line no-unused-expressions
          if (el.offsetTop + 45 < window.pageYOffset) {
            setScroll(true);
            if (number > window.pageYOffset) {
              setScroll(false);
            }
          } else {
            setNumber(window.pageYOffset);
            setScroll(false);
          }
        }
      };

      function handleClick() {
        const click = document.getElementById('list');
    
        if (click) {
          // eslint-disable-next-line no-unused-expressions
          window.scroll(0, click.offsetTop);
        }
      }

  return (
      <>
    <div className="main">
    <div className="main-first">
      <div className={`ajuste${scroll === true ? ' full' : ''}`}>
      <img src={'https://cdn.bulbagarden.net/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png'} alt="Logo" className="logo-pokemon" />
        <input
          onKeyPress={() => handleClick()}
          placeholder="Buscar por pokemon(Em implementação)"
          type="text"
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
          id="search"
        />
      </div>
      
    </div>
      <div className="main-last">
        <Col className="text-center">
          <Row className="default">
            {icons.map((icon, index)=>(
              <img key={index} src={icon.url} alt={icon.url}/>
            ))}
          </Row>
          <Row className="default">
            <p className="clean">Ninhos de Pokemon GO</p>
          </Row>
          <Row className="default">
            <p>Veja todos os Pokemons e seus ninhos </p>
          </Row>
          <Row className="default">
            <p className="clean">
              É muito simples! Basta clicar em um dos botões de opção que irar copiar
              as coordenadas.
            </p>
          </Row>
          <Row className="default">
            {icons.map((icon, index)=>(
              <img key={index} src={icon.url} alt={icon.url}/>
            ))}
          </Row>
        </Col>
      </div>
      <div className={scroll === true ? ' city city-scroll' : 'city'}>
      <PokeGrid hasfilter={filter} isLoading={value => setLoading(value)} />
      <Footer />
      </div>
  </div>
</>
  );
}

export default Main;

