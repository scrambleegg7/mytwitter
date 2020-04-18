import { connect } from 'react-redux';
import ResetPassword from '../user/ResetPassword';

//import { signOut } from '../store/actions/authActions';
import {updateUser, removeUser} from '../store/actions/userActions';
import {resetPassword} from '../store/actions/authActions';


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        data : state.auth.data,
        redirectToReferer: state.auth.redirectToReferer,
        loading: state.auth.loading,
        user: state.user.userData,
        userError: state.user.userError,
        redirectToProfile: state.user.redirectToProfile,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (oldUser) => dispatch( updateUser(oldUser) ),
        removeUser: (user) => dispatch( removeUser(user) ),
        resetPassword: (user) => dispatch( resetPassword(user) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
