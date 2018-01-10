import React from "react";

export default class SerialPage extends React.Component {
  componentWillMount() {
    this.props.selectSerial(Number(this.props.match.params.serial));
  }
  render() {
    const { selectedSerial } = this.props;

    return selectedSerial ? (
      <div className="serialPage">
        <div className="serialPosition">
          <div
            className="serialImage"
            onClick={() =>
              this.props.handleLike(this.props.selectedSerial.id, 1)
            }
          >
            <img src={selectedSerial.image_thumbnail_path} />
          </div>
          <div className="serialInfo">
            <span>{selectedSerial.name} </span>
            <span>{selectedSerial.country} </span>
            <span>{selectedSerial.network}</span>
          </div>
        </div>
      </div>
    ) : null;
  }
}
