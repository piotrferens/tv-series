import React from "react";

export default class DisplayingComments extends React.Component {
  render() {
    return (
      <div className="comments">
        {this.props.selectedSerial.comments.length !== 0 ? (
          <div className="border" />
        ) : null}
        <div className="allComents">
          {this.props.selectedSerial.comments.map(comment => (
            <div className="comment" key={comment.id}>
              {comment.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
