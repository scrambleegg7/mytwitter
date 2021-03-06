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


class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false,
        };

    }

    handleChange = name => event => {
        this.setState({ error: "" });
        this.setState({ [name]: event.target.value });
    };    


    hanldeSubmit = (e) => {
        
        e.preventDefault();
        this.setState({ loading: true });
        
        const { email, password } = this.state;

        console.log("signin state:", this.state )
        const user = {
            email,
            password
        };        
    }

    loginForm = (classes) => (

        <Paper className={classes.padding}>
        <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Face />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="email" label="Email" type="email" fullWidth autoFocus required  onChange={this.handleChange("email")} />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Fingerprint />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="password" label="Password" type="password" fullWidth required  onChange={this.handleChange("password")} />
                </Grid>
            </Grid>
            <Grid container alignItems="center" justify="space-between">
                <Grid item>
                    <FormControlLabel control={
                        <Checkbox
                            color="primary"
                        />
                    } label="Remember me" />
                </Grid>
                <Grid item>
                    <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary"  component={Link} to={"/forgetpass"} >Forgot password ?</Button>
                </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.hanldeSubmit}  >Login</Button>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Typography variant="h3">OR</Typography>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} component={Link} to={"/signup"}  >SignUp</Button>
            </Grid>


        </div>
    </Paper>

    );



    render() {
        
        const { classes } = this.props;

        return (
            <div>
                <Container component="main" maxWidth="md">
                        {this.loginForm(classes) }
                </Container>
             </div>
        );
        
    }

}


export default withStyles(styles)(SignIn);