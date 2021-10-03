import './App.css';
import Landing from './components/Landing';
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    document.title = "Chat App"
  }

  render() {
    return (
      <div className="App">
        <Landing initialPage={'login'} />
      </div>
    );
  }
}

export default App;
