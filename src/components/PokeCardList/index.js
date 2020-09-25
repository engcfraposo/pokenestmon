import React from 'react';
import { toast } from 'react-toastify';
import { ButtonBase} from '@material-ui/core';
import styled from 'styled-components';
import {coordinates} from '../../services/nest';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './styles.scss';

const ButtonDisabled = styled(ButtonBase)`
          margin-top: 4px;
          height: 22px;
          width: 100%;
          position: relative;
          font: 10px/14px Quicksand-Bold !important;
          background-color: #ccc !important;
          color: #000 !important;
          border: 1px #000 solid !important;
          border-radius: 10px;
          box-shadow: 0px 3px 6px #00000029;
`;

export default function PokeCardList({ pokedex, id, shiny }) {

    
  return ( 
          <>
            <div
            key={pokedex.name}
            className="grid-items"
          >
                <div className="grid-box">
                <img src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`} alt={pokedex.name}  />
                  <strong className="wrap">nº{id} <br/> {pokedex.name.toUpperCase()}{shiny === "true"?("✨"):(false)}</strong>
                {coordinates.map((coord) => coord.name.toLowerCase() === pokedex.name
                ?(
                  <>
                    {coord.coordinates.map((region, index) => !region.includes("nothing")
                       ?(
                        <CopyToClipboard key={index}text={region}>
                          <ButtonBase onClick={() => toast.success('Copiado')}>
                            Opção {index+1}
                          </ButtonBase>
                        </CopyToClipboard>
                       )
                       :(
                        <ButtonDisabled disabled>
                          Ninho não encontrado
                        </ButtonDisabled>
                       )
                    )}
                  </>
                )
                :(false)
                )}
              </div>

          </div>

          </>
  );
}

