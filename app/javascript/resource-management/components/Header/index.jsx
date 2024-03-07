import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import softSuaveImage from '../../../../assets/images/softsuaveImage.png';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(103, 79, 192)',
    zindex: '9',
  },
  resourceManagementHeader: {
    width: '100%',
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  innerHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: '30px !important',
    fontWeight: '600 !important',
    color: '#fff',
  },
  line: {
    zIndex: '9',
    height: '5px',
    width: '100%',
    background: 'linear-gradient(90deg, rgb(255, 74, 92) 0%, rgb(255, 137, 97) 50%, rgb(255, 74, 92) 100%)',
    marginTop: '0px',
  },
});

function Header() {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.container}>
        <Box className={classes.resourceManagementHeader}>
          <Box className={classes.innerHeader}>
            <Box component="img" src={softSuaveImage} alt="SoftSuave Logo"></Box>
          </Box>
          <Box className={classes.innerHeader}>
            <Typography variant="h4" component="h5" className={classes.heading}>
              Resource Management
            </Typography>
          </Box>
          <Box className={classes.innerHeader}>
            <Avatar>A</Avatar>
          </Box>
        </Box>
      </Box>

      <Box className={classes.line}></Box>
    </Box>
  );
}

export default Header;
