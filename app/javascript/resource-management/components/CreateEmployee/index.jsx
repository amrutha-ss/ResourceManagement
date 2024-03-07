import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Snackbar,
  createTheme,
  ThemeProvider,
  Alert,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const myTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(103, 79, 192)',
    },
    text: {
      primary: 'rgb(103, 79, 192)',
    },
  },
});

const useStyles = makeStyles({
  createButtonStyles: {
    height: '40px',
    width: '200px',
    fontWeight: '700 !important',
    fontFamily: 'Avenir Next !important',
  },
  dailogContent: {
    paddingBottom: '15px',
  },
  textFieldStyles: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(103, 79, 192)',
      },
      '&:hover fieldset': {
        borderColor: 'rgb(103, 79, 192)',
      },
    },
  },
});

function CreateEmployee({ setEmployeeRefetch }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmployeeName('');
  };

  const handleAddEmployee = async () => {
    const data = { emp_name: employeeName };

    await axios
      .post('/api/createEmployee', data)
      .then(() => {
        setSnackbarMessage('Employee created successfully');
        setSnackbarOpen(true);
        setEmployeeRefetch(true);
        setSnackbarSeverity('success');
      })
      .catch(() => {
        setSnackbarMessage('Failed to add employee.');
        setSnackbarOpen(true);
        setSnackbarSeverity('error');
      })
      .finally(() => {
        handleClose();
      });
  };

  const handleInputChange = (event) => {
    setEmployeeName(event.target.value);
  };
  const handleSnackbarClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Button className={classes.createButtonStyles} onClick={handleClickOpen} variant="contained">
        Create Employee
      </Button>
      <Dialog open={open}>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dailogContent}>
            Please enter the name of the employee:
          </DialogContentText>
          <TextField
            className={classes.textFieldStyles}
            label="Employee Name"
            type="text"
            fullWidth
            value={employeeName}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddEmployee} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} variant="filled" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default CreateEmployee;
