import React,{FC, useEffect, useState} from 'react';
import "../Card/Card.styles.css"
import Popup from "../Popup/Popup"
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

interface Coin {
  name: string,
  image: string,
  favourited: boolean
}


const Card: React.FC<Coin> = ({name,image,favourited}) => {
  

  useEffect(() => {
    
  },[])

  const favourite = () => {
    
  }

  return (
    <div className='container'>
      
        <h1>{name}</h1>
        <img src={image}></img>
        <div className="options">
            <Popup name={name} image={image}></Popup>
            
            {favourited && <IconButton ><FavoriteIcon style={{fill:"pink"}}></FavoriteIcon></IconButton>}
            {!favourited && <IconButton ><FavoriteIcon style={{fill:"black"}}></FavoriteIcon></IconButton>}
            

        </div>
    </div>
  );

}

export default Card;