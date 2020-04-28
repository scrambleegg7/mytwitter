import React, {Component} from 'react';
import { Paper, withStyles, Grid, TextField, Button,  
             Container, Typography } from '@material-ui/core';
import { Fingerprint } from '@material-ui/icons';

//import { Link, Redirect } from "react-router-dom";
import {Link} from "@material-ui/core";
 
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


class ResetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            newpassword: " ",
            newpassword2: "",
            error: "",
            loading: false,
            isValidNewPassword: false
        };

    }

    handleChange = name => event => {
        this.setState({ error: "" });
        this.setState({ [name]: event.target.value });


        //console.log("newpassword same as confirmed pasword ", flag)
    };    

    componentDidMount = () => {

        console.log("ResetPassword componentDidMount -> ",this.props.data);
        const user = this.props.data.user;

        if (user) {
            this.setState({
                email: user.email,
            })
        }
    }


    hanldeSubmit = (e) => {
        
        e.preventDefault();
        this.setState({ loading: true });
        
        const { email, newpassword } = this.state;

        const credential = {
            email: email,
            newpassword
        }
        console.log("ResetPassword handleSubmit -> ", credential)
        this.props.resetPassword(credential);
    }

    authentication = (token) => {
        if (typeof window  != "undefined") {

            console.log("save localStorage", token)
            //localStorage.setItem("jtw", token);
            //this.setState(   
            //    {redirectToReferer: true,}
            //)
        }
    }

    loginForm = (classes, authError, passValidflag) => (

        <Paper className={classes.padding}>
        <div className={classes.margin}>

            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Fingerprint />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="newpassword" label="new Password" type="password" fullWidth required  onChange={this.handleChange("newpassword")} />
                </Grid>
            </Grid>

            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Fingerprint />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="newpassword2" label="Confirm new Password" type="password" fullWidth required  onChange={this.handleChange("newpassword2")} />
                </Grid>
            </Grid>


            <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button disabled={passValidflag}  variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.hanldeSubmit}  >Reset Password</Button>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '2x' }}>
                <Typography component={'span'}  variant="body2" color="secondary">{ authError ?  <p> {authError}  </p>  : null      } </Typography>
            </Grid>

            <Link  href={"/"}>to Post Board screen</Link>


        </div>
        </Paper>

    )



    render() {
        
        const { classes,authError } = this.props;

        const isInValid = this.state.newpassword !== this.state.newpassword2;
        console.log("newpassword same as confirmed pasword ", this.state.isValidNewPassword)     

        return (
            <div>
                <Container component="main" maxWidth="md">
                    {this.loginForm( classes, authError, isInValid ) }
                </Container>
             </div>
        );
        
    }

}


export default withStyles(styles)(ResetPassword);
