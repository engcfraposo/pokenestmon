import React from 'react';
import { toast } from 'react-toastify';
import { ButtonBase } from '@material-ui/core';
import {coordinates} from '../../services/nest';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './styles.scss';


export default function PokeCardList({ pokedex, id, shiny }) {

    
  return ( 
          <>
            <div
            key={pokedex.name}
            className="grid-items"
          >
                <div className="grid-box">
                <img src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`} alt={pokedex.name}  />
                  <strong className="wrap">{id} - {pokedex.name.toUpperCase()}{shiny?("✨"):(false)}</strong>
                {coordinates.map((coord) => coord.name.toLowerCase() === pokedex.name
                ?(
                  <>
                    {coord.coordinates.map((region, index) => region.length > 0
                       ?(
                        <CopyToClipboard key={index}text={region}>
                          <ButtonBase onClick={() => toast.success('Copiado')}>
                            Opção {index+1}
                          </ButtonBase>
                        </CopyToClipboard>
                       )
                       :(false)
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

