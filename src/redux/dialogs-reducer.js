const ADD_MESSAGE = 'AddMessage';
const UPDATE_NEW_MESSAGE = 'UpdateNewMessage';

const dialogsReducer = (state, action) => {
  const s = state;

  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: 5,
        message: s.dataNewMessage,
      };

      s.dialogDataMessages.push(newMessage);
      s.dataNewMessage = '';
      return s;
    }
    case UPDATE_NEW_MESSAGE: {
      s.dataNewMessage = action.newText;
      return s;
    }
    default:
      return s;
  }
};

export const addMessageActionCreator = () => ({
  type: 'AddMessage',
});
export const updateNewMessageActionCreator = text => ({
  type: 'UpdateNewMessage',
  newText: text,
});

export default dialogsReducer;
