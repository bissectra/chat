import './LeftFrame.css'
import React from "react";
import UserIcon from './UserIcon';
import Contacts from './Contacts';
import Contact from "./Contact";
import Menu from '../Menu';
import Input from '../Input';

class LeftFrame extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contacts: [] }
    }

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts() {
        this.setState({
            contacts: [...Array(8).keys()].map(key => <Contact username={"user" + key} />)
        })
    }

    render() {
        return (
            <div>
                <div className="left-header">
                    <UserIcon sex={'NB'} username={"test123"} />
                    <Menu color={'primary'} />
                </div>
                <Input />
                <Contacts className="contacts" contacts={this.state.contacts} />
            </div>
        )
    }
}

export default LeftFrame;

