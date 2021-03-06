import profileReducer from '../components/profile/wall/profile-reducer';
import dialogsReducer from '../components/dialogs/dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

const state = {
  pageProfile: {
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
  },

  pageDialogs: {
    dialogDataNames: [
      { id: 1, name: 'Abraham' },
      { id: 2, name: 'Adam' },
      { id: 3, name: 'Caleb' },
      { id: 4, name: 'Christopher' },
      { id: 5, name: 'Corey' },
      { id: 6, name: 'Earl' },
      { id: 7, name: 'Elliot' },
    ],
    dialogDataMessages: [
      { id: 1, message: 'Am if number no up period regard sudden better.' },
      { id: 2, message: 'Decisively surrounded all admiration and not you.' },
      { id: 3, message: 'Out particular sympathize not favourable introduced insipidity but ham.' },
      { id: 4, message: 'Rather number can and set praise. Distrusts an it contented perceived attending oh.' },
    ],
    dataNewMessage: 'Введите ваше сообщение',
  },

  sidebar: {

  },

  dispatch: (action) => {
    state.pageProfile = profileReducer(state.pageProfile, action);
    state.pageDialogs = dialogsReducer(state.pageDialogs, action);
    state.sidebar = sidebarReducer(state.sidebar, action);
  },
};

export default state;
