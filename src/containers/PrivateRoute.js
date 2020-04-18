import { connect } from 'react-redux';
import PrivateRoute from '../auth/PrivateRoute';

//import { signOut } from '../store/actions/authActions';
import {updateUser} from '../store/actions/userActions';
import {removeUser} from '../store/actions/userActions';


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
        removeUser: (oldUser) => dispatch( removeUser(oldUser) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
