import React from "react";
import { Link } from "react-router-dom";

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
            <div>
              <span>{selectedSerial.name} </span>
              <span>{selectedSerial.country} </span>
              <span>{selectedSerial.network}</span>
            </div>
            <div
              className="input"
              onChange={this.props.onComment}
              value={this.props.comment}
            >
              <input
                //  onChange={this.props.addComments}
                placeholder="Dodaj komentarz..."
              />
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}
