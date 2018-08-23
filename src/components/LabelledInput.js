import PropTypes from "prop-types";
import React from "react";

class LabelledInput extends React.Component {

  static propTypes = {
    "label": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "type": PropTypes.oneOf(["number", "text", "url", "date"]).isRequired,
    "value": PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  };

  constructor(props) {

    super(props);

    this.props = props;

    this.state = {
      "value": this.props.value,
    };

  }

  handleChange = (event) => {

    this.setState({
      "value": event.target.value,
    });

  }

  render() {

    return (
      <div>
        <label htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input id={this.props.name} name={this.props.name}
          onChange={this.handleChange}
          type={this.props.type}
          value={this.state.value}
        />
      </div>
    );

  }

}

export default LabelledInput;
