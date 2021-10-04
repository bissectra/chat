import './Contacts.css'
import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [
                <Contact username={"testUser1"} />,
                <Contact username={"testUser2"} />,
                <Contact username={"testUser3"} />,
                <Contact username={"testUser4"} />,
                <Contact username={"testUser5"} />,
                <Contact username={"testUser6"} />,
                <Contact username={"testUser7"} />,
            ]
        };
    }

    render() {
        return (
            <div className="contacts">
                {this.state.contacts.map(contact => <div className="contact">{contact}</div>)}
            </div>
        )
    }
}

export default Contacts;