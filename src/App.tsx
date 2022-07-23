import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import TextField from '@mui/material/TextField';
import Card from './components/Card/Card';
import axios from 'axios';

function App() {

	const [coin,setCoin] = useState("");
	const [coinInfo,setCoinInfo] = useState<undefined | any>(undefined)

	const BASE_URL = "https://api.coingecko.com/api/v3/coins"
	
	const search = () => {
		axios.get(`${BASE_URL}/${coin}`)
		.then((res) => {
			setCoinInfo(res.data);
			
		
		})
		.catch((error) => {
			setCoinInfo(null);
		})
	}


  return (
    <div>
      <TextField
				variant='filled'
				size='small'
				label="Search for coin..."
				onChange={(e) => setCoin(e.target.value)}
      />
      
		<button onClick={search}>Search</button>

		{coinInfo === undefined || coinInfo === null ? <p>Coin not found!</p> : (
			<Card coin={coinInfo} />
		)}



			
    </div>
  );
}

export default App;
