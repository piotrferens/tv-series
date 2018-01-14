import React from "react";

export default class SerialDescription extends React.Component {
  render() {
    return (
      <div className="serialDescription">
        <div>
          <span>{this.props.selectedSerial.name} </span>
          <span>{this.props.selectedSerial.country} </span>
          <span>{this.props.selectedSerial.network} </span>
        </div>
        <span style={{ fontSize: 10 }}>
          Liczba polubień: {this.props.selectedSerial.likes}
        </span>
      </div>
    );
  }
}
