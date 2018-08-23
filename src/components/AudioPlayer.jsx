import React from "react";

class AudioPlayer extends React.Component {

  constructor(props) {

    super();

    this.props = props;

  }

  render() {

    return (
      <div>
        <audio controls id="audio-player" src="">
          Your browser does not support the
          {" "}
          <code>
            audio
          </code>
          {" "}
          element.
        </audio>
      </div>
    );

  }

}

export default AudioPlayer;
