import './Contacts.css'
import React from "react";

class Contacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contacts: props.contacts }
    }

    contactClicked(index) {
        const contactUsername = this.state.contacts[index].props.username;
        console.log("contact '" + contactUsername + "' was clicked")
    }

    shouldComponentUpdate(nextProps, nextState) {
        nextState.contacts = nextProps.contacts;
        return true;
    }

    render() {
        return (
            <div className="contacts">
                {this.state.contacts.map((contact, index) => (
                    <div className="contact"
                        key={index}
                        onClick={() => this.contactClicked(index)}
                    >{contact}</div>
                ))}
            </div>
        )
    }
}

export default Contacts;