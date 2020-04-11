import { connect } from 'react-redux';
import SignIn from '../user/SignIn';

import { signIn } from '../store/actions/authActions';


const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({

    signIn(user) { dispatch(signIn(  user ))}

});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
