import React from "react";

class AudioPlayer extends React.Component {

  constructor(props) {

    super();
    this.props = props;

  }

  render() {

    const default_source = "https://papp.csps-efpc.gc.ca/courses/dept/CSPS/" +
      "C285/content/section03/audio/bc01.mp3";

    return (
      <div>
        <label
          htmlFor="audio-source"
        >
          Audio Source URL
        </label>
        <input
          id="audio-source"
          name="audio-source"
          type="url"
          value={default_source}
        />

        <audio
          controls
          id="audio-player"
          src=""
        >
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
