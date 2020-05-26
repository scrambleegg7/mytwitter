import React, {Component} from 'react';
import {  withStyles, Grid,  Button } from '@material-ui/core';

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

    deleteConfirmed = () => {
        let answer = window.confirm("あんた消えてなくなってもええんか ?")

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
        

        return (
            <Grid container  style={{ marginTop: '20px' }}>
                <Button color="secondary" variant="contained" style={{ textTransform: "none" }} onClick={this.deleteConfirmed}  >Delete</Button>
            </Grid>

        )
    }

}


export default withStyles(styles)(DeleteUser);