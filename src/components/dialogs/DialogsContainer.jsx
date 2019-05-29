import React from 'react';
import { connect } from 'react-redux';

import { addMessage, updateMessage } from './actions';

import Dialogs from './Dialogs';

function DialogsContainer(props) {
  const {
    ...restProps
  } = props;

  return (<Dialogs {...restProps} />);
}

const mapDispatchToProps = dispatch => ({
  addMessage: () => dispatch(addMessage()),
  updateMessage: text => dispatch(updateMessage(text)),
});

const mapStateToProps = state => ({
  dialogNames: state.pageDialogs.dialogDataNames,
  dialogMessages: state.pageDialogs.dialogDataMessages,
  dataNewMessage: state.pageDialogs.dataNewMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
