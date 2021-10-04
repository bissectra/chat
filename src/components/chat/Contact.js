import "./Contact.css"
import React from "react";
import UserIcon from "./UserIcon"

class Contact extends React.Component {
    constructor(props) {
        super(props)
        let now = new Date();
        this.state = {
            username: props.username,
            lastMessage: {
                authoredByCurrentUser: false,
                content: 'Test Message',
                timeStamp: now,
            }
        }
    }

    formatDate(date) {
        return date.toLocaleString("pt-BR")
    }

    getUserSex() {
        console.log('Not Implemented');
        return 'M'
    }

    render() {
        return (
            <div>
                <UserIcon
                    username={this.state.username}
                    sex={this.getUserSex(this.username)}
                />
                {this.state.username}<br />
                {this.formatDate(this.state.lastMessage.timeStamp)}
                <hr/>
            </div>
        )
    }
}

export default Contact;