import { connect } from 'react-redux';
import SignIn from '../user/SignIn';

import { signIn, getFirebaseToken } from '../store/actions/authActions';


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        data : state.auth.data,
        redirectToReferer: state.auth.redirectToReferer,
        loading: state.auth.loading,
        firebaseAuth: state.firebase.auth,
        firebaseToken: state.auth.firebaseToken, 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (newUser) => dispatch( signIn(newUser) ),
        getFirebaseToken: () => dispatch( getFirebaseToken() ),
        //signOut: () => dispatch( signOut() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
