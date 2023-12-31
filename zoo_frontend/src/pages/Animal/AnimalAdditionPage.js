import Appbar from '../../components/Common/Appbar';
import AddAnimal from '../../components/Animal/AddAnimal';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
//import { Link } from 'react-router-dom';
function animalAddition() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <AddAnimal />
      </div>
    </LocalizationProvider>
  );
}

export default animalAddition;