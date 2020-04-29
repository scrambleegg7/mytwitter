import React, { useState} from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {Card,
        CardHeader,
        CardMedia,
        CardContent,
        CardActions,Avatar,
        withStyles,} from '@material-ui/core';

import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';

import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Markdown from 'react-markdown';
import colorFrom from '../utils/colors';

import { useTheme } from '@material-ui/core/styles';
import MicrolinkCard from '@microlink/react';

import TweetMenu from './TweetMenu';




const imageUrlRe = /\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/g;

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

    const {classes, tweet, data, onRemovePost, onUpdatePost, onUpdateComment} = props;

    const postedBy = tweet.postedBy;
    const text = tweet.body;
    const created = tweet.created;
    const id = tweet._id;
    // comment 
    const comment = tweet.comments;

    const loginUserId = data.user._id;

    const posterId = postedBy ? postedBy._id : "";
    const posterFirstName = postedBy ? postedBy.firstname : "";
    const posterLastName = postedBy ? postedBy.lastname : "";
    const posterEmail = postedBy ? postedBy.email : "";
    //const posterBackGroundColor = postedBy ? postedBy.backgroundColor : "";
    //const posterCreated = postedBy ? postedBy.created : "";
    
    const avatarName = posterLastName.charAt(0) + posterFirstName.charAt(0);
    //console.log(avatarName)

    const image = text.match(imageUrlRe);
    const urlMatches = text.match(/\b(http|https)?:\/\/\S+/gi) || [];
    const LinkPreviews = urlMatches.map(link => <MicrolinkCard url={link} />);

    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    
    const [inputEditText, setEditInputText] = useState("");
    const [inputCommentText, setCommentInputText] = useState("");

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

    const handleClickOpenComment = () => {
        setOpenComment(true);
    };
    
    const handleCloseComment = () => {
        setOpenComment(false);
        MenuhandleClose()
    };

    const MenuhandleClick = (e) => { // 引数追加
        
        setAnchorEl(e.currentTarget);
        setExpanded(!expanded);
        //console.log("MenuhandleClick:", anchorEl, expanded )
    };

    const MenuhandleClose = () => {
        setAnchorEl(null);
    }; 

    const handleChangeEditText = name => event => {
        setEditInputText(event.target.value);
        console.log("TweetMain handleChange text", inputEditText);
    };    

    const handleChangeCommentText = name => event => {
        setCommentInputText(event.target.value);
        console.log("TweetMain handleChange (comment)", inputCommentText);
    };    

    const onUpdateCommentItem = () => {

        //const postData = new FormData();

        //postData.set("title", "title");
        //postData.set("body", inputEditText);
    
        console.log("MyTweet updatePost -> ", inputEditText)
        const credential = {
            userId: loginUserId,
            postId: id,
            comment: inputCommentText,
            token: data.token,
        }

        setAnchorEl(null);
        handleCloseComment();

        onUpdateComment(credential);

    }

    const onUpdatePostItem = () => {

        const postData = new FormData();

        postData.set("title", "title");
        postData.set("body", inputEditText);
    
        console.log("MyTweet updatePost -> ", inputEditText)
        const credential = {
            postId: id,
            body: postData,
            token: data.token,
        }

        setAnchorEl(null);
        handleCloseEdit();

        onUpdatePost(credential);

    }

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

            <TweetMenu isValidUserId = {isValidUserId}
                        open={open} 
                        openComment={openComment}
                        onRemovePostItem={onRemovePostItem} 
                        onUpdatePostItem={onUpdatePostItem}
                        onUpdateCommentItem={onUpdateCommentItem}
                        anchorEl = {anchorEl}
                        MenuhandleClose={MenuhandleClose} 
                        handleClickOpenEdit={handleClickOpenEdit}
                        handleClickOpenComment={handleClickOpenComment}
                        Transition={Transition} 
                        handleClose={handleClose}
                        text={text}
                        comment={comment}
                        openEdit={openEdit} 
                        handleCloseEdit={handleCloseEdit} 
                        handleCloseComment={handleCloseComment}
                        handleChangeCommentText={handleChangeCommentText}
                        handleChangeEditText={handleChangeEditText}
                    />

        </Card>

    )
    
    

}

export default withStyles(styles)(MyTweet);;
