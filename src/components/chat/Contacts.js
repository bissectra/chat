import './Contacts.css'
import React from "react";

class Contacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: props.contacts,
            selected: props.selected,
        }
    }

    contactClicked(index) {
        const contactUsername = this.state.contacts[index].props.username;
        console.log("contact '" + contactUsername + "' was clicked")
    }

    shouldComponentUpdate(nextProps, nextState) {
        nextState.contacts = nextProps.contacts;
        nextState.selected = nextProps.selected;
        return true;
    }

    render() {
        return (
            <div className="contacts">
                {this.state.contacts.map((contact, index) => (
                    <div className={"contact" + (index === this.state.selected ? ' selected' : '')}
                        key={index}
                        onClick={() => this.contactClicked(index)}
                    >{contact}</div>
                ))}
            </div>
        )
    }
}

export default Contacts;