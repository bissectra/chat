import "./Contact.css"
import React from "react";
import UserIcon from "./UserIcon"

class Contact extends React.Component {
    constructor(props) {
        super(props)
        const now = new Date();
        this.state = {
            contactUsername: props.username,
            unreadCounter: Math.floor(Math.random() * 1000),
            lastMessage: {
                authoredByCurrentUser: [false, true][Math.floor(Math.random() * 2)],
                content: 'My favorite color is ' + ['Red', 'Green', 'Blue'][Math.floor(Math.random() * 3)] + ' :)',
                timeStamp: now,
                status: ['sending', 'sent', 'received'][Math.floor(Math.random() * 3)]
            },
        }
    }

    formatDate(date) {
        const hh_mm = date.toLocaleTimeString("pt-BR").slice(0, -3)
        return hh_mm;
    }

    formatMessage() {
        return this.state.lastMessage.content;
    }

    getUserSex() {
        console.log('function "getUserSex()" Not Implemented');
        return 'M'
    }

    render() {
        const status = this.state.lastMessage.status;
        let statusClassName = "status-icon";
        switch (status) {
            case "sent":
                statusClassName += " single-tick";
                break;
            case "received":
                statusClassName += " double-tick";
                break;
            default:
                statusClassName += " clock";
                break;
        }
        let statusDiv = <div className={statusClassName}></div>
        if (!this.state.lastMessage.authoredByCurrentUser) {
            statusDiv = <div></div>
        }
        return (
            <div>
                <hr />
                <div className="contact-wrapper">
                    <div className="contact-icon-section">
                        <div className="user-icon">
                            <UserIcon
                                username={this.state.contactUsername}
                                sex={this.getUserSex(this.username)}
                            />
                        </div>
                    </div>
                    <div className="contact-text-section">
                        <div className="contact-title">
                            {this.state.contactUsername}
                        </div>
                        <div className="contact-message">
                            <div>
                                {statusDiv} {this.formatMessage()}
                            </div>
                        </div>
                    </div>
                    <div className="meta">
                        <div className="date">
                            {this.formatDate(this.state.lastMessage.timeStamp)}
                        </div>
                        <div className="unread-counter" >{this.state.unreadCounter}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;