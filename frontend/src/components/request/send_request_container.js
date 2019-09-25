import { sendRequest } from '../../actions/request_actions';
import { connect } from 'react-redux';
import SendRequest from './send_request';

const mapDispatchToProps = dispatch => {
  return {
    paw: walkId => dispatch(sendRequest(walkId))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SendRequest);