import React from 'react';
import GoogleAd from 'react-google-ad';
import './styles.scss';

const style = {
    display: 'block',
}

export function FirstAds() {
  return (
    <div className="ads-left">
                <GoogleAd 
        client="ca-pub-2532392971203416" 
        slot="4048427238" 
        style={style}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
        />  
    </div>
  );
}
