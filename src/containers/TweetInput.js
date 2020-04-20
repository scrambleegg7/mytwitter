
import { connect } from 'react-redux';
import TweetInput from '../post/TweetInput';

import { createPost } from '../store/actions/tweetActions';


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
        createPost: (post) => dispatch( createPost(post) ) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TweetInput);
