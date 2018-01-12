import React from "react";

export default class CommentLogic extends React.Component {
  state = {
    comment: ""
  };

  onComment = event => {
    const { value } = event.target;
    this.setState({ comment: value });
  };

  onKeyDown = event => {
    if (event.keyCode === 13) {
      this.props.addComment(this.props.id, this.state.comment);
      this.setState({ comment: "" });
    }
  };

  render() {
    return (
      <div className="input">
        <input
          onChange={this.onComment}
          value={this.state.comment}
          onKeyDown={this.onKeyDown}
          placeholder="Dodaj komentarz..."
        />
      </div>
    );
  }
}
