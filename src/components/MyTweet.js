import React, { Component, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,
        Typography,Button,TextField,withStyles,} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentIcon from '@material-ui/icons/Comment';
import ListItemIcon from '@material-ui/core/ListItemIcon';





import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import Markdown from 'react-markdown';
import colorFrom from '../utils/colors';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MicrolinkCard from '@microlink/react';



const imageUrlRe = /\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/g;

const insertTextAtIndices = (text, obj) => {
    return text.replace(/./g, function(character, index) {
      return obj[index] ? obj[index] + character : character;
    });
  };

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
  
  
const styles = theme => ({
    card: {
        marginBottom: theme.spacing.unit * 2,
        display: 'block',
        transitionDuration: '0.5s',
        
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    content: {
        wordWrap: 'break-word',
        height: '15vw',
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.dark,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

});

//
//MyTweet represents single card containing each post message, which holds created date/user id.
// 

const MyTweet = (props) => {

    const {classes, tweet, data, onRemovePost} = props;

    const postedBy = tweet.postedBy;
    const text = tweet.body;
    const created = tweet.created;
    const id = tweet._id;

    const loginUserId = data.user._id;

    const posterId = postedBy ? postedBy._id : "";
    const posterFirstName = postedBy ? postedBy.firstname : "";
    const posterLastName = postedBy ? postedBy.lastname : "";
    const posterEmail = postedBy ? postedBy.email : "";
    const posterBackGroundColor = postedBy ? postedBy.backgroundColor : "";
    const posterCreated = postedBy ? postedBy.created : "";
    
    const avatarName = posterLastName.charAt(0) + posterFirstName.charAt(0);
    //console.log(avatarName)

    const image = text.match(imageUrlRe);
    const urlMatches = text.match(/\b(http|https)?:\/\/\S+/gi) || [];
    const LinkPreviews = urlMatches.map(link => <MicrolinkCard url={link} />);

    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const [expanded, setExpanded ]  = useState(false);
    const [anchorEl, setAnchorEl ] = useState(null);

    const theme = useTheme();

    const isValidUserId = ( loginUserId ===  posterId );

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenEdit = () => {
        setOpenEdit(true);

    };
    
    const handleCloseEdit = () => {
        setOpenEdit(false);
        MenuhandleClose()
    };

    const MenuhandleClick = (e) => { // 引数追加
        
        setAnchorEl(e.currentTarget);
        setExpanded(!expanded);
        
    };

    const MenuhandleClose = () => {
        setAnchorEl(null);
    }; 

    const onRemovePostItem = () => {

        const credential = {
            postId: id,
            token: data.token,
        }

        let answer = window.confirm("Are you seriously sure you want to delete your message ?")

        setAnchorEl(null);

        if (answer) {
            onRemovePost(credential);
        }

    }
    
    return (

        <Card key={id}
            className={classes.card}
            elevation={8}
            >    
           
            {image && (
                <CardMedia
                className={classes.cardMedia}
                image={image[0]}
                title="An tweet's image"
                />
            )}

            <CardHeader style={{backgroundColor: theme.palette.primary.light,}}
            avatar={
                <Avatar
                style={{
                    backgroundColor: colorFrom(id),
                }}
                >
                {avatarName}
                </Avatar>
            }
            title={posterEmail}
            subheader={
                <Link to={`/tweet/${id}`} className={classes.link}>
                {moment(created).fromNow()}
                </Link>
            }
            />

            <CardContent className={classes.content}  onClick={handleClickOpen}   >
                <Markdown
                source={text}
                />

                {LinkPreviews}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-haspopup="true"
                    aria-owns={anchorEl ? "simple-menu" : null}
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={ MenuhandleClick }
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>

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
                            <EditIcon fontSize="small" />
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
                <MenuItem>
                    <ListItemIcon>
                        <CommentIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Comment</Typography>
                </MenuItem>

                </Menu>
            }

            <Dialog
                open={openEdit}
                TransitionComponent={Transition}
                keepMounted
                onClose={MenuhandleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Edit message</DialogTitle>
                <DialogContent>
                    <TextField multiline fullWidth
                        id="alert-dialog-slide-description" label="text" type="text"  fullWidth
                        defaultValue={text}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>            



            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Post message</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>            


        </Card>

    )
    
    

}

export default withStyles(styles)(MyTweet);;
