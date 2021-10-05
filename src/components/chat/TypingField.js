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

    handleSendMessage(event) {
        /* if(this.state.text != "")
            console.log("oi"); */
        event.preventDefault();
        let x = this.InputChange;
        console.log(x())
    }

    handleChange(event){
        this.setState({text: event.target.value})
        console.log(this.state.text);
    }
    
    InputChange = (params) => {
        console.log("oi")
        this.props.changeHandler(params);
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
                        <input className="typing-bar" type="text" name="input-text" placeholder="Digite sua mensagem" value={this.state.text} onChange={this.handleChange.bind(this)}/>
                        <input className="send-button" type="submit" name="input-button" onClick={this.handleSendMessage.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TypingField;