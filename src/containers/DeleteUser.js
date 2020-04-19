import { connect } from 'react-redux';
import DeleteUser from '../user/DeleteUser';

//import { signOut } from '../store/actions/authActions';
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
        removeUser: (user) => dispatch( removeUser(user) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);
