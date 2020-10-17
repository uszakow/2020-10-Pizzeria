import { connect } from 'react-redux';
import Menu from './../components/Menu/Menu';

const mapState = (state) => ({
    user: state.activeUser
});

export default connect(mapState)(Menu);