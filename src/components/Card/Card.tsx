import React,{FC, useEffect, useState} from 'react';
import "../Card/Card.styles.css"
import Popup from "../Popup/Popup"
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';


const Card: React.FC<any> = ({coin}) => {
  const BASE_URL = "https://api.coingecko.com/api/v3/coins"
  const URL_INFO = "market_chart?vs_currency=nzd&days=30"

  

  

  return (
    <div className='container'>
   
      <h1>{coin.name}</h1>
      <img src={coin.image.small}></img>

      <Popup coin={coin}></Popup>
     
    </div>
  );

}

export default Card;