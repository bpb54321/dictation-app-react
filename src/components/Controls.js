import InputSourceControl from "./InputSourceControl";
import PlaybackControls from "./PlaybackControls";
import React from "react";

class Controls extends React.Component {

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
