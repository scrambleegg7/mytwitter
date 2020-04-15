import { connect } from 'react-redux';
import Home from '../components/Home';

import { signIn } from '../store/actions/authActions';


const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        data : state.auth.data,
        redirectToReferer: state.auth.redirectToReferer,
        loading: state.auth.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (newUser) => dispatch( signIn(newUser) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
