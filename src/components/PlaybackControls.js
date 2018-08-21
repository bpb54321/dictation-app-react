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

  handleChange = (stateKey, value) => {

    console.log(`New value: ${value}`);

    const newState = {};

    newState[stateKey] = value;

    this.setState(newState);

  }

  handleChangeEndTime = (event) => {

    this.handleChange("endTime", event.target.value);

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
        <label htmlFor="end-time">
          End Time
        </label>
        <input id="end-time" name="end-time"
          onChange={this.handleChangeEndTime} type="number"
          value={this.state.endTime}
        />
        <label htmlFor="pause-time">
          Pause Time
        </label>
        <input id="pause-time" name="pause-time" type="number"
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
