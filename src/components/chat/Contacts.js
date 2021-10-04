import './Contacts.css'
import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contacts: [] }
    }

    loadContacts() {
        this.setState({
            contacts: [
                <Contact username={"user1"} />,
                <Contact username={"user2"} />,
                <Contact username={"user3"} />,
                <Contact username={"user4"} />,
                <Contact username={"user5"} />,
                <Contact username={"user6"} />,
                <Contact username={"user7"} />,
                <Contact username={"user8"} />,
            ]
        })
    }

    componentDidMount() {
        this.loadContacts();
    }

    contactClicked(index){
        const contactUsername = this.state.contacts[index].props.username;
        console.log("contact '" + contactUsername + "' was clicked")
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