
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



        const { data } = this.props;

        this.state = {
            title: "",
            body: "",
            photo: "", 
            user: data.user.email, 
            userId: data.user._id,
            token: data.token,
            loading: false,
        }
    }

    static propTypes = {
        classes: PropTypes.object.isRequired,
        onSubmit: PropTypes.func,
    };

    componentDidMount = () => {

        this.postData = new FormData();

        
    }

    isValid = () => {
        const { body } = this.state;
        if (body.length === 0) {
            this.setState({ error: "Post fields are required", loading: false });
            return false;
        }
        return true;
    };


    handleChange = name => event => {
        this.setState({ error: "" });

        const value = event.target.value
        this.postData.set(name, value);
        this.setState({ [name]: value });
    };    

    input = React.createRef();

    
    handlePost = (e) => {
        e.preventDefault();

        this.setState({ loading: true });

        const { classes, data } = this.props;
        const { value } = this.input.current;
        this.postData.append("title", "title");
        this.postData.append("body", this.state.body);

        this.postData.set("title", "title");
        
        //console.log(this.postData.get("body"))
        
        const credentials = {
            userId: data.user._id,
            token: data.token,
            post: this.postData,
        }

        if (!value.trim()) {
            return;
        }
        console.log("TweetInput: entry data ->", credentials)

        this.input.current.value = '';
        
        this.props.createPost(credentials);


    }

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
            <form onSubmit={this.handlePost} autoComplete="off">

                <TextField id="body"
                required
                fullWidth
                multiline
                rows={2}
                placeholder="What's happening?"
                inputRef={this.input}
                onChange={this.handleChange("body")}
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
