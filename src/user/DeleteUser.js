import React, {Component} from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Container } from '@material-ui/core';

import red from '@material-ui/core/colors/red';

import { Redirect } from 'react-router-dom';

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


class DeleteUser extends Component {

    constructor(props) {
        super(props);
    }

    deleteConfirmed = () => {
        let answer = window.confirm("Are you seriously sure you want to delete your account ?")

        const { data } = this.props;

        const user = {
            userId: data.user._id,
            token: data.token
        }

        if (answer) {
            console.log("DeleteUser user -> ", user)
            this.props.removeUser(user)
        }
    }

    render () {
        
        const danger = red[500]; // #F44336

        const {userError} = this.props;
        //if (userError === "remove user_successed") {
        //    return <Redirect  to="/"   />
        //}

        return (
            <Grid container justify="right" style={{ marginTop: '20px' }}>
                <Button color="secondary" variant="contained" style={{ textTransform: "none" }} onClick={this.deleteConfirmed}  >Delete</Button>
            </Grid>

        )
    }

}


export default withStyles(styles)(DeleteUser);