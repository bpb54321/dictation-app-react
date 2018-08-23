import LabelledInput from "./LabelledInput";
import React from "react";

class PlaybackControls extends React.Component {

  constructor(props) {

    super(props);

    this.props = props;

    this.state = {
      "endTime": 10,
      // "isPlaying": false,
      "pauseTime": 10,
      "startTime": 0,
    };

  }

  render() {

    return (
      <fieldset>
        <legend>
          Looping Controls
        </legend>
        <LabelledInput label="Start Time" name="start-time" type="number"
          value={this.state.startTime}
        />
        <LabelledInput label="End Time" name="end-time" type="number"
          value={this.state.endTime}
        />
        <LabelledInput label="Pause Time" name="pause-time" type="number"
          value={this.state.pauseTime}
        />
        <button id="loop-button" type="button">
          Reset Loop to Start
        </button>
        <button id="loop-button" type="button">
          Play
        </button>
        <button id="loop-button" type="button">
          Pause
        </button>
        <button id="shift-next-frame-button" type="button">
          Shift Loop to Next Frame
        </button>
      </fieldset>
    );

  }

}

export default PlaybackControls;
