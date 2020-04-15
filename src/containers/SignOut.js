import { connect } from 'react-redux';
import SignOut from '../user/SignOut';

import { signOut } from '../store/actions/authActions';


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        data : state.auth.data,
        redirectToReferer: state.auth.redirectToReferer,
        loading: state.auth.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch( signOut() )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignOut);