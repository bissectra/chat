import './MessageBubble.css'
import React from "react";

class MessageBubble extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.text,
            mine: props.mine,
        }
    }

    render() {
        return (
            <div class={(this.state.mine ? '' : 'not-') + "mine message"}>
                <div class="talktext">
                    <p>{this.state.text}</p>
                </div>
            </div>
        )
    }
}

export default MessageBubble;

