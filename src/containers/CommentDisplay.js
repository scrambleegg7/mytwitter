
import { connect } from 'react-redux';
import CommentDisplay from '../components/CommentDisplay';

import { commentDelete } from '../store/actions/tweetActions';


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
        commentDelete: (post) => dispatch( commentDelete(post) ) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentDisplay);
