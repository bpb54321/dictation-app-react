import PropTypes from "prop-types";
import React from "react";

class LabelledInput extends React.Component {

  static propTypes = {
    "label": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "type": PropTypes.oneOf(["number", "text", "url", "date"]).isRequired,
    "value": PropTypes.string.isRequired,
  }

  render() {

    let name = "Laura";

    let pet = "Zippy";

    return (
      <div>
        <label htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input id={this.props.name} name={this.props.name}
          type={this.props.type}
          value={this.props.value}
        />
      </div>
    );

  }

}

export default LabelledInput;
