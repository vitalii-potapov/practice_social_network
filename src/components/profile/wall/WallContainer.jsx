import React from 'react';
import { connect } from 'react-redux';

import { addPost, updatePost } from './actions';

import Wall from './Wall';

function WallContainer(props) {
  const {
    ...restProps
  } = props;

  return <Wall {...restProps} />;
}

const mapDispatchToProps = dispatch => ({
  addPost: () => dispatch(addPost()),
  updatePost: text => dispatch(updatePost(text)),
});

const mapStateToProps = state => ({
  dataPosts: state.pageProfile.dataPosts,
  dataNewPost: state.pageProfile.dataNewPost,
});

export default connect(mapStateToProps, mapDispatchToProps)(WallContainer);
