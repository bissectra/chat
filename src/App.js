import './App.css';
import './colors.css'
import Landing from './components/landing/Landing';
import React from 'react';
import ChatBody from './components/chat/ChatBody';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'login',
      user: {
        isLogged: false,
        email: '',
      },
    }
  }

  pageChanger = (page, userInfo) => {
    if (page === 'chat') {
      this.setState({
        user: { isLogged: true, ...userInfo }
      });
    }
    this.setState({ currentPage: page })
    console.log(this.state)
  }

  componentDidMount() {
    document.title = "Chat App"
  }

  render() {
    if (!this.state.user.isLogged) {
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
        <ChatBody user={this.state.user} />
      </div>
    )
  }
}

export default App;
