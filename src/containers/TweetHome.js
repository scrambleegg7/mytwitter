import { connect } from 'react-redux';
import TweetHome from '../post/TweetHome';

import { getPosts } from '../store/actions/tweetActions';


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        data : state.auth.data,
        redirectToReferer: state.auth.redirectToReferer,
        loading: state.auth.loading,
        tweets: state.tweets.data,
        tweetError: state.tweets.postError,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (token) => dispatch( getPosts(token) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TweetHome);
