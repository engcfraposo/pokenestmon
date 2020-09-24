import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import './styles.scss';


function ScrollToTop() {
 
  const scrollToDotLine = () => window.scrollTo(0, document.getElementById('search')?.offsetTop || 0);

  return (
    <OverlayTrigger overlay={<Tooltip id="tooltip">Voltar ao topo</Tooltip>}>
      <div
        className={'scroll-to-top'}
        id="scroll-to-top"
        onClick={scrollToDotLine}
      >
        <i className={'icon fas fa-chevron-up'} />
      </div>
    </OverlayTrigger>
  );
};

export default ScrollToTop;
