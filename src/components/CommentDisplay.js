import React from 'react';
import {Button, withStyles,} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      chip: {
        margin: theme.spacing(0.5),
      },
      section1: {
        margin: theme.spacing(3, 2),
      },
      section2: {
        margin: theme.spacing(2),
      },
      section3: {
        margin: theme.spacing(3, 1, 1),
      },    
});

const CommentDisplay = (props) => {

    const {classes, comments} = props;

    return (
        <div className={classes.root}>

            {comments ? comments.map(
                comment => ( 
               <div className={classes.section1}>
                        <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h6">
                            {comment.postedBy.email}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6">
                            {comment.postedBy.lastname}
                            </Typography>
                        </Grid>
                        </Grid>
                        <Typography color="textSecondary" variant="body2">
                            {comment.text}
                        </Typography>
                </div>
               ))
                :
                ""
            }


        </div>
    )

}



export default withStyles(styles)(CommentDisplay);