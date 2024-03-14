import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Year from './components/Year';
import CreateEmployee from './components/CreateEmployee';
import FetchEmployee from './components/FetchEmployee';

const myTheme = createTheme({
  typography: {
    fontFamily: 'Avenir Next ',
  },
});

const useStyles = makeStyles({
  yearAndEmployee: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 10% 10px 10%',
    fontFamily: 'Avenir Next',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
  },
  fetchEmployeeTable: {
    margin: '15px 10% 10px 10%',
  }
});

const ResourceManagement = () => {
  const classes = useStyles();
  const [employeeRefetch, setEmployeeRefetch] = useState(false);

  return (
    <ThemeProvider theme={myTheme}>
      <Box className={classes.main}>
        <Header />
        <Box className={classes.yearAndEmployee}>
          <Year />
          <CreateEmployee setEmployeeRefetch={setEmployeeRefetch} />
        </Box>
        <Box className={classes.fetchEmployeeTable}>
          <FetchEmployee className={classes.fetchEmployeeTable} employeeRefetch={employeeRefetch} setEmployeeRefetch={setEmployeeRefetch} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ResourceManagement;
