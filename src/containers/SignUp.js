
import { connect } from 'react-redux';
import SignUp from '../user/SignUp';

import { signUp } from '../store/actions/authActions';


const mapStateToProps = (state) => {
    console.log("map state to props", state);
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
