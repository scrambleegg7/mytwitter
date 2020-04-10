
import { connect } from 'react-redux';
import SignUp from '../user/SignUp';

import { signUp, signIn } from '../store/actions/authActions';


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch( signUp(newUser) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
