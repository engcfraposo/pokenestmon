import React from 'react';
import { Container } from 'react-bootstrap';
import AdSense from 'react-adsense';
import './styles.scss';

function Footer() {
  return (
    <Container fluid className="footer">
    <div>
     Desenvolvido por: <a href="http://github.com/engcfraposo">@engcfraposo</a>
    </div>
    {/*<AdSense.Google client="ca-pub-2532392971203416" slot="4048427238" format="auto" responsive />*/}
    </Container>
  );
}

export default Footer;