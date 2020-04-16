import { connect } from 'react-redux';
import Profile from '../user/Profile';

//import { signOut } from '../store/actions/authActions';


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        data : state.auth.data,
        redirectToReferer: state.auth.redirectToReferer,
        loading: state.auth.loading,
        user: state.user.userData,
        redirectToProfile: state.user.redirectToProfile,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
