import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.scss';

function Footer() {
  return (
    <Container fluid className="footer">
    {/*<img src={NewYork} alt="background" />*/}
    <div>
     Desenvolvido por: <a href="http://github.com/engcfraposo">@engcfraposo</a>
    </div>
    <ins className="adsbygoogle"
     data-ad-client="ca-pub-2532392971203416"
     data-ad-slot="4048427238"
     data-ad-format="auto"
     data-full-width-responsive="true">
     </ins>
    </Container>
  );
}

export default Footer;