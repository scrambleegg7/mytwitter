import React from 'react';

import { Typography, withStyles} from '@material-ui/core';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentIcon from '@material-ui/icons/Comment';
import ListItemIcon from '@material-ui/core/ListItemIcon';


import EditDialog from './EditDialog';

import CommentDialog from './CommentDialog';


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
    },
    tweetButton: {
        marginTop: theme.spacing.unit,
    },
});


const  TweetMenu =(props) => {

    const { isValidUserId,
            open,
            openComment,
            onRemovePostItem,
            onUpdatePostItem,
            onUpdateCommentItem,
            anchorEl,
            MenuhandleClose, 
            handleClickOpenEdit,
            handleClickOpenComment,
            Transition, 
            handleClose,
            text, comment,
            openEdit, 
            handleCloseEdit,
            handleCloseComment,
            handleChangeEditText,
            handleChangeCommentText,

                } = props;    
    
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
                    <MenuItem onClick={handleClickOpenEdit}>
                        <ListItemIcon>
                            <EditIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Edit</Typography>
                    </MenuItem>
                    <MenuItem onClick={onRemovePostItem}>
                        <ListItemIcon>
                            <DeleteIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Delete</Typography>
                    </MenuItem>
                </Menu>
                        :
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={MenuhandleClose}
                >
                <MenuItem onClick={handleClickOpenComment}>
                    <ListItemIcon>
                        <CommentIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Comment</Typography>
                </MenuItem>

                </Menu>
            }

            <CommentDialog 
                openComment={openComment} 
                Transition={Transition} 
                MenuhandleClose={MenuhandleClose} 
                comment={comment ? comment : ""} 
                handleCloseComment={handleCloseComment} 
                onUpdateCommentItem={onUpdateCommentItem}
                handleChangeCommentText={handleChangeCommentText}
             />



            <EditDialog 
                openEdit={openEdit} 
                Transition={Transition} 
                MenuhandleClose={MenuhandleClose} 
                text={text} 
                handleCloseEdit={handleCloseEdit} 
                onUpdatePostItem={onUpdatePostItem}
                handleChangeEditText={handleChangeEditText}
             />
        </div>
    );
}

export default withStyles(styles)(TweetMenu);