export const addPostActionCreator = () => ({
  type: 'AddPost',
});
export const updateNewPostActionCreator = text => ({
  type: 'UpdateNewPost',
  newText: text,
});
