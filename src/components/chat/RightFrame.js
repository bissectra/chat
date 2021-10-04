import './RightFrame.css'
import React from "react";

class RightFrame extends React.Component {
    render() {
        return (
            <div>
                <div className="messages-field">
                    Campo de mensagens
                </div>
                <div className="typing-field">
                    Campo de digitação
                </div>
            </div>
        )
    }
}

export default RightFrame;

