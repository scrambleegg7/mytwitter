import React from 'react';
import {Button,TextField, Typography, withStyles,} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CommentDialog = (props) => {

    const { openComment, 
            Transition, 
            MenuhandleClose, 
            comment, 
            handleCloseComment, 
            onUpdateCommentItem, 
            handleChangeCommentText} = props;

    return (

        <Dialog aria-labelledby="form-dialog-title"
            open={openComment}
            TransitionComponent={Transition}
            keepMounted
            fullWidth
            maxWidth={"md"}
            onClose={MenuhandleClose}
        >
            <DialogTitle id="alert-dialog-slide-title">Comment</DialogTitle>
            <form>
            <DialogContent>
            <DialogContentText>
                please write your comment. 
            </DialogContentText>
            
            <TextField
                autoFocus
                margin="dense"
                id="comment"
                multiline
                type="comment"
                fullWidth
                onChange={handleChangeCommentText("comment")}
            />
            </DialogContent>

            { comment ? comment.map(comm =>  
                (<Typography variant="inherit">   
                    {comm.text}
                </Typography>) 
                
            ) : "" }

            <DialogActions>
                <Button onClick={handleCloseComment} color="primary">
                    Cancel
                </Button>
                <Button onClick={onUpdateCommentItem} color="primary">
                    Comment
                </Button>
            </DialogActions>
            </form>
        </Dialog>            
    )

}


export default CommentDialog;
