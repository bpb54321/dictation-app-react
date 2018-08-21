import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import Controls from "./components/Controls";
import React from "react";

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      "input_source": "video",
    };

  }

  render() {

    return (
      <div className="dictation-app">
        <header className="header">
          <h1 className="header__heading">
            Dictation App
          </h1>
        </header>
        <Controls inputSource={this.state.input_source} />
        <AudioPlayer />
      </div>
    );

  }

}

export default App;
