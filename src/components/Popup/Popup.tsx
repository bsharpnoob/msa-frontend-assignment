import React,{FC,useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../Popup/Popup.styles.css";
import {Line} from "react-chartjs-2";
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const Popup: React.FC<any> = ({coin}) => {
  const [open, setOpen] = useState(false);
  const [retrievedData,setRetrievedData] = useState<undefined | any>(undefined);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  
  useEffect(() => {
  
      
    axios.get(`${BASE_URL}/${coin.name.toLowerCase()}/${URL_INFO}`)
    .then((res) => {
      setRetrievedData(res.data);
    
    })
    .catch((error) => {
      console.log(error);
    })
    
  },[coin])

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const BASE_URL = "https://api.coingecko.com/api/v3/coins"
  const URL_INFO = "market_chart?vs_currency=nzd&days=30"


  


  const getCleanData = () => {
    let retrievedDataCleaned: number[] = [];
    if(retrievedData) {
      for(let i = 0; i < retrievedData.prices.length; i++) {
        retrievedDataCleaned = [...retrievedDataCleaned,retrievedData.prices[i][1]];
      }
    }

    return retrievedDataCleaned;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${coin.name} 30 day chart`,
      },
    },
  };


const labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

const data2 = {
  labels,
  datasets: [
    {
      label: 'Prices(NZD)',
      data: getCleanData(),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
    
  ],
};



  return (
    <div>
      <Button onClick={handleOpen} className="popup-button">View</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="coin-display">
            <Typography id="modal-modal-title" variant="h6" component="h1">
              {coin.name}
            </Typography>
          
            <img src={coin.image.small}></img>
          </div>
          <div className='coin-info'>
            <h2>Ranking: {coin.market_cap_rank}</h2>
            <p>ATH: {coin.market_data.ath.nzd}</p>
            <p>Current Price: {coin.market_data.current_price.nzd}</p>

          </div>
          <div>
            <Line
              data={data2}
              options={options}
            />

            
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default Popup;
