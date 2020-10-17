import { connect } from 'react-redux';
import User from './../components/User/User';

const mapState = (state) => ({
    user: state.activeUser
});

export default connect(mapState)(User);