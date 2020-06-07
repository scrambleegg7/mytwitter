import React from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField, Button, Grid, withStyles } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import './imageupload.css'

const styles = theme => ({

    caardroot: {
        maxWidth: 345,
      },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    paper: {
        padding: theme.spacing.unit * 2,
        height: 200,
    },
    tweetButton: {
        marginTop: theme.spacing.unit,
    },
    input: {
        display: "none"
    },
    imagepreview: {
        width: "300px",
        height: "150px",
        //object-fit: cover,    
    }
});

class TweetInput extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            selectedFile: null,
            preview: null,
        }
    }


    static propTypes = {
        classes: PropTypes.object.isRequired,
        onSubmit: PropTypes.func,
    };
  
    handleCapture = ({target})  => {

        const value = target.files[0].name;
        const size = target.files[0].size
        //const name = target.accept.includes("image") ? "images" : "videos";
        console.log("name", value);
        console.log("file size", size);
    
        if (size > 200000) {
            alert("ファイルサイズが大きすぎます。");
            return;
        }
        
        this.postData.set("photo", target.files[0])
        const objectUrl = URL.createObjectURL(target.files[0]);
        this.setState({
            selectedFile: value, 
            preview: objectUrl
        })

        //console.log("filename(TweetInput)", target.files[0])

    }

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

        const { data } = this.props;
        //console.log("TweetInput data(onSubmit) -> : ", data)

        this.postData.set("title", "title");
        this.postData.set("body", value);


        console.log("TweetInput - image path : ", this.postData.get("photo"))

        console.log("TweetInput FormData(onSubmit)", this.postData.entries() )

        const credentials = {
            userId: data.user._id,
            token: data.token,
            body: this.postData,
        }

        this.props.onSubmit(credentials, event);
        this.input.current.value = '';

        this.setState({
            selectedFile: null, 
            preview: null
        })


    };

    render() {
        const { classes, data } = this.props;
        const {selectedFile, preview} = this.state;
        console.log("TweetInput selectedImage -> : ", selectedFile)

        return (

            <form onSubmit={this.onSubmit} autoComplete="off">
                <TextField
                required
                fullWidth
                multiline
                rows={4}
                placeholder="伝えたいことはなんですか？"
                inputRef={this.input}
                />
                <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-photo"
                    onChange={this.handleCapture}
                    type="file"
                />


                <Grid container justify="flex-start" direction="row">

                <Grid item>
                <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                {selectedFile && <img src={preview} id="img" className="img" />}                
                </Grid>    
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
