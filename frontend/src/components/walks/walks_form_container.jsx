import { connect } from 'react-redux';
import { createWalk } from '../../actions/walk_actions';
import { fetchDogsFromUser } from '../../actions/dogs_action';
import WalksForm from './walks_form';

const mapStateToProps = state => {
  let currentUser = state.session.user;

  return {
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWalk: () => dispatch(createWalk()),
    fetchDogsFromUser: userId => dispatch(fetchDogsFromUser(userId)),
    // fetchDog: id => dispatch(fetchDog(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalksForm)