import React, {Component} from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, 
            Checkbox, Container, Typography } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';

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


class SignOut extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false,
            redirectToReferer: false,
        };
    }

    handleChange = name => event => {
        this.setState({ error: "" });
        this.setState({ [name]: event.target.value });
    };    


    hanldeSubmit = (e) => {
        
        e.preventDefault();
        this.setState({ loading: true });
        
        this.props.signOut();
    }


    loginForm = (classes) => (

        <div className={classes.margin}>
            <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.hanldeSubmit}>Sign Out</Button>
            </Grid>
        </div>

    )


    render() {
        
        const { classes,authError, data, redirectToReferer } = this.props;
        const {loading} = this.state.loading;

        console.log("SignOut autherror", authError)

        return (
            <div>
                <Container component="main" maxWidth="md">
                    {this.loginForm( classes ) }
                </Container>
             </div>
        );
        
    }

}


export default withStyles(styles)(SignOut);