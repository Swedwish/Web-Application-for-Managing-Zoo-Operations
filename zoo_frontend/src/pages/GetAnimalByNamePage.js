import Appbar from '../components/Appbar';
import GetAnimalByName from '../components/GetAnimalByName';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
//import { Link } from 'react-router-dom';
function GetAnimalByNamePage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <GetAnimalByName />
      </div>
    </LocalizationProvider>
  );
}

export default GetAnimalByNamePage;