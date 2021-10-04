import './MessageBubble.css'
import React from "react";

class MessageBubble extends React.Component {
    constructor(props) {
        super(props)
        const mine = props.mine;
        const text = props.text;
        this.state = {
            text: text,
            mine: mine
        }
    }

    render() {
        if(this.state.mine){
            return (
                <div class="mine-message">
                    <div class="talktext">
                    <p>{this.state.text}</p>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div class="not-mine-message">
                    <div class="talktext">
                    <p>{this.state.text}</p>
                    </div>
                </div>
            )
        }
    }
}

export default MessageBubble;

