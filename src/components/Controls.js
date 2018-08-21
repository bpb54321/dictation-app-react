import InputSourceControl from "./InputSourceControl";
import PlaybackControls from "./PlaybackControls";
import PropTypes from "prop-types";
import React from "react";

class Controls extends React.Component {

  static propTypes = {
    "inputSource": PropTypes.string.isRequired,
  };

  render() {

    return (
      <div>
        <InputSourceControl inputSource={this.props.inputSource} />
        <PlaybackControls />
      </div>
    );

  }

}

export default Controls;
