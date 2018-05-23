import { connect } from 'react-redux';

import { signup, logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  signup: (user) => dispatch(signup(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
