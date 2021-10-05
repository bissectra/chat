import './RightFrame.css'
import TypingField from './TypingField';
import UserIcon from './UserIcon';
import React from "react";
import MessageBubble from './MessageBubble';
import Menu from '../Menu';

class RightFrame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contactClicked: true,
            me: '<me>',
            messages: [],
        }
    }

    componentDidMount() {
        this.loadMessages();
    }

    scrollToEnd() {
        let messagesField = document.getElementsByClassName("messages-field");
        messagesField[0].scrollTo(0, messagesField[0].scrollHeight);
    }

    componentDidUpdate() {
        //
    }

    loadMessages() {
        this.setState({
            messages: [
                <MessageBubble mine={false} text={"Hi, My name is " + this.props.contact + "."} />,
                <MessageBubble mine={true} text={"Hello, I'm " + this.state.me + " :)"} />,
                <MessageBubble mine={false} text={"This message contains line breaks.\nThis sentence should be below."} />,
            ]
        }, this.scrollToEnd);
    }

    sendNewMessage = (message) => {
        let newMessages = this.state.messages;
        newMessages.push(<MessageBubble mine={true} text={message} />);
        this.setState({ messages: newMessages }, () => {
            let messagesField = document.getElementsByClassName("messages-field")[0];
            messagesField.scrollTo(0, messagesField.scrollHeight);
        });
    }

    render() {
        if (!this.state.contactClicked) {
            return (
                <div className='right-frame-wrapper empty'>
                    <div className="right-header"></div>
                    <div className="messages-field">
                        Choose a contact to start chatting!
                    </div>
                </div>
            )
        }
        return (
            <div className='right-frame-wrapper'>
                <div className="right-header">
                    <UserIcon sex={'NB'} username={this.props.contact} />
                    {this.props.contact}
                    <Menu color={'secondary'} />
                </div>
                <div className="messages-field">
                    {this.state.messages.map((message, index) => <span key={index}>{message}</span>)}
                </div>
                <div className="typing-field">
                    <TypingField handleMessagesChanged={this.sendNewMessage} />
                </div>
            </div>
        )
    }
}

export default RightFrame;

