import { connect } from 'react-redux';
import SignIn from '../user/SignIn';

import { signIn } from '../store/actions/authActions';


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        data : state.auth.data,
        redirectToReferer: state.auth.redirectToReferer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (newUser) => dispatch( signIn(newUser) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
