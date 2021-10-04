import './RightFrame.css'
import React from "react";

class RightFrame extends React.Component {
    constructor(props) {
        super(props)
        /* this.state = { 'page': props.initialPage } */
    }

    render() {
        return(
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

