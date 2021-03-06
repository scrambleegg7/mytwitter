import React, {Component} from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Container } from '@material-ui/core';
import { Face,  Https } from '@material-ui/icons';
import PaletteIcon from '@material-ui/icons/Palette';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



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


class EditUser extends Component {

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
                    
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="lastname" label="姓" type="text" fullWidth autoFocus required  onChange={this.handleChange("lastname")} />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="firstname" label="名" type="text" fullWidth autoFocus required  onChange={this.handleChange("firstname")} />
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
                                <MenuItem value="">
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
                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.hanldeSubmit}  >Edit</Button>
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


export default withStyles(styles)(EditUser);