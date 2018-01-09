import React from "react";

export default class SerialPage extends React.Component {
  render() {
    return <div>{this.props.selectedSerial.name}</div>;
  }
}
