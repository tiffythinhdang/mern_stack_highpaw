import * as ChatApiUtil from '../util/chat_util'
import { startLoading } from "./loading_actions";

export const RECEIVE_ALL_CHATS = 'RECEIVE_ALL_CHATS';

export const receiveAllChats = chats => ({
  type: RECEIVE_ALL_CHATS,
  chats
});

export const fetchAllChats = requestId => dispatch => {
  dispatch(startLoading());
  return ChatApiUtil.getChats(requestId)
    .then(
      response => dispatch(receiveAllChats(response.data)),
    )
};