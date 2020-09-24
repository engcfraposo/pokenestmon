import React, { useState, useEffect, memo } from 'react';
import PokeCardList from '../PokeCardList';
import { Container, Spinner } from 'react-bootstrap';
import axios from 'axios';
import {coordinates} from '../../services/nest'

function PokeGrid({hasfilter, select}){
    const [pokemon, setPokemon] = useState([])

    const pokedex = () =>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000`)
        .then(function (response) {
          const { data } = response;
          const {results} = data
          return setPokemon(results);
        })
        .catch(function (error) {
          setPokemon(false);
        });  
    }
    
    const hasSelect = coordinates
    .filter((pokes) => pokes.region.toLowerCase().indexOf(String(select.toLowerCase())) > -1)

    useEffect(() => {
        pokedex()
    }, [pokedex]);

    
    const filtro = pokemon
    .filter((poke) => poke.name.toLowerCase().indexOf(String(hasfilter.toLowerCase())) > -1)
    
    
  return (
    <div className="city">
    <Container fluid>
    {pokemon.length> 0 
    ? (
      <>
        {filtro.length > 0
        ?(
        <div className="grid-container">
          {filtro.map((pokedex, index) => 
          coordinates.map((filterPoke) => 
          hasSelect.map((selected) =>
          pokedex.name.toLowerCase() === String(filterPoke.name).toLowerCase() 
          && pokedex.name.toLowerCase() === String(selected.name).toLowerCase()
            ?(
              <div key={index}>
                <PokeCardList
                pokedex={pokedex}
                index={index}
                id={filterPoke.id}
                shiny={filterPoke.shiny}
                />
              </div>
            )
            :(false)
          )))}
        </div>
      )
        :(
          <div className="grid-container">
            {pokemon.map((pokedex, index) => coordinates.map((filterPoke) => pokedex.name.toLowerCase() === String(filterPoke.name).toLowerCase()
              ?(
                <div key={index}>
                  <PokeCardList
                  pokedex={pokedex}
                  index={index}
                  id={filterPoke.id}
                  />
                </div>
              )
              :(false)
            ))}
        </div>
        )
        }
      </>
    )
    :(
      <div className="justify-content text-center">
            <Spinner
              className="spinner-loading"
              as="span"
              animation="border"
              role="status"
              aria-hidden="true"
            />
      </div>
    )}
    </Container>
  </div>
  );
}

export default memo(PokeGrid)