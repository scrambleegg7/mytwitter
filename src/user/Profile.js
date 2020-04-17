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
        super(props);

        this.state = {
            firstname: "" ,
            lastname: "",
            nickname: "",
            email: "",
            password: "",
            password2: "",
            error: "",
            backgroundColor: "",
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
        
        const { firstname, lastname, backgroundColor } = this.state;
        const { data } = this.props

        const user = {
            firstname,
            lastname,
            backgroundColor,
            userId: data.user._id,
            token: data.token,
        };    
        
        //console.log("Profile user to be submit.", user )
        //console.log("Profile data", data )
        
        this.props.updateUser(user);
    }

    componentDidMount = () => {

        console.log(this.props.user);
        const user = this.props.user;

        if (user) {
            this.setState({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                backgroundColor: user.backgroundColor,
            })
        }
    }

    loginForm = (classes, user, authError) => (

        <Paper className={classes.padding}>
        <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="lastname" label="姓" type="text" value={user.lastname} fullWidth autoFocus required  onChange={this.handleChange("lastname")} />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="firstname" label="名" type="text" value={user.firstname} fullWidth autoFocus required  onChange={this.handleChange("firstname")} />
                </Grid>
            </Grid>

            <Grid container alignItems="center" justify="space-between">
                <Grid item>
                    <PaletteIcon />
                </Grid>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">Color</InputLabel>
                            <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={this.state.backgroundColor}
                            onChange={this.handleChange("backgroundColor") }
                            >
                                <MenuItem value={user.backgroundColor}>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Blue</MenuItem>
                                <MenuItem value={20}>Pink</MenuItem>
                                <MenuItem value={30}>Yellow</MenuItem>
                                <MenuItem value={40}>Grey</MenuItem>
                            </Select>
                        <FormHelperText>Some important helper text</FormHelperText>
                    </FormControl>            
                </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.hanldeSubmit}  >Update</Button>    
            </Grid>
            <Grid container justify="center" style={{ marginTop: '2x' }}>
                <Typography component={'span'}  variant="body2" color="secondary">{ authError ?  <p>  {authError}  </p> : null      } </Typography>
            </Grid>



        </div>
    </Paper>

    );    

    render() {


        const user = this.state;
        const {classes, authError} = this.props;

        return (
            <div>
                <Container component="main" maxWidth="md">
                        {this.loginForm(classes, user) }
                </Container>
            </div>
        )
    }

}


export default withStyles(styles)(Profile);
