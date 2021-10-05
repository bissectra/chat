import './TypingField.css'
import App from '../../App'
import React from "react";

class TypingField extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    handleInputChange = event => {
        console.log("oi")
        this.setState({text: event.target.value})
        //this.props.onMessagesChange(event.target.value)
    }

    handleSendMessage = () => {
        if(this.state.text != ""){
            this.props.handleMessagesChanged(this.state.text)
            this.setState({text: ""})
        }
    }
    
    render() {
        return (
            <div className="main-typing">
                <div className="emojis">
                    <img
                        className="emoji-image"
                        alt="emoji icon"
                        src="https://static.vecteezy.com/system/resources/previews/001/203/011/non_2x/emoji-png.png"
                    />
                </div>
                <div className="input-field">
                    <div className="inputs">
                        <input className="typing-bar" type="text" name="input-text" placeholder="Digite sua mensagem" onChange={this.handleInputChange} value={this.state.text}/>
                        <input className="send-button" type="submit" name="input-button" onClick={this.handleSendMessage} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TypingField;