import './MessageBubble.css'
import React from "react";

class MessageBubble extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.text, // String
            mine: props.mine, // Bool
        }
    }

    render() {
        return (
            <div className={(this.state.mine ? '' : 'not-') + "mine message"}>
                <p className="message-text">
                    {this.state.text}
                </p>
            </div>
        )
    }
}

export default MessageBubble;

