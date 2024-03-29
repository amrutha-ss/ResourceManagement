import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Year from "./components/Year";
import CreateEmployee from "./components/CreateEmployee";
// import EmployeeData from './components/EmployeeData';
// import MReactTable from './components/MaterialReactTable';
const myTheme = createTheme({
  typography: {
    fontFamily: "Avenir Next ",
  },
});

const useStyles = makeStyles({
  yearAndEmployee: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 10% 0 10%",
    fontFamily: "Avenir Next",
  },
  main: {
    display: "flex",
    flexDirection: "column",
  },
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
        {/* <Box>
          <MReactTable /> 
        <EmployeeData employeeRefetch={employeeRefetch} setEmployeeRefetch={setEmployeeRefetch} /> 
         </Box> */}
      </Box>
    </ThemeProvider >
  );
};

export default ResourceManagement;
