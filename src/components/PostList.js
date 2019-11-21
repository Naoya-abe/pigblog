import React from "react";
import { connect } from "react-redux";

import { getPostList } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPostList();
  }

  render() {
    return <div>PostList</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { getPostList })(PostList);
