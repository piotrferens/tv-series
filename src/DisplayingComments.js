import React from "react";

export default class DisplayingComments extends React.Component {
  render() {
    return (
      <div className="comments">
        {this.props.comments.length !== 0 ? <div className="border" /> : null}
        <div className="allComents">
          {this.props.comments.map(comment => (
            <div
              className="comment"
              key={comment.id}
              onClick={() => this.props.commentLikes(comment.id)}
              style={{ color: comment.liked ? "red" : "black" }}
            >
              {comment.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
