import React from "react";

export default class SerialDescription extends React.Component {
  render() {
    return (
      <div
        className="serialImage"
        onClick={() => this.props.handelLike(this.props.selectedSerial.id, 1)}
      >
        <img
          src={this.props.selectedSerial.image_thumbnail_path}
          alt={this.props.selectedSerial.name}
        />
      </div>
    );
  }
}
