import './RightFrame.css'
import TypingField from './TypingField';
import UserIcon from './UserIcon';
import React from "react";
import MessageBubble from './MessageBubble';

class RightFrame extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            contactClicked: true,
            messages: []
        }
    }

    menuIconClicked(e) {
        let mi = document.getElementById('menu-icon-friend');
        mi.classList.toggle("active")
    }

    componentDidMount() {
        this.loadMessages();
    }

    loadMessages() {
        this.setState({
            messages: [
                <MessageBubble mine={false} text={"teste1"}/>,
                <MessageBubble mine={true} text={"teste2"}/>,
                <MessageBubble mine={false} text={"testsdfse1"}/>,
                <MessageBubble mine={true} text={"testesdfs2"}/>,
                <MessageBubble mine={false} text={"teste1"}/>,
                <MessageBubble mine={false} text={"teste1"}/>,
                <MessageBubble mine={true} text={"teste2"}/>,
                <MessageBubble mine={false} text={"testsdfse1"}/>,
                <MessageBubble mine={true} text={"testesdfs2"}/>,
                <MessageBubble mine={false} text={"teste1"}/>,
                <MessageBubble mine={false} text={"teste1"}/>,
                <MessageBubble mine={true} text={"teste2"}/>,
                <MessageBubble mine={false} text={"testsdfse1"}/>,
                <MessageBubble mine={true} text={"testesdfs2"}/>,
                <MessageBubble mine={false} text={"teste1"}/>,
                <MessageBubble mine={false} text={"teste1"}/>,
                <MessageBubble mine={true} text={"teste2"}/>,
                <MessageBubble mine={false} text={"testsdfse1"}/>,
                <MessageBubble mine={true} text={"testesdfs2"}/>,
                <MessageBubble mine={false} text={"teste1"}/>
            ]
        })
    }

    render() {

        if(this.state.contactClicked){
            return (
                <div className='right-frame-wrapper'>
                    <div className="right-header">
                    <UserIcon sex={'NB'} username={"test111"} />
                        <div id="menu-icon-friend" className="menu-icon-friend" onClick={this.menuIconClicked}>
                            <div className="kebab">
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="messages-field">            
                        {this.state.messages}
                    </div>
                    <div className="typing-field">
                        <TypingField />
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className='right-frame-wrapper'>
                        <div className="right-header"></div>
                        <div className="messages-field">
                            Clique em uma conversa.
                        </div>
                        <div className="typing-field"></div>
                </div>
            )
        }
    }
}

export default RightFrame;

