const ADD_POST = 'AddPost';
const UPDATE_NEW_POST = 'UpdateNewPost';

const profileReducer = (state, action) => {
  const s = state;

  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 3,
        name: 'Bob',
        message: s.dataNewPost,
        like: 0,
        date: '21.03.19',
      };

      s.dataPosts.push(newPost);
      s.dataNewPost = '';
      return s;
    }
    case UPDATE_NEW_POST: {
      s.dataNewPost = action.newText;
      return s;
    }
    default:
      return s;
  }
};

export const addPostActionCreator = () => ({
  type: 'AddPost',
});
export const updateNewPostActionCreator = text => ({
  type: 'UpdateNewPost',
  newText: text,
});

export default profileReducer;
