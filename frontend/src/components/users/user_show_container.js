import { connect } from 'react-redux';

import UserShow from './user_show';
import { fetchDogsFromUser } from '../../actions/dogs_action';
import { fetchAUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.id;
  return {
    user: state.entities.users[userId],
    currentUserId: state.session.user.id,
    dogs: state.entities.dogs
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    fetchDogsFromUser: (id) => dispatch(fetchDogsFromUser(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);