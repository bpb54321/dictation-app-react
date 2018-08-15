import React from "react";

class InputSourceControl extends React.Component {

  render() {

    return (
      <fieldset>
        <legend>
          Select a input source
        </legend>
        <div>
          <label htmlFor="video">
            Video
          </label>
          <input id="video" name="input-source" type="radio" value="video" />
        </div>
        <div>
          <label htmlFor="audio">
            Audio
          </label>
          <input checked id="audio" name="input-source" type="radio"
            value="audio"
          />
        </div>
      </fieldset>
    );

  }

}

export default InputSourceControl;
