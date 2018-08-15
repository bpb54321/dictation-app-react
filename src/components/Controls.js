import InputSourceControl from "./InputSourceControl";
import PlaybackControls from "./PlaybackControls";
import React from "react";

class Controls extends React.Component {

  render() {

    return (
      <div>
        <InputSourceControl />
        <PlaybackControls />
      </div>
    );

  }

}

export default Controls;
