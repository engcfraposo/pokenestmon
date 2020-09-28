import React from 'react';
import ImageLoader from "rc-image-loader";
import './styles.scss';

function PokemonImage({id}) {


  return (
    <div>
    <ImageLoader 
        placeholder={'https://cdn.bulbagarden.net/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png'}
        image={`https://cdn.traction.one/pokedex/pokemon/${id}.png`} 
        renderComponent={({ src }) => (<img className="animated"src={src} alt="pokebola" />)}
        renderLoading={({ src }) => (<img src={src} alt="pokemon" />)}
    >
      {({ src }) => (<img src={src} alt="pokemon" />)}
    </ImageLoader>
  </div>
  );
}

export default PokemonImage;