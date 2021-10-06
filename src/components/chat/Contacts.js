import './Contacts.css'
import Contact from './Contact'
import React from "react";

class Contacts extends React.Component {
    contactClicked(index) {
        console.log("contact clicked")
        this.props.selectContactHandler(index);
    }

    render() {
        let contacts = this.props.conversations.length === 0 ?
            <h1>:(</h1> : this.props.conversations.map((conversation, index) => {
                return (
                    <div
                        key={index}
                        onClick={(event) => { this.contactClicked(index); }}
                        className={'contact' + (this.props.selected === index ? ' selected' : '')}
                    >
                        <Contact
                            token={this.props.token}
                            contactId={conversation.users[1].user}
                        />
                    </div>
                )
            })

        return (
            <div className="contacts">
                {contacts}
            </div>
        )
    }
}

export default Contacts;