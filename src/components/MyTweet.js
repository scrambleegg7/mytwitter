import React, { Component, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  withStyles,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';

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




const MyTweet = ({
    classes,
    _id: id,
    body: text,
    createdAt,
    highlighted,
    }) => {

    const image = text.match(imageUrlRe);
    const urlMatches = text.match(/\b(http|https)?:\/\/\S+/gi) || [];
    const LinkPreviews = urlMatches.map(link => <MicrolinkCard url={link} />);

    const [open, setOpen] = useState(false);
    
    const [expanded, setExpanded ]  = useState(false);
    const [anchorEl, setAnchorEl ] = useState(null);

    const theme = useTheme();

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };


    const MenuhandleClick = (e) => { // 引数追加
        
        setAnchorEl(e.currentTarget);
        setExpanded(!expanded);
        
    };

    const MenuhandleClose = () => {
        setAnchorEl(null);
    }; 

    
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
                {id}
                </Avatar>
            }
            title={id}
            subheader={
                <Link to={`/tweet/${id}`} className={classes.link}>
                {moment(createdAt).fromNow()}
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
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                <ShareIcon />
                                </IconButton>
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
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={MenuhandleClose}
                                >
                                    <MenuItem onClick={MenuhandleClose}>Edit</MenuItem>
                                    <MenuItem onClick={MenuhandleClose}>Delete</MenuItem>
                                    <MenuItem onClick={MenuhandleClose}>Share</MenuItem>
                                </Menu>
 

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Title</DialogTitle>
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
