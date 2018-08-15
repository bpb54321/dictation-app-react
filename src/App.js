import './App.css';
import AudioPlayer from './components/AudioPlayer';
import React from 'react';

class App extends React.Component {

  render() {

    return (
      <div className="dictation-app">
        <header className="header">
          <h1 className="header__heading">Dictation App</h1>
        </header>
        <AudioPlayer/>
      </div>
    );

  }

}

export default App;
