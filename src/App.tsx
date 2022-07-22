import React from 'react';
import logo from './logo.svg';
import './App.css';

import TextField from '@mui/material/TextField';

function App() {

	const search = () => {

	}


  return (
    <div>
      <TextField
				variant='filled'
				size='small'
				label="Search for coin..."
      >
			<button onClick={search}></button>


      </TextField>
    </div>
  );
}

export default App;
