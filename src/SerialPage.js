import React from "react";
import { Link } from "react-router-dom";

import CommentLogic from "./CommentLogic";
import DisplayingComments from "./DisplayingComments";
import SerialDescription from "./SerialDescription";
import SerialImage from "./SerialImage";

export default class SerialPage extends React.Component {
  componentWillMount() {
    this.props.selectSerial(Number(this.props.match.params.serial));
  }
  render() {
    const { selectedSerial } = this.props;

    return selectedSerial ? (
      <div className="serialPage">
        <Link to="/" title="Previous" className="arrow prev" />
        <div className="serialPosition">
          <SerialImage
            selectedSerial={this.props.selectedSerial}
            handelLike={this.props.handelLike}
          />

          <div className="serialInfo">
            <SerialDescription selectedSerial={this.props.selectedSerial} />

            <DisplayingComments
              selectedSerial={this.props.selectedSerial}
              commentLikes={this.props.commentLikes}
              comments={this.props.comments}
            />

            <CommentLogic
              value={this.props.comment}
              addComment={this.props.addComment}
              id={this.props.selectedSerial.id}
            />
          </div>
        </div>
      </div>
    ) : null;
  }
}
