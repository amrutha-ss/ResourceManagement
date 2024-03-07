import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material';

const myTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(103, 79, 192)',
    },
  },
  typography: {
    fontFamily: 'Avenir Next ',
  },
});

const useStyles = makeStyles({
  yearSelector: {
    '& .MuiOutlinedInput-root': {
      width: '200px',
      height: '40px',
      '& fieldset': {
        borderColor: 'rgb(103, 79, 192)',
      },
      '&:hover fieldset': {
        borderColor: 'rgb(103, 79, 192)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(103, 79, 192)',
      },
    },
    '& svg': {
      color: 'rgb(103, 79, 192)',
    },
    '& label': {
      color: 'rgb(103, 79, 192)',
    },
    '& input': {
      color: 'rgb(103, 79, 192)',
    },
  },
});

function Year() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={myTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className={classes.yearSelector}
          views={['year']}
          label="Select Year"
          minDate={dayjs('2000-04-17')}
          maxDate={dayjs('2024-04-17')}
          slotProps={{ textField: { size: 'small' } }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default Year;
