import LabelledInput from "./LabelledInput";
import React from "react";

class PlaybackControls extends React.Component {

  render() {

    return (
      <fieldset>
        <legend>
          Looping Controls
        </legend>
        <LabelledInput label="Start Time" name="start-time" type="number"
          value="0"
        />
        <label htmlFor="end-time">
          End Time
        </label>
        <input id="end-time"
          name="end-time"
          type="number"
          value="10"
        />
        <label htmlFor="pause-time">
          Pause Time
        </label>
        <input id="pause-time" name="pause-time" type="number"
          value="10"
        />
        <button id="loop-button" type="button">
          Start / Stop Looping
        </button>
        <button id="shift-next-frame-button" type="button">
          Shift To Next Frame
        </button>
      </fieldset>
    );

  }

}

export default PlaybackControls;
