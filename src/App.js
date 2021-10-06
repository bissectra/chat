import './App.css';
import './colors.css'
import Landing from './components/landing/Landing';
import React from 'react';
import ChatBody from './components/chat/ChatBody';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLogged: false,
      currentPage: 'login',
    }
  }

  pageChanger = (page) => {
    if (page === 'chat') {
      this.setState({ userIsLogged: true });
    }
    this.setState({ currentPage: page })
  }

  componentDidMount() {
    document.title = "Chat App"
  }

  render() {
    if (!this.state.userIsLogged) {
      return (
        <div className="App">
          <Landing
            page={this.state.currentPage}
            pageChanger={this.pageChanger}
          />
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
