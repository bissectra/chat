import './ChatBody.css'
import React from "react";
import LeftFrame from './LeftFrame';
import RightFrame from './RightFrame';

class ChatBody extends React.Component {
    render() {
        return (
            <div className="main-chat">
                <div className="chat-header"></div>
                <div className="chat-frame">
                    <div className="left-frame">
                        <LeftFrame />
                    </div>
                    <div className="right-frame">
                        <RightFrame />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatBody;
