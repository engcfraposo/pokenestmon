import React, { useState, memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import GoogleAd from 'react-google-ad';
import moment from 'moment';
import Countdown from "react-countdown";
import './styles.scss';
import PokeGrid from '../../components/PokeGrid';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import {icons, regions} from '../../services/nest';

const imageUrl = "https://cdn.bulbagarden.net/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png";

function Main() {
    const [, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [select, setSelect] = useState('');
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
        <img src={imageUrl} alt="Logo" className="logo-pokemon" />
        <input
          onKeyPress={() => handleClick()}
          placeholder="Buscar por pokemon"
          type="text"
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
          id="search"
        />
         <select onChange={(event) => setSelect(event.target.value)}>
              <option key="" value="">
                Todos
              </option>
              {regions.map((option) => (
                <option key={option.region} value={option.region}>
                  {option.region}
                </option>
              ))}
        </select>
      </div>
     
      
    </div>
    {!scroll
          ?(
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
              É muito simples! Basta clicar em um dos botões de opção que irá copiar
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
          )
          :(
            <div className="main-last" id="main-last">
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
            <p>Proxima migração de ninho</p>
          </Row>
            <Row className="default">
            <Countdown date={moment('30/09/2020 23:59:59', 'DD/MM/YYYY hh:mm:ss')} renderer={renderer} />
          </Row>
          <Row className="default">
            <GoogleAd client="ca-pub-2532392971203416" slot="xxx" format="xxx" />
          </Row>  
          <Row className="default">
            {icons.map((icon, index)=>(
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
        isLoading={value => setLoading(value)} 
        />
      <Footer />
      {scroll?(<ScrollToTop />):(false)}
      </div>
  </div>
</>
  );
}

export default memo(Main);

