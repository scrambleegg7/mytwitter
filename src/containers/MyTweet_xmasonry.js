import React from 'react';
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
import Markdown from 'react-markdown';
import colorFrom from '../utils/colors';

import { makeStyles } from '@material-ui/core/styles';
import MicrolinkCard from '@microlink/react';
import { XMasonry, XBlock } from "react-xmasonry";
import './my.css'

const imageUrlRe = /\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/g;

const insertTextAtIndices = (text, obj) => {
    return text.replace(/./g, function(character, index) {
      return obj[index] ? obj[index] + character : character;
    });
  };



const styles = theme => ({
    card: {
        marginBottom: theme.spacing.unit * 2,
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    content: {
        wordWrap: 'break-word',
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.dark,
    },
});




const MyTweet = ({
    classes,
    id,
    text,
    createdAt,
    highlighted,
    }) => {



    const image = text.match(imageUrlRe);


    const urlMatches = text.match(/\b(http|https)?:\/\/\S+/gi) || [];


    const LinkPreviews = urlMatches.map(link => <MicrolinkCard url={link} />);



    
    return (
<XMasonry>
    <XBlock>
        <Card key={id}
            component={highlighted ? 'div' : 'li'}
            className={classes.card}
            elevation={highlighted ? 8 : 1}
            >    
           
            {image && (
                <CardMedia
                className={classes.cardMedia}
                image={image[0]}
                title="An tweet's image"
                />
            )}

            <CardHeader
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

            <CardContent className={classes.content}>
            <Typography variant="h3">
                <Markdown
                source={text}
                />
            </Typography>
            {LinkPreviews}
            </CardContent>            

        </Card>
    </XBlock>
</XMasonry>
    )
    
    

}

export default withStyles(styles)(MyTweet);;
