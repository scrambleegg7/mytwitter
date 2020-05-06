import React, {Component} from 'react';
import { Paper, withStyles, Grid, TextField, Button,  Container } from '@material-ui/core';
import { Face } from '@material-ui/icons';

import { Link } from "react-router-dom";

const styles = theme => ({

    paper: {
        marginTop: 100,
        display: "flex",
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },
    

    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});


class ForgetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
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
        
        console.log("ForgetPasswords state --> ", this.state )
                
        this.props.forgetPassword(this.state);
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
            <Grid container direction="column" alignItems="flex-end">
                <Grid item xs={8}>

                </Grid>
                <Grid item xs={4}>
                    <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary" component={Link} to={"/signin"}  >SignIn ?</Button>
                </Grid>
            </Grid>

            <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.hanldeSubmit}  >Password Reset</Button>
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


export default withStyles(styles)(ForgetPassword);