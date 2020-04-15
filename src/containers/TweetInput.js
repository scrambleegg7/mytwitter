
import { connect } from 'react-redux';
import TweetInput from '../components/TweetInput';


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        data : state.auth.data,
        redirectToReferer: state.auth.redirectToReferer,
        loading: state.auth.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(TweetInput);
