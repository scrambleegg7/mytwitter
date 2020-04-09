
import { connect } from 'react-redux';
import SignUp from '../user/SignUp';

import { signUp, signIn } from '../store/actions/authActions';


const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({

    signUp(user) { dispatch(signUp(  user ))}

});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
