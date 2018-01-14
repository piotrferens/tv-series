import React from "react";

export default class SerialDescription extends React.Component {
  state = {
    isHeartVisible: false
  };

  handleClick = () => {
    this.setState({ isHeartVisible: true });
    this.props.handelLike(1);
    setTimeout(() => this.setState({ isHeartVisible: false }), 1500);
  };

  render() {
    return (
      <div className="serialImage" onClick={this.handleClick}>
        <img
          src={this.props.selectedSerial.image_thumbnail_path}
          alt={this.props.selectedSerial.name}
        />
        {this.state.isHeartVisible ? <div className="heart" /> : null}
      </div>
    );
  }
}
