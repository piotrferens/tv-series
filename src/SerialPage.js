import React from "react";
import { Link } from "react-router-dom";

import CommentLogic from "./CommentLogic";
import DisplayingComments from "./DisplayingComments";

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
          <div
            className="serialImage"
            onClick={() =>
              this.props.handelLike(this.props.selectedSerial.id, 1)
            }
          >
            <img
              src={selectedSerial.image_thumbnail_path}
              alt={selectedSerial.name}
            />
          </div>
          <div className="serialInfo">
            <div className="serialDescription">
              <span>{selectedSerial.name} </span>
              <span>{selectedSerial.country} </span>
              <span>{selectedSerial.network} </span>
              <span>Likes: {selectedSerial.likes}</span>
            </div>

            <DisplayingComments selectedSerial={this.props.selectedSerial} />

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
