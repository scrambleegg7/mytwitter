import React from 'react';
import {Button,TextField, withStyles,} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const EditDiaglog = (props) => {

    const { openEdit, 
            Transition, 
            MenuhandleClose, 
            text, 
            handleCloseEdit, 
            onUpdatePostItem, 
            handleChangeEditText} = props;

    return (

        <Dialog aria-labelledby="form-dialog-title"
            open={openEdit}
            TransitionComponent={Transition}
            keepMounted
            fullWidth
            maxWidth={"md"}
            onClose={MenuhandleClose}
        >
            <DialogTitle id="alert-dialog-slide-title">Edit message</DialogTitle>
            <form>
            <DialogContent>
            <DialogContentText>
                please edit contents and press update button. 
            </DialogContentText>
            
            <TextField
                autoFocus
                margin="dense"
                id="text"
                multiline
                type="text"
                fullWidth
                defaultValue={text || null}
                onChange={handleChangeEditText("text")}
            />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleCloseEdit} color="primary">
                    Cancel
                </Button>
                <Button onClick={onUpdatePostItem} color="primary">
                    Update
                </Button>
            </DialogActions>
            </form>
        </Dialog>            
    )

}


export default EditDiaglog;
