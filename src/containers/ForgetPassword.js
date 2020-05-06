import { connect } from 'react-redux';
import ForgetPassword from '../user/ForgetPassword';

import { forgetPassword } from '../store/actions/authActions';


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        data : state.auth.data,
        redirectToReferer: state.auth.redirectToReferer,
        loading: state.auth.loading,
        firebaseAuth: state.firebase.auth,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        forgetPassword: (email) => dispatch( forgetPassword(email) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
