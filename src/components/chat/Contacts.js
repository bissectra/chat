import './Contacts.css'
import React from "react";
import Contact from './Contact';

class Contacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            selected: -1,
        }
    }

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts() {
        this.setState({
            contacts: [...Array(8).keys()].map(key => <Contact username={"user" + (key + 1)} />)
        })
    }

    contactClicked(index) {
        const contactUsername = this.state.contacts[index].props.username;
        console.log("contact '" + contactUsername + "' was clicked")
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