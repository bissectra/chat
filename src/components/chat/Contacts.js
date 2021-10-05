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
        console.log("contact '" + contactUsername + "' was clicked");
        this.setState({ selected: index });
    }

    render() {
        return (
            <div className="contacts">
                {this.state.contacts.map((contact, index) => (
                    <div className={"contact"}
                        key={index}
                        onClick={() => this.contactClicked(index)}
                    >
                        <div className={(index === this.state.selected ? "selected " : '') + "contact"}>
                            {contact}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Contacts;