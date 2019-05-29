import { EXECUTE_ADD_MESSAGE, EXECUTE_UPDATE_MESSAGE } from './constants';

export const addMessage = () => ({
  type: EXECUTE_ADD_MESSAGE,
});
export const updateMessage = text => ({
  type: EXECUTE_UPDATE_MESSAGE,
  payload: { text },
});
