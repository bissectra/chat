import "./App.css";
import "./colors.css";
import Landing from "./components/landing/Landing";
import React from "react";
import ChatBody from "./components/chat/ChatBody";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      currentPage: "login",
      user: {
        isLogged: false,
        email: "",
      },
    };
  }

  pageChanger = (page, responseData) => {
    if (page === "chat") {
      const userInfo = responseData.user;
      this.setState({
        token: responseData.token,
        user: { isLogged: true, ...userInfo },
      });
    }
    this.setState({ currentPage: page });
  };

  componentDidMount() {
    document.title = "Chat App";
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
        <ChatBody user={this.state.user} token={this.state.token} />
      </div>
    );
  }
}

export default App;
