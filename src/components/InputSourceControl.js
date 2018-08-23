import LabelledInput from "./LabelledInput";
import PropTypes from "prop-types";
import React from "react";

class InputSourceControl extends React.Component {

  static propTypes = {
    "inputSource": PropTypes.string.isRequired,
  }

  constructor(props) {

    super(props);

    this.props = props;

    this.state = {
      "inputSource": props.inputSource,
      "sourceUrl": "https://papp.csps-efpc.gc.ca/courses/dept/CSPS/" +
        "C285/content/section03/audio/bc01.mp3",
    };

  }

  handleOptionChange = (event) => {

    console.log(event.target);

    this.setState({
      "inputSource": event.target.value,
    });

  }

  render() {

    return (
      <fieldset>
        <legend>
         Input source
        </legend>
        <div>
          <label htmlFor="video">
            Video
          </label>
          <input checked={this.state.inputSource === "video"} id="video"
            name="input-source" onChange={this.handleOptionChange} type="radio"
            value="video"
          />
        </div>
        <div>
          <label htmlFor="audio">
            Audio
          </label>
          <input checked={this.state.inputSource === "audio"} id="audio"
            name="input-source" onChange={this.handleOptionChange} type="radio"
            value="audio"
          />
        </div>
        <LabelledInput label="Source URL" name="source-url" type="text"
          value={this.state.sourceUrl}
        />
      </fieldset>
    );

  }

}

export default InputSourceControl;
