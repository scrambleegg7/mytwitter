import { connect } from 'react-redux';
import ButtonAppBar from '../components/ButtonAppBar';

import { signOut } from '../store/actions/authActions';
import { getUser } from '../store/actions/userActions';


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
        signOut: () => dispatch( signOut() ), 
        getUser: (user) => dispatch( getUser(user) )
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);
