import Appbar from '../components/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AddFoodRetailer from '../components/AddFoodRetailer'
import React from 'react';
//import { Link } from 'react-router-dom';
function FoodRetailerAddition() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <AddFoodRetailer />
      </div>
    </LocalizationProvider>
  );
}

export default FoodRetailerAddition;