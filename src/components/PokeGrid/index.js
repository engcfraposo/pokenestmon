import React, { useState, useEffect } from 'react';
import PokeCardList from '../PokeCardList';
import { Container, Spinner } from 'react-bootstrap';
import axios from 'axios';
import nest from '../../services/nest.json'

function PokeGrid({hasfilter, select, shinies}){
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true);

    const pokedex = () =>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=649`)
        .then(function (response) {
          const { data } = response;
          const {results} = data
          return setPokemon(results);
        })
        .catch(function (error) {
          setPokemon(false);
        });  
    }

       
        const hasSelect = nest.pokemon
        .filter((pokes) => pokes.region.toLowerCase().indexOf(String(select.toLowerCase())) > -1)
        .filter((pokes) => pokes.shiny.toLowerCase().indexOf(String(shinies.toLowerCase())) > -1)

        
      
    
    useEffect(() => {
        setLoading(false)
        pokedex()
        if(pokemon.length > 0){
          setLoading(true)
        } else {
          setLoading(false)
        }
    }, [pokedex, pokemon]);

    
    const filtro = pokemon
    .filter((poke) => poke.name.toLowerCase().indexOf(String(hasfilter.toLowerCase())) > -1)
    
    
  return (
    <div className="city">
    <Container fluid>
    {loading 
    ? (
      <>
        {filtro.length > 0
        ?(
        <div className="grid-container">
          {filtro.map((pokedex, index) => 
          hasSelect.map((filterPoke) => 
          pokedex.name.toLowerCase() === String(filterPoke.name).toLowerCase() 
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
          ))}
        </div>
      )
        :(
          <div className="grid-container">
            {pokemon.map((pokedex, index) => 
            nest.pokemon.map((filterPoke) => 
            pokedex.name.toLowerCase() === 
            String(filterPoke.name).toLowerCase()
              ?(
                  <PokeCardList
                  pokedex={pokedex}
                  index={index}
                  id={filterPoke.id}
                  shiny={filterPoke.shiny}
                  />
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

export default PokeGrid