import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.scss';

function Footer() {
  return (
    <Container fluid className="footer">
    <div>
     Desenvolvido por: <a href="http://github.com/engcfraposo">@engcfraposo</a>
    </div>
    </Container>
  );
}

export default Footer;