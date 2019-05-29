import { EXECUTE_ADD_POST, EXECUTE_UPDATE_POST } from './constants';

const initialState = {
  dataPosts: [
    {
      id: 1,
      name: 'Vitalii',
      message: 'Hey everyone, my name is Vitalii',
      like: 20,
      date: '17.03.19',
    },
    {
      id: 2,
      name: 'Vitalii',
      message: 'It\'s my first post',
      like: 15,
      date: '20.03.19',
    },
  ],
  dataNewPost: 'Введите ваше сообщение',
};

const profileReducer = (state = initialState, { type, payload }) => {
  const s = state;

  switch (type) {
    case EXECUTE_ADD_POST: {
      const newPost = {
        id: 3,
        name: 'Bob',
        message: s.dataNewPost,
        like: 0,
        date: '21.03.19',
      };

      s.dataPosts.push(newPost);
      s.dataNewPost = '';
      return Object.assign({}, s);
    }
    case EXECUTE_UPDATE_POST: {
      s.dataNewPost = payload.text;
      return Object.assign({}, s);
    }
    default:
      return Object.assign({}, s);
  }
};

export default profileReducer;
