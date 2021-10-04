import './App.css';
import Landing from './components/landing/Landing';
import React from 'react';
import ChatBody from './components/chat/ChatBody';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLogged: true,
    }
  }

  componentDidMount() {
    document.title = "Chat App"
  }

  render() {
    if (!this.state.userIsLogged) {
      return (
        <div className="App">
          <Landing initialPage={'login'} />
        </div>
      );
    }
    return (
      <div className="App">
        <ChatBody />
      </div>
    )
  }
}

export default App;
