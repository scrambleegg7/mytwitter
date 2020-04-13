import { connect } from 'react-redux';
import ButtonAppBar from '../components/ButtonAppBar';



const mapStateToProps = (state, ownProps) => {
    return {
        authError: state.auth.authError,
        data : state.auth.data,
        redirectToReferer: state.auth.redirectToReferer,
        loading: state.auth.loading,
    }
};

const mapDispatchToProps = (dispatch) => {  return {}  }


export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);
