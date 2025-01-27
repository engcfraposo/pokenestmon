import React, { useState, memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';
import Countdown from "react-countdown";
import './styles.scss';
import PokeGrid from '../../components/PokeGrid';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import region from '../../services/region.json';
import icons from '../../services/icons.json';

function Main() {
    const [filter, setFilter] = useState('');
    const [select, setSelect] = useState('');
    const [shinies, setShinies] = useState("true")
    const [disponible, setDisponible] = useState("nothing")
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
      
      const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return (
           <p className="clean">
              0 dias, 0 Horas, 0 Minutos, 0 Segundos.
            </p>
          );
        } else {
          // Render a countdown
          return (
           <p className="clean">
              {days} dias, {hours} Horas, {minutes} Minutos, {seconds} Segundos.
            </p>
          );
        }
      };

  return (
      <>
    <div className="main">
    <div className="main-first">
      <div className={`ajuste${scroll === true ? ' full' : ''}`}>
        <img src={icons.pokeball} alt="Logo" className="logo-pokemon" />
        <input
          onKeyPress={() => handleClick()}
          placeholder="Buscar por pokemon"
          type="text"
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
          id="search"
        />
      {!scroll?(
        <>
        <select onChange={(event) => setSelect(event.target.value)}>
                <option value="">
                  Regiões
                </option>
                {region.local.map((option) => (
                  <option key={option.region} value={option.region}>
                    {option.region}
                  </option>
                ))}
          </select>
          <select onChange={(event) => setShinies(event.target.value)}>
                <option value={"true"}>
                  Só Shinies
                </option>
                  <option value={""}>
                    Todos
                  </option>
          </select>
          <select onChange={(event) => setDisponible(event.target.value)}>
              <option value={"nothing"}>
                Disponiveis
              </option>
                <option value={""}>
                  Todos
                </option>
        </select>
        </>
      ):(
        <div>
      <select onChange={(event) => setSelect(event.target.value)}>
              <option value="">
                Regiões
              </option>
              {region.local.map((option) => (
                <option key={option.region} value={option.region}>
                  {option.region}
                </option>
              ))}
        </select>
        <select onChange={(event) => setShinies(event.target.value)}>
              <option value={"true"}>
                Só Shinies
              </option>
                <option value={""}>
                  Todos
                </option>
        </select>
         <select onChange={(event) => setDisponible(event.target.value)}>
              <option value={"nothing"}>
                Disponiveis
              </option>
                <option value={""}>
                  Todos
                </option>
        </select>
      </div>
      )}
      
      </div>  
    </div>
    {!scroll
          ?(
            <div className="main-last">
        <Col className="text-center">
          <Row className="default">
            {icons.pokemon.map((icon, index)=>(
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
              É muito simples! Basta clicar em um dos botões de opção que irá copiar
              as coordenadas.
            </p>
          </Row>
          <Row className="default">
            {icons.pokemon.map((icon, index)=>(
              <img key={index} src={icon.url} alt={icon.url}/>
            ))}
          </Row>
        </Col>
      </div>
          )
          :(
            <div className="main-last" id="main-last">
        <Col className="text-center">
          <Row className="default">
            {icons.pokemon.map((icon, index)=>(
              <img key={index} src={icon.url} alt={icon.url}/>
            ))}
          </Row>
          <Row className="default">
            <p className="clean">Ninhos de Pokemon GO</p>
          </Row>
            <Row className="default">
            <p>Proxima migração de ninho</p>
          </Row>
            <Row className="default">
            <Countdown date={moment('15/10/2020 23:59:59', 'DD/MM/YYYY hh:mm:ss')} renderer={renderer} />
          </Row>
          <Row className="default">
          {icons.pokemon.map((icon, index)=>(
              <img key={index} src={icon.url} alt={icon.url}/>
            ))}
          </Row>
        </Col>
      </div>
          )}
      <div className={scroll === true ? ' city city-scroll' : 'city'} id="city">
      <PokeGrid 
        hasfilter={filter}
        select={select}
        shinies={shinies}
        disponible={disponible}  
        />
      <Footer />
      {scroll?(<ScrollToTop />):(false)}
      </div>
      <div id="awn-z3764731"></div>
  </div>
</>
  );
}

export default memo(Main);

