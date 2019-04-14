export const addPostActionCreator = () => ({
  type: 'AddPost',
});
export const updateNewPostActionCreator = text => ({
  type: 'UpdateNewPost',
  newText: text,
});
export const addMessageActionCreator = () => ({
  type: 'AddMessage',
});
export const updateNewMessageActionCreator = text => ({
  type: 'UpdateNewMessage',
  newText: text,
});
