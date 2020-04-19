
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Paper, TextField, Button, Grid, withStyles } from '@material-ui/core';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
    },
    tweetButton: {
        marginTop: theme.spacing.unit,
    },
});

class TweetInput extends Component {

    constructor(props) {
        super(props)
    }

    static propTypes = {
        classes: PropTypes.object.isRequired,
        onSubmit: PropTypes.func,
    };

    componentDidMount = () => {
        
    }

    static defaultProps = {
        onSubmit: (v,e) => {
            console.log("TweetInput",v )
            //console.log("TweetInput event",e )
            
        },
    };

    input = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const { value } = this.input.current;

        if (!value.trim()) {
            return;
        }

        this.props.onSubmit(value, event);
        this.input.current.value = '';

    };

    render() {
        const { classes, data } = this.props;

        return (
            <Paper className={classes.paper}>
            <form onSubmit={this.onSubmit} autoComplete="off">
                <TextField
                required
                fullWidth
                multiline
                rows={2}
                placeholder="What's happening?"
                inputRef={this.input}
                />
                <Grid container justify="flex-end">
                <Grid item>
                    <Button disabled={!data}
                    variant="outlined"
                    color="primary"
                    type="submit"
                    className={classes.tweetButton}
                    >
                    Post
                    </Button>
                </Grid>
                </Grid>
            </form>
            </Paper>
        );
    }
}

export default withStyles(styles)(TweetInput);
