
import React, {useState} from 'react';

import {
    Card, CardHeader,CardMedia,CardContent,CardActions,
    Avatar,Typography,Button,withStyles} from '@material-ui/core';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
    },
    tweetButton: {
        marginTop: theme.spacing.unit,
    },
});


const  TweetMenu =(props) => {

    const {isValidUserId} = props;    
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const editDialog = () => {
        setOpen(false);

    }


    return (
        <div>

            {isValidUserId ?     
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={MenuhandleClose}
                >
                    <MenuItem onClick={MenuhandleClose}>Edit</MenuItem>
                    <MenuItem onClick={onRemovePostItem}>Delete</MenuItem>
                </Menu>
                        :
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={MenuhandleClose}
                >
                    <MenuItem onClick={MenuhandleClose}>comment</MenuItem>
                </Menu>
            }
        </div>
    );
}

export default withStyles(styles)(TweetMenu);