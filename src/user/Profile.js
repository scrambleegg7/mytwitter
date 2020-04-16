import React, {Component} from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Container } from '@material-ui/core';
import { Face,  Https } from '@material-ui/icons';
import PaletteIcon from '@material-ui/icons/Palette';

import Typography from "@material-ui/core/Typography";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//import Link from '@material-ui/core/Link';

import { Link, Redirect } from "react-router-dom";

const styles = theme => ({

    paper: {
        marginTop: 100,
        display: "flex",
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },    

    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});


class Profile extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        console.log(this.props.user);
        

        return (
            <div>
                <Typography variant="h2">Profile Page</Typography>
                <Typography variant="body2">body</Typography>

            </div>
        )
    }

}


export default withStyles(styles)(Profile);
