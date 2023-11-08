import Appbar from '../components/Appbar';
import ChangeTemperature from '../components/ChangeTemperature';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
function ChangeCellTemperaturePage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <ChangeTemperature />
      </div>
    </LocalizationProvider>
  );
}

export default ChangeCellTemperaturePage;