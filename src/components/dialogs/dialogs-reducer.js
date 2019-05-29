import { EXECUTE_ADD_MESSAGE, EXECUTE_UPDATE_MESSAGE } from './constants';

const initialState = {
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
};

const dialogsReducer = (state = initialState, { type, payload }) => {
  const s = state;

  switch (type) {
    case EXECUTE_ADD_MESSAGE: {
      const newMessage = {
        id: 5,
        message: s.dataNewMessage,
      };

      s.dialogDataMessages.push(newMessage);
      s.dataNewMessage = '';
      return Object.assign({}, s);
    }
    case EXECUTE_UPDATE_MESSAGE: {
      s.dataNewMessage = payload.text;
      return Object.assign({}, s);
    }
    default:
      return Object.assign({}, s);
  }
};

export default dialogsReducer;
