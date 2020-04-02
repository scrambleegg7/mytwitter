import React, {Component} from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, 
            Checkbox, Container, Typography } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';

import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { signOut } from '../store/actions/authActions';



const styles = theme => ({

    paper: {
        marginTop: 100,
        display: "flex",
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },

});


class Logout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false,
        };
    }

    handleLogout = (e) => {

        this.props.signOut();
        
    }
    
    render() {
        const {classes, auth, authError} = this.state;

        console.log( "Logout button", auth  )

        return (

            <div>
                <Button variant="outlined" onClick={this.handleLogout}   >Logout</Button>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch( signOut() )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError

    }
}



export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps) (Logout));