import React from "react";

import { LikeIt } from "./ButtonLike";

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
            >
              <span style={{ width: "94%" }}>{comment.text}</span>
              {comment.liked ? <LikeIt /> : null}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
