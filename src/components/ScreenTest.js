import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));


const ScreenTest = () => {

    const classes = useStyles();

    return (
        
            <Grid container className={classes.root}>
            <Grid comtainer direction="column" xs={12} md={6} lg={8}>
                Screen Test1 
            </Grid>
            <Grid comtainer direction="column" xs={12} md={6} lg={4}>
                Screen Test2
            </Grid>
            </Grid>
        
    )
}

export default ScreenTest;