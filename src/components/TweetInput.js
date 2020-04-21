import React from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField, Button, Grid, withStyles } from '@material-ui/core';

import { connect } from 'react-redux';


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
    },
    tweetButton: {
        marginTop: theme.spacing.unit,
    },
});

class TweetInput extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        onSubmit: PropTypes.func,
    };

    componentDidMount = () => {
        this.postData = new FormData();
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

        const { classes, data } = this.props;
        //console.log("TweetInput data(onSubmit) -> : ", data)

        this.postData.set("title", "title");
        this.postData.set("body", value);

        console.log("TweetInput FormData(onSubmit)", this.postData.entries() )

        const credentials = {
            userId: data.user._id,
            token: data.token,
            body: this.postData,
        }

        this.props.onSubmit(credentials, event);
        this.input.current.value = '';

    };

    render() {
        const { classes, data } = this.props;

        //console.log("TweetInput data -> : ", data)

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


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        data : state.auth.data,
        redirectToReferer: state.auth.redirectToReferer,
        loading: state.auth.loading,
        tweets: state.tweets.postData,
        tweetError: state.tweets.postError,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default withStyles(styles)( connect(mapStateToProps, mapDispatchToProps)(TweetInput) );
