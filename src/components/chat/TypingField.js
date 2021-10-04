import './TypingField.css'
import React from "react";

class TypingField extends React.Component {
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
                    <form className="inputs">
                        <input className="typing-bar" type="text" name="input-text" placeholder="Type your message"></input>
                        <input className="send-button" type="submit" name="input-text" value="Send"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default TypingField;