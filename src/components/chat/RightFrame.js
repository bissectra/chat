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
            contact: props.contact,
            me: props.me,
            messages: []
        }
    }

    componentDidMount() {
        this.loadMessages();
    }

    loadMessages() {
        const longText = "This is a very loooooooooooooong text: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        this.setState({
            messages: [
                ...[
                    <MessageBubble mine={false} text={"Hi, My name is " + this.state.contact + "."} />,
                    <MessageBubble mine={true} text={"Hello, I'm " + this.state.me + " :)"} />,
                ],
                ...[...Array(20).keys()].map(key => <MessageBubble mine={key % 2 == 1} text={"teste" + (key + 1)} />),
                ...[
                    <MessageBubble mine={false} text={longText} />,
                    <MessageBubble mine={true} text={"This message contains line breaks.\nThis sentence should be below."} />,
                ]
            ]
        })
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
                    <UserIcon sex={'NB'} username={"test111"} />
                    <Menu color={'secondary'} />
                </div>
                <div className="messages-field">
                    {this.state.messages.map((message, index) => <span key={index}>{message}</span>)}
                </div>
                <div className="typing-field">
                    <TypingField />
                </div>
            </div>
        )
    }
}

export default RightFrame;

