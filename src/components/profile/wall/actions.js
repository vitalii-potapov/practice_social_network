import { EXECUTE_ADD_POST, EXECUTE_UPDATE_POST } from './constants';

export const addPost = () => ({
  type: EXECUTE_ADD_POST,
});

export const updatePost = text => ({
  type: EXECUTE_UPDATE_POST,
  payload: { text },
});
