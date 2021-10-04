import './TypingField.css'
import React from "react";

class TypingField extends React.Component {
    /* constructor(props) {
        super(props)
        this.state = { contacts: [] }
    } */

    render() {
        return (
            <div className="main-typing">
                <div className="emojis">
                    <img className="emoji-image" alt="emoji icon" src="https://static.vecteezy.com/system/resources/previews/001/203/011/non_2x/emoji-png.png"></img>
                </div>
                <div className="input-field">
                    <form className="inputs">
                        <input className="typing-bar" type="text" name="input-text" placeholder="Digite sua mensagem"></input>
                        <input className="send-button" type="submit" name="input-text"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default TypingField;