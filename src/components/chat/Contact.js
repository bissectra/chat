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
                <div className="contact-wrapper">
                    <div className="contact-icon-section">
                        <div className="user-icon">
                            <UserIcon
                                username={this.state.username}
                                sex={this.getUserSex(this.username)}
                            />
                        </div>
                    </div>
                    <div className="contact-text-section">
                        <div className="contact-title">
                            {this.state.username}
                        </div>
                        <div className="contact-message">
                            Message
                        </div>
                    </div>
                    {/* {this.formatDate(this.state.lastMessage.timeStamp)} */}
                </div>
                <hr />
            </div>
        )
    }
}

export default Contact;